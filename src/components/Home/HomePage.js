import videoHomepage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
   const isAuthenticated = useSelector(state=> state.user.isAuthenticated )
   const navigate = useNavigate();

    return(
        <div className="homepage-container">
        <video width="500px" height="500px" autoPlay muted loop>
          <source
         src={videoHomepage} 
         type="video/mp4"></source>
         
         
        </video>
         <div className='homepage-content'>
           <div className='title-one'>There's a better way to ask</div>
             <div className='title-two'>You don't want to make a boring form. And your audience won't 
                  answer one. Create a typeform instead—and make everyone happy.
             </div>
             <div className='title-three'>
              {isAuthenticated === true ?
                <button onClick={()=>navigate('/users')}>Doing Quiz Now</button>
                :
                <button onClick={()=>navigate('/login')}> Get started - it's free</button>
              }
              </div>
           </div>
          </div>
    )
}
export default HomePage;