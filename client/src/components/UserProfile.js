import React ,{useState} from 'react'
import { useSelector } from 'react-redux';


const UserProfile = () => {

    const {currentUser} = useSelector(state =>state.user);

    const [name , setName] = useState(currentUser && currentUser.username );
    const [email , setEmail] = useState(currentUser && currentUser.email );
    const [phoneNumber , setPhoneNumber] = useState('');
    const [zipCode , setZipCode] = useState('');
    const [address , setAddress] = useState('');


    const handleSubmit = (e)=>{

         e.preventDefault();
    }

  return (
    <div className='w-full'>

         <div className='mx-auto rounded-full border-2 w-32 h-32 border-green-600  '>
             <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS' className='  rounded-full object-cover'  />
         </div>
         <form onSubmit={handleSubmit} className=' mt-5'>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Full Name</label>
                <input type='text'  value={name} className='border outline-none rounded-md p-1'  onChange={(e)=>setName(e.target.value)}/>
               </div>

               <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Email Asdress</label>
                <input type='email'  value={email} className='border outline-none rounded-md p-1'  onChange={(e)=>setEmail(e.target.value)} />
               </div>



               <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Phone Number</label>
                <input type='text'  value={phoneNumber}  className='border outline-none rounded-md p-1' onChange={(e)=>setPhoneNumber(e.target.value)} />
               </div>



               <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Zip Code</label>
                <input type='text'   value={zipCode} className='border outline-none rounded-md p-1'   onChange={(e)=>setZipCode(e.target.value)} />
               </div>



               <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Address</label>
                <input type='text' value={address}  className='border outline-none rounded-md p-1' onChange={(e)=>setAddress(e.target.value)} />
               </div>
               </div>
               <button type='submit' className='bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-2 mt-4  '>Edit Profile</button>
         </form>
    </div>
  )
}

export default UserProfile