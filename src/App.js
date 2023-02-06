import './App.css';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";

  const App = () => {

      return (
        <div className="app-container">
        <Header />
        <div>
           test link
           <div>
            <button>
            <Link to="/Users"> go to user page</Link>
            </button>

            <button>
            <Link to="/Admins"> go to Admin page</Link>
              
              
            </button>
           </div>
        </div>
        </div>
      );
    }





     // //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // //</div>
 
   
  export default App;


    
   



