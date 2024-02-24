import React , {useState , useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaRegEyeSlash , FaRegEye  } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Signup = () => {
    const [passwordVisible , setPasswordVisible] = useState(false);
    const[username , setUsername] =useState('');
    const [email , setEmail] = useState('');
    const[password , setPassword] = useState('');


    const fileRef = useRef();

    const [avatar , setAvatar] = useState(null);



    const handleSubmit = (e)=>{

         e.preventDefault();
    }


    const handleFileInputChange = (e) =>{


              const file = e.target.files[0];
              setAvatar(file);
    } 
 
 
   return (
     <div className='bg-gray-50 flex  items-center min-h-screen p-2'>
 
          
 
          <div className='bg-white shadow p-5 max-w-sm mx-auto rounded flex-1'>
          <h1 className='text-xl text-center my-3 font-bold '>Register as a new user</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-5 p-3'>

              <div className='flex items-center gap-2 mx-auto  p-2'>

              {avatar ?   <img src={URL.createObjectURL(avatar)} className='w-10 h-10 rounded-full object-cover' alt='profile image' /> :  <FaRegUserCircle  className='w-10 h-10'/> }
             
              <input type='file'  ref={fileRef} accept='.jpg,.jpeg,.png'  onChange={handleFileInputChange} className='hidden'/>
              <button onClick={()=>fileRef.current.click()}   type='button' className='border p-2 rounded text-gray-500'>Upload Image </button>

              </div>

            <div className='flex flex-col gap-1'>
                 <label htmlFor='name' className='text-gray-500 text-sm '>Full Name</label>
                 <input type='text' name='name' id='name' className='outline-none border rounded p-1'  value={username}  onChange={(e)=>setUsername(e.target.value)} />
               </div>

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
 
              
 
               <button className='bg-blue-700 hover:bg-blue-800 font-semibold text-white rounded p-2'>Signup</button>
            </form>
 
               <div className='flex text-sm gap-2 flex-wrap'>
                  <h5>Already have an account?</h5>
                  <Link to='/sign-in' className='text-blue-600'>Sign In</Link>
               </div>
          </div>
     </div>
   )
}

export default Signup