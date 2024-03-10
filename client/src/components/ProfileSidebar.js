import React ,{useState , useEffect}from 'react'
import {Link ,  useNavigate} from 'react-router-dom'
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag  , HiOutlineReceiptRefund} from "react-icons/hi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiLoginCircleLine } from "react-icons/ri";

import { FaRegAddressBook } from "react-icons/fa";
import {  useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import toast from "react-hot-toast";




const ProfileSidebar = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();


    
    const [tab , setTab] = useState('')


    useEffect(()=>{

       const urlParams = new URLSearchParams(window.location.search);
       const tabFromUrl = urlParams.get('tab') ;
       
       if(tabFromUrl){
        setTab(tabFromUrl)  
       }
       
      } , [window.location.search])


    const handleLogout = () => {
        dispatch(logout());
        toast.success("Sign out successfully");
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      };


  return (
    <div className=' w-full bg-white shadow rounded-md md:min-h-screen p-4 pt-8'>

    <Link to='/profile?tab=profile' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8'  >
                 

        <RxPerson   className={`w-6 h-6 ${tab==='profile' ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab==='profile' ? 'text-orange-400' : ''}`}>Profile</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=orders' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8'>
                 

        <HiOutlineShoppingBag  className={`w-6 h-6 ${tab==='orders'? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab ==='orders'? 'text-orange-400' : ''}`}>Orders</span>

             
        </div>

        </Link>


       


        <Link to='/profile?tab=refunds' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' >
                 

        <HiOutlineReceiptRefund  className={`w-6 h-6 ${tab==='refunds'? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab==='refunds' ? 'text-orange-400' : ''}`}>Refunds</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=trackorder' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8'>
                 

        <MdOutlineTrackChanges className={`w-6 h-6 ${tab==='trackorder'? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab==='trackorder' ? 'text-orange-400' : ''}`}>Track Order</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=payment' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' >
                 

        <AiOutlineCreditCard className={`w-6 h-6 ${tab==='payment' ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab==='payment'? 'text-orange-400' : ''}`}>Payment Methods</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=address' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' >
                 

        <FaRegAddressBook  className={`w-6 h-6 ${tab==='address'? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${tab==='address' ? 'text-orange-400' : ''}`}>Address</span>

             
        </div>

        </Link>


        
        <div className='flex items-center cursor-pointer w-full mb-8' onClick={handleLogout}>
                 
        <RiLoginCircleLine className='w-6 h-6' /> 
       
        <span className='font-semibold pl-2'>Logout  </span>

             
        </div>

    </div>
  )
}

export default ProfileSidebar