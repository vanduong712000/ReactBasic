import videoHomepage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const HomePage = (props) => {
   const isAuthenticated = useSelector(state=> state.user.isAuthenticated )
   const navigate = useNavigate();
   const { t } = useTranslation();
    return(
        <div className="homepage-container">
        <video width="500px" height="500px" autoPlay muted loop>
          <source
         src={videoHomepage} 
         type="video/mp4"></source>
         
         
        </video>
         <div className='homepage-content'>
           <div className='title-one'>
            
            {t('homepage.title1')}
            </div>
             <div className='title-two'>
             {t('homepage.title2')}
             </div>
             <div className='title-three'>
              {isAuthenticated === false ?
                <button onClick={()=>navigate('/login')}> Get started - it's free</button>
                :
                
                <button onClick={()=>navigate('/users')}>Doing Quiz Now</button>
              }
              </div>
           </div>
          </div>
    )
}
export default HomePage;