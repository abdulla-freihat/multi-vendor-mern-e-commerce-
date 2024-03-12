import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const PrivateRoute = () => {
    const {seller} = useSelector(state=>state.seller);
  return  seller ? <Outlet /> : <Navigate  to='/shop-login'  /> 
  
}

export default PrivateRoute