import React from 'react'
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




const ProfileSidebar = ({active , setActive}) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();


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
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(1)}>
                 

        <RxPerson   className={`w-6 h-6 ${active===1 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===1 ? 'text-orange-400' : ''}`}>Profile</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=orders' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(2)}>
                 

        <HiOutlineShoppingBag  className={`w-6 h-6 ${active===2 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===2 ? 'text-orange-400' : ''}`}>Orders</span>

             
        </div>

        </Link>


       


        <Link to='/profile?tab=refunds' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(3)}>
                 

        <HiOutlineReceiptRefund  className={`w-6 h-6 ${active===3 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===3 ? 'text-orange-400' : ''}`}>Refunds</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=trackorder' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(4)}>
                 

        <MdOutlineTrackChanges className={`w-6 h-6 ${active===4 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===4 ? 'text-orange-400' : ''}`}>Track Order</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=payment' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(5)}>
                 

        <AiOutlineCreditCard className={`w-6 h-6 ${active===5 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===5 ? 'text-orange-400' : ''}`}>Payment Methods</span>

             
        </div>

        </Link>


        <Link to='/profile?tab=address' className='cursor-pointer '>
        <div className='flex items-center  w-full mb-8' onClick={()=>setActive(6)}>
                 

        <FaRegAddressBook  className={`w-6 h-6 ${active===6 ? 'text-orange-400' : ''}`}  />
        <span className={`font-semibold pl-2 ${active===6 ? 'text-orange-400' : ''}`}>Address</span>

             
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