import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
    return(
        <div className="homepage-container">
        <video width="500px" height="500px" autoPlay muted loop>
          <source
         src={videoHomepage} 
         type="video/mp4"></source>
          />
         
        </video>
        </div>
    )
}
export default HomePage;