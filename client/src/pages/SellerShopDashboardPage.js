import React from 'react'
import SellerShopDashboardHeader from '../components/SellerShopDashboardHeader'
import SellerShopDasboardSidebar from '../components/SellerShopDasboardSidebar'

const SellerShopDashboardPage = () => {
  return (
    <div>
      <SellerShopDashboardHeader /> 

      <div className='flex gap-8 max-w-8xl mx-auto  flex-col md:flex-row '>
      <div className='w-full md:w-[300px]'>
         <SellerShopDasboardSidebar />
      </div>

      </div>
    </div>
  )
}

export default SellerShopDashboardPage