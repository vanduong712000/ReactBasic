import _ from 'lodash';

const Question = (props) => {
    const {data , index} = props;
    if( _.isEmpty(data)){
        return (<></>)
    }
    return (
        <>      
          {data.image &&
               <div className='q-image'>
                       <img src={`data:image/jpeg;base64,${data.image}`}/>
               </div>
           }
              <div className="question">Question {index + 1}: {data.questionDescription} ?</div>
                         <div className="answer">
                            {data.answers && data.answers.legnth && 
                            data.answers.map((a, index)=> {
                                return (
                                    <div 
                                    key={`answer-${index}`} 
                                    className="a-child">
                                        <div class="form-check">
                                  <input class="form-check-input" 
                                  type="checkbox" value="" 
                                  id="flexCheckDefault"/>
                                  <label class="form-check-label" 
                                  for="flexCheckDefault">
                                   Default checkbox
                                   </label>
</div>
                                        {a.description}
                                    </div>
                                )
                            })
                            }
                           
                         </div>
        </>
    )
}
export default Question;