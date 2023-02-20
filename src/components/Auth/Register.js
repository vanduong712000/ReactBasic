import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import { toast } from 'react-toastify';
import { postRegister } from '../../services/apiServices';
import { VscEye , VscEyeClosed } from 'react-icons/vsc';
import Language from '../Header/Language';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleRegister = async() => {
        //validate email
        const isValidEmail = validateEmail(email);
         if(!isValidEmail){
              toast.error('invalid email')
        //       // toast.success()
        //       // toast.info()
              return;
         }
         if(!password){
          toast.error('invalid password')
          return;
         }

        //submit apis
        let data = await postRegister(email, password , username);
        // console.log(">>> check data: ", data);
        if(data && data.EC === 0){
            toast.success(data.EM);
            navigate('/admins')
          }
            if(data && +data.EC !==0){
              toast.error(data.EM);
              
            }
      
    }

    return (
                <div className="login-container mx-auto">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={()=> { navigate('/login')}}>Login</button>
                <Language />
            </div>
            <div className='title col-4 mx-auto'>
                Project 1
            </div>
            <div className='welcome col-4 mx-auto'>
                       Start your hourney?
            </div>
            <div className='content-form col-4 mx-auto'>
                  <div className='form-group'>
                    <label>Email</label>
                    <input 
                    type={"email"} 
                    className="form-control" 
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    />
                  <div className='form-group pass-group'>
                    <label>password</label>
                  
                    <input 
                    type={isShowPassword ? "text" :"password"} 
                    className="form-control" 
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    />

                      {isShowPassword ?
                        <span className="icons-eye"
                              onClick={() => setIsShowPassword(false)}>
                                 <VscEye /> 
                        </span>
                        :
                        <span className="icons-eye"
                        onClick={() => setIsShowPassword(true)}>
                                 <VscEyeClosed />
                        </span>
                        }
                        
                  </div>
                  <div className='form-group'>
                            <label>Username</label>
                            <input 
                            type={"text"} 
                            className="form-control" 
                            value={username}
                            onChange={(event)=> setUsername(event.target.value)}
                          />
                        </div>
                     <button 
                         className='btn-submit'
                         onClick={()=> handleRegister()}
                       >Create my free account</button>
                    </div>
                    <div className='text-center'>
                        <span className="back" onClick={()=> { navigate('/')}}> &#60;&#60; Go to Homepage</span>
                    </div>
            </div>
           
            
        </div>
              
    )
}
export default Register;