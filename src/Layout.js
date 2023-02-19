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
import ManageQuiz from "./components/Content/Quiz/ManageQuiz";
import Questions from "./components/Content/Question/Questions";
import PrivateRoute from "./routes/PrivateRoute";


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
            
            <Route path="users" element={
            <PrivateRoute> 
                    <ListQuiz /> 
            </PrivateRoute>
            }/>
          </Route>
            <Route path="/quiz/:id" element={<DetailQuiz />}/>
            <Route path="/admins" element={
              <PrivateRoute>
                 <Admin />
              </PrivateRoute>} >
                <Route index element={<Dashboard />}/>
                <Route path="manage-users" element={<ManageUser />}/>
                <Route path="manage-quizzes" element={<ManageQuiz />}/>
                <Route path="manage-questions" element={<Questions />}/>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/test" element={<PrivateRoute />}/>
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