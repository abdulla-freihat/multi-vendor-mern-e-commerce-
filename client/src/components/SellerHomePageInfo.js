import React, { useDebugValue } from "react";
import { backend_url } from "../server";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import{ sellerLogout} from "../redux/sellerSlice"

const SellerHomePageInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
const dispatch =useDispatch();

  const sellerLogoutHandler =()=>{

     dispatch(sellerLogout())
  }
  return (
    <div className=" p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-center w-full items-center py-5">
        <img
          src={`${backend_url}${seller.avatar}`}
          className="rounded-full w-24 h-24 object-cover"
        />
        <h3 className="font-bold text-lg">{seller.name}</h3>
      </div>

      <div className="flex flex-col gap-4">

      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Address</h5>
        <p className="text-sm text-gray-500">{seller.address}</p>
      </div>

      <div className="px-2">
        <h5 className="font-semibold text-orange-400 text-md">Phone Number</h5>
        <p className="text-sm text-gray-500">{seller.phoneNumber}</p>
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
        <p className="text-sm text-gray-500">{seller.createdAt.slice(0,10)}</p>
      </div>

      {isOwner && (
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
