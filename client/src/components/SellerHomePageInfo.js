import React, { useEffect , useState } from "react";
import { backend_url } from "../server";
import { useDispatch, useSelector } from "react-redux";
import {Link , useParams} from 'react-router-dom'
import{ sellerLogout} from "../redux/sellerSlice"
import axios from 'axios';
import {server} from "../server"

const SellerHomePageInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
   const dispatch =useDispatch();
   const [data , setData] = useState({}); 
   console.log(data)
const {id} = useParams();

  const sellerLogoutHandler =()=>{

     dispatch(sellerLogout())
  }


  useEffect(()=>{

     axios.get(`${server}/seller/get-shop-info/${id}`)
     .then(res=>{

       setData(res.data.shop)
     }).catch(err=>{
       console.log(err.message)
     })


  }, [])


  return (
    <div className=" p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center w-full items-center py-5">
        <img
          src={`${backend_url}${data.avatar}`}
          className="rounded-full w-24 h-24 object-cover"
        />
        <h3 className="font-bold text-lg">{data.name}</h3>
      </div>

      <div className="flex flex-col gap-4">

      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Address</h5>
        <p className="text-sm text-gray-500">{data.address}</p>
      </div>

      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Phone Number</h5>
        <p className="text-sm text-gray-500">{data.phoneNumber}</p>
      </div>


      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Total Products</h5>
        <p className="text-sm text-gray-500">10</p>
      </div>


      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Ratings</h5>
        <p className="text-sm text-gray-500">4/5</p>
      </div>




      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Joind In</h5>
        <p className="text-sm text-gray-500">{data.createdAt}</p>
      </div>

      {seller && (
        <div className="px-2 mt-5 flex flex-col gap-2">

            <Link className="bg-black text-white w-100 rounded-md p-2 text-center ">Edit Shop </Link>

            <button onClick={sellerLogoutHandler} className="bg-black text-white w-100 rounded-md p-2 ">Logout </button>

        </div>
      )}

      </div>
    </div>
  );
};

export default SellerHomePageInfo;
