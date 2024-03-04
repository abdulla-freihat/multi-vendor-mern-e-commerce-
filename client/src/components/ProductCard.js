import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <>
    <div className="flex flex-col gap-2 justify-center items-center flex-1 p-3 bg-white shadow rounded-md mt-3 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex gap-1 ">
        <Link to={`/product/${product.name}`}>
          <img
            src={product.image_Url[0].url}
            alt={product.category}
            className="w-full h-40 object-cover"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <BsCartPlus className="w-6 h-6 hover:text-orange-400 cursor-pointer " />
          <FaRegEye
            className="w-6 h-6 hover:text-orange-400 cursor-pointer"
            onClick={openModal}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link className="text-sm text-blue-500 hover:text-blue-600">
          {product.shop.name}
        </Link>

        <Link to={`/product/${product.name}`}>
          <h5 className="line-clamp-2 font-semibold text-sm">
            {product.name}
          </h5>
        </Link>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="font-semibold">
              {product.price === 0 ? product.price : product.discount_price}$
            </span>
            <span className="text-red-600 line-through text-sm">
              {product.price ? product.price + "$" : null}
            </span>
          </div>
          <span className="text-green-600">{product.total_sell} sold</span>
        </div>
      </div>

 
    </div>

     {isModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 p-2"  >
        <div className="relative bg-white p-6 rounded-md max-w-xl">
        <FaTimes className="absolute top-2 right-2 w-6 h-6 text-orange-400 hover:text-orange-500 cursor-pointer"  onClick={closeModal} />
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


      
    )}

</>
  );

  
};

export default ProductCard;
