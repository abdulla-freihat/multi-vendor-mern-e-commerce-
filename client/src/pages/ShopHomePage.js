import React from 'react'
import SellerHomePageInfo from '../components/SellerHomePageInfo'

const ShopHomePage = () => {
  return (
    <div className='bg-gray-50 min-h-screen '>
      <div className='max-w-8xl flex flex-col md:flex-row items-center justify-between p-3'>
      <div className='bg-white rounded-md w-full md:w-[25%] shadow overflow-y-scroll md:min-h-screen sticky top-2 left-0 z-10'>
         <SellerHomePageInfo isOwner={true} />
      </div>

      </div>
    </div>
  )
}

export default ShopHomePage