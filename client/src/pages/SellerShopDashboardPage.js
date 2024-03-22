import React , {useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import SellerShopDashboardHeader from '../components/SellerShopDashboardHeader'
import SellerShopDasboardSidebar from '../components/SellerShopDasboardSidebar'
import SellerShopDashboardCreateProduct from '../components/DashboardComponents/SellerShopDashboardCreateProduct'
import SellerShopDashboardProducts  from '../components/DashboardComponents/SellerShopDashboardProducts'
import SellerShopDashboardCreateEvent from '../components/DashboardComponents/SellerShopDashboardCreateEvent'

const SellerShopDashboardPage = () => {


   
  const [tab , setTab] = useState('')
  const location = useLocation();


  useEffect(()=>{

     const urlParams = new URLSearchParams(location.search);
     const tabFromUrl = urlParams.get('tab') ;
     
     if(tabFromUrl){
      setTab(tabFromUrl)  
     }
     
    } , [location.search])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <SellerShopDashboardHeader /> 

      <div className='flex gap-8 max-w-8xl mx-auto p-3  flex-col md:flex-row '>
      <div className='w-full md:w-[300px]'>
         <SellerShopDasboardSidebar />
      </div>
     
     <div className='flex justify-center  w-full'>
     {tab === 'create-products' && <SellerShopDashboardCreateProduct/>}
     
     {tab === 'products' && <SellerShopDashboardProducts/>}

     {tab === 'create-events' && <SellerShopDashboardCreateEvent/>}



     </div>

   
      </div>
    </div>
  )
}

export default SellerShopDashboardPage