import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import ProductModal from "./ProductModal";


const ProductCard = ({ product }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openProductModal = () => {
    setIsOpenModal(true);
  };

  const closeProductModal = () => {
    setIsOpenModal(false);
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
            onClick={openProductModal}
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

     {isOpenModal && (
    
           <ProductModal closeProductModal={closeProductModal} product={product} />
       )}

</>
  );

  
};

export default ProductCard;
