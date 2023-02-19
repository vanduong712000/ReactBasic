import _ from 'lodash';
import { useState } from 'react';
import Lightbox from 'react-lightbox-component';

const Question = (props) => {
    const {data , index } = props;

   const [isPreviewImage, setIsPreviewImage] = useState(false);

    if( _.isEmpty(data)){
        return (<></>)
    }

    const handleHanleCheckbox = (event, aId, qId) => {
    //   console.log('check: ', event.target.checked)
    console.log('>>> data props: ', aId , qId);
      props.handleCheckbox(aId, qId)
    }
    return (
        <>      
          {data.image ?
               <div className='q-image'>
                       <img 
                       onCLick={() => setIsPreviewImage(true)}
                       src={`data:image/jpeg;base64,${data.image}`}/>
               </div>
               :
               <div className='q-image'>
                      { isPreviewImage === true &&
                 <Lightbox 
                      images={`data:image/jpeg;base64,${data.image}`}
                      title={"Question Image"}
                      onClose={()=> setIsPreviewImage(false)}
                  />
                 }  
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
                                    <div className="form-check">
                                  <input className="form-check-input" 
                                  type="checkbox"
                                  checked={a.isSelected}
                                  onChange={(event, id) => handleHanleCheckbox(event, a.id, data.questionId)}
                                  />
                                  <label className="form-check-label" 
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