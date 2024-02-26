import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaRegEyeSlash , FaRegEye  } from "react-icons/fa6";
import axios from "axios";
import { server } from "../server";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const Signin = () => {

   const [passwordVisible , setPasswordVisible] = useState(false);
   const [email , setEmail] = useState('');
   const[password , setPassword] = useState('');



   const navigate = useNavigate();



   const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post(`${server}/auth/signin` ,{

               email ,
               password,
      })
      .then((res) => {
        
          if(res.data.success === true){
                 toast.success(res.data.message);
            setTimeout(()=>{
              navigate('/');
            } , 2000)
               

                setEmail('')
                setPassword('');
              
          }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
     
          toast.error(err.response.data.error);
      } else {
          
          toast.error("An error occurred");
      }
      });
  };


  return (
    <div className='bg-gray-50 flex  items-center min-h-screen p-2'>

         

         <div className='bg-white shadow p-5 max-w-sm mx-auto rounded flex-1'>
         <h1 className='text-xl text-center my-3 font-bold '>Login to your account</h1>
           <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-5 p-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='email' className='text-gray-500 text-sm '>Email address</label>
                <input type='email' name='email' id='email' className='outline-none border rounded p-1'  value={email}  onChange={(e)=>setEmail(e.target.value)} />
              </div>


              <div className='flex flex-col gap-1'>
                <label htmlFor='password' className='text-gray-500 text-sm '>Password</label>
                <div className='flex justify-between gap-1 items-center outline-none border rounded  flex-1'>
                <input type={passwordVisible ? 'text' : 'password'} name='password' id='password' className='border-none outline-none w-full p-1' value={password}  onChange={(e)=>setPassword(e.target.value)}  />

                {passwordVisible  ? <FaRegEye className='text-xl me-1' onClick={()=>setPasswordVisible(false)} />  : <FaRegEyeSlash onClick={()=>setPasswordVisible(true)} className='text-xl me-1'  />   }
               
                 
                </div>
              </div>

              <div className='flex justify-between items-center flex-wrap'>
                <div className='flex gap-2'>
                  <input type='checkbox' name='remember-me' id='remember-me' />
                  <label htmlFor='remember-me' className='text-gray-500 text-sm'>Remember me</label>
                </div>

                 <Link className='text-sm text-blue-700'>Forgot your password?</Link>
              </div>


              <button className='bg-blue-700 hover:bg-blue-800 font-semibold text-white rounded p-2'>Login</button>
           </form>

              <div className='flex text-sm gap-2 flex-wrap'>
                 <h5>Don't have an account?</h5>
                 <Link to='/sign-up' className='text-blue-600'>Sign Up</Link>
              </div>
         </div>
    </div>
  )
}

export default Signin