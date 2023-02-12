import { 
    Routes,
    Route,
  } from "react-router-dom";
  import User from './components/User/User';
  import Admin from './components/Admin/Admin';
  import HomePage from './components/Home/HomePage';
  import Dashboard from './components/Content/Dashboard';
  import ManageUser from './components/Content/ManageUser';
  import Login from './components/Auth/Login';
  import App from './App';
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";


const NotFound = () => {
  return(
    <div className="alert alert-danger">
    404 not found data with your current url
    </div>
  )
}
const Layout = (props) => {
   return (
   <>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<HomePage />}/>
            <Route path="users" element={<ListQuiz />}/>
          </Route>
            <Route path="/quiz/:id" element={<DetailQuiz />}/>
            <Route path="/admins" element={<Admin />} >
                <Route index element={<Dashboard />}/>
                <Route path="manage-users" element={<ManageUser />}/>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>


        <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
   </>
   )
}
export default Layout;