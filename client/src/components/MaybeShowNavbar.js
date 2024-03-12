import React ,{useEffect , useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

const MaybeShowNavbar = ({children}) => {

    const location = useLocation();
    const [showNavbar , setShowNavbar] = useState(false);
    const{seller} = useSelector(state=>state.seller); 



    useEffect(()=>{

         if( location.pathname ==='/dashboard' || location.pathname ===`/shop/${seller._id}`   ){

            setShowNavbar(false)
         }else{
             setShowNavbar(true)
         }
    } , [location])

  return (
    <div>{showNavbar && children}</div>
  )
}

export default MaybeShowNavbar