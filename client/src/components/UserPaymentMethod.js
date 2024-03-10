import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const UserPaymentMethod = () => {
  return (
    <div className='w-full'>

          <div className='w-full flex justify-between '>
               
                 <h1 className='text-lg font-bold'>Payment Methods </h1>

                 <button className='bg-black px-8 py-2 rounded-md text-white'>Add New</button>
          </div>    

          <div className='w-full bg-white  rounded-md shadow flex flex-col md:flex-row  justify-between px-3 pr-10 mt-5 gap-5 py-3'>
                   <div className='flex items-center '>
                    <img src='https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg' />
                    <h5 className='font-semibold'>Abdulla freihat</h5>
                   </div>

                   <div className='flex items-center font-semibold text-sm gap-2'>
                        <h6>1234 **** *** ***</h6>
                        <span>|</span>
                        <h5 >08/2024</h5>
                   </div>

                   <div>
                      <AiOutlineDelete className='w-6 h-6 hover:text-red-600 cursor-pointer' />
                   </div>


          </div>

    </div>
  )
}

export default UserPaymentMethod