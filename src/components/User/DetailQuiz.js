import { useState , useEffect } from "react";
import { useParams , useLocation } from "react-router-dom";
import { getDataQuiz , postSubmitQuiz} from "../../services/apiServices"
import _ from 'lodash';
import './DetaiQuiz.scss'
import Question from "./Question";
import ModalResult from "./ModalResult";
import RightContent from "./RightContent/RightContent";

const DetailQuiz =(props) => {
    const params = useParams(); //Khai báo tham số theo link id
    const location = useLocation(); //muốn biết người dùng ở đâu ra
    // console.log(location)

    const quizId = params.id;
    
    const [dataQuiz,setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});

     useEffect(()=> {
        fetchQuestions();
     }, [quizId])

     const fetchQuestions = async () => {
        let  res = await getDataQuiz(quizId);
        // console.log('>>>>> check question: ', res)
        if(res && res.EC === 0){
            let raw = res.DT;
           let data = _.chain(raw)
    // Group the elements of Array based on `color` property
    .groupBy("id")
    // `key` is group's name (color), `value` is the array of objects
    .map((value, key) => { 
        let answers = [];
        let questionDescription, image = null;
        value.forEach((item, index) => {
            if(index === 0){
                questionDescription = item.description;
                image = item.image;
            }
            item.answers.isSelected = false; //bien data base
          answers.push(item.answers);
        })
        // console.log('value: ', value, 'key: ', key)
        
        
          return { questionId: key, answers , questionDescription , image }
        }
        )
    .value();
    // console.log(data)
    setDataQuiz(data)
        }
     }

    // console.log(">>>> check dataQuiz: ", dataQuiz )
    
    const handlePrev = () => {
        if(index -1 < 0) return
          setIndex(index - 1)
    }
    
    const handleNext = () => {
        if(dataQuiz && dataQuiz.length > index + 1)
        setIndex(index + 1)
    }

    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);// react hook doesn't merge state
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if(question && question.answers){

            question.answers = question.answer.map(item => {
                if(item.id === answerId){
                    item.isSelected = !item.isSelected;
                }
                return item;
            })  
    }
    
          let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
         if(index > 1){
            dataQuizClone[index] = question;
         }
        }
    
        const handleFinishQuiz = async() => {
            // {
            //     "quizId": 1,
            //     "answers": [
            //         { 
            //             "questionId": 1,
            //             "userAnswerId": [3]
            //         },
            //         { 
            //             "questionId": 2,
            //             "userAnswerId": [6]
            //         }
            //     ]
            // }
            
            console.log(">>>check data before submit: ", dataQuiz)
            let payload = {
                quizId : +quizId,
                answers: []
            
            };
            let answers = [];
            if(dataQuiz && dataQuiz.length > 0){
                   dataQuiz.forEach(question => {

                     let questionId = question.questionId;
                     let userAnswerId = [];
                        
                      //todo: userAnswerId
                     question.answers.forEach( a => {
                      if(a.isSelected === true){
                        userAnswerId.push(a.id)
                      }
                     })
                     answers.push({
                        questionId : +questionId,
                        userAnswerId: userAnswerId
                     })
                   })
                   payload.answer = answers;
                   //submit api
                    let res = await postSubmitQuiz(payload);
                    console.log('check res: ', res)
                    if(res && res.EC === 0 ){
                        setDataModalResult({
                            countCorrect: res?.DT?.countCorrect,
                            countTotal: res?.DT?.countTotal,
                            quizData: res?.DT?.quizData,
                        })
                        setIsShowModalResult(true);
                    }else {
                        alert('something wrongs...')
                    }
            }
        }
        
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                 <div className="title">
                      Quiz {quizId}: {location?.state?.quizTitle}
                 </div>
                 <hr/>
                 <div className="q-body">
                    image
                 </div>
                 <div className="q-content">
                         <Question 
                             index={index}
                             handleCheckbox={handleCheckbox}
                             data={dataQuiz && dataQuiz.length > 0 
                         ? dataQuiz[index] 
                         : []}/>
                 </div>
                 <div className="footer">
                         <button className="btn btn-secondary"
                         onClick={()=> handlePrev()}
                         >Prev</button>
                         <button className="btn btn-primary"
                          onClick={()=> handleNext()}
                         > Next</button>

                         <button className="btn btn-warning"
                          onClick={ ()=> handleFinishQuiz() }
                         > Finish</button>
                 </div>
            </div>
            <div className="right-content">
                <RightContent 
                 index={index}
                 dataQuiz={dataQuiz}
                 handleFinishQuiz={handleFinishQuiz}
                />
            </div>
            <ModalResult 
            show={isShowModalResult}
            setShow={setIsShowModalResult}
            dataModalResult={dataModalResult}
        
            />
            
        </div>
    )
}
export default DetailQuiz;