import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'

  const App = () => {

      return (
      
        <div className="app-container">
          <div className='header-container'>
               <Header />
          </div>
          <div className='main-container'>
            <div className='sidenav-container'>

            </div>
          </div>
          <div className='app-content'>
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
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


    
   



