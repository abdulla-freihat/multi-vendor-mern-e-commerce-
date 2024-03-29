import React , {useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import ProfileSidebar from '../components/ProfileSidebar'
import UserProfile from '../components/UserProfile';
import UserOrders from '../components/UserOrders';
import UserRefundsOrders from '../components/UserRefundsOrders';
import UserTrackOrders from '../components/UserTrackOrders';
import UserPaymentMethod from '../components/UserPaymentMethod';
import UserProfileAddress from '../components/UserProfileAddress';

const ProfilePage = () => {


  
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
    <div className='min-h-screen bg-gray-50 '>

        <div className='flex gap-8 max-w-8xl mx-auto p-3 flex-col md:flex-row '>
        <div className='w-full md:w-[300px]'>
            <ProfileSidebar />
        </div>
            
            {tab === 'profile' && <UserProfile  />}
            {tab === 'orders' && <UserOrders  />}
            {tab === 'refunds' && <UserRefundsOrders  />}
            {tab === 'trackorder' && <UserTrackOrders  />}
            {tab === 'payment' && <UserPaymentMethod  />}
            {tab === 'address' && <UserProfileAddress  />}
        </div>


    </div>
  )
}

export default ProfilePage