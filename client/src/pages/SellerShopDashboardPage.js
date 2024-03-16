import React from 'react'
import SellerShopDashboardHeader from '../components/SellerShopDashboardHeader'
import SellerShopDasboardSidebar from '../components/SellerShopDasboardSidebar'

const SellerShopDashboardPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <SellerShopDashboardHeader /> 

      <div className='flex gap-8 max-w-8xl mx-auto p-3  flex-col md:flex-row '>
      <div className='w-full md:w-[300px]'>
         <SellerShopDasboardSidebar />
      </div>

      </div>
    </div>
  )
}

export default SellerShopDashboardPage