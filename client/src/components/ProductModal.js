import React from 'react'
import { FaTimes } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const ProductModal = ({close , product}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 p-2"  >
    <div className="relative bg-white p-6 rounded-md max-w-xl">
    <FaTimes className="absolute top-2 right-2 w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer"  onClick={close} />
    <div className="flex flex-col md:flex-row  items-center md:items-start gap-5">

        <div className="flex-1">
        <img  src={product.image_Url[0].url} className="w-full h-64" />

        <p className="text-red-600 font-semibold mt-3" >({product.total_sell}) Sold Out</p>

        </div>

        <div className="flex-1">
          <h2 className=" font-bold text-md text-orange-400">{product.name}</h2>
          <p className="text-xs my-3">{product.description}</p>
          <div className="flex justify-between items-center border p-2"> 
          <span className="font-semibold"> {product.price === 0 ? product.price : product.discount_price}$</span>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">Add to cart <BsCartPlus/> </button>
          </div>
        </div>

        </div>
     
     
    </div>
  </div>
  )
}

export default ProductModal