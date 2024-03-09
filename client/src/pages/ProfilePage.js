import React , {useState , useEffect} from 'react'
import ProfileSidebar from '../components/ProfileSidebar'
import UserProfile from '../components/UserProfile';
const ProfilePage = () => {


     const [active , setActive] = useState(0);
     const [tab , setTab] = useState('')


     useEffect(()=>{

        const urlParams = new URLSearchParams(window.location.search);
        const tabFromUrl = urlParams.get('tab') ;
        
        if(tabFromUrl){
         setTab(tabFromUrl)  
        }
        
       } , [window.location.search])

  return (
    <div className='min-h-screen bg-gray-50 '>

        <div className='flex gap-8 max-w-6xl mx-auto p-3 flex-col md:flex-row '>
        <div className='w-full md:w-[300px]'>
            <ProfileSidebar  active={active} setActive={setActive}/>
        </div>
            
            {tab === 'profile' && <UserProfile />}
        </div>


    </div>
  )
}

export default ProfilePage