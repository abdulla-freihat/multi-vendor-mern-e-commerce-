import React from 'react'
import SellerHomePageInfo from '../components/SellerHomePageInfo'
import SellerHomePageData from '../components/SellerHomePageData'

const ShopHomePage = () => {
  return (
    <div className='bg-gray-50 min-h-screen '>
      <div className='max-w-8xl flex flex-col md:flex-row gap-8 p-3'>
      <div className='bg-white rounded-md w-full md:w-[35%] lg:w-[25%] shadow  md:min-h-screen  '>
         <SellerHomePageInfo isOwner={true} />
      </div>

       <div className='flex-1'>
          <SellerHomePageData isOwner={true} />
       </div>

      </div>
    </div>
  )
}

export default ShopHomePage