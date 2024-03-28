import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import ProductModal from "./ProductModal";
import ProductsCart from "./ProductsCart";
import {backend_url} from "../server"
import { addToCart } from "../redux/cartSlice";
import { useDispatch , useSelector } from "react-redux";
import { toast } from "react-hot-toast";


const ProductCard = ({ product }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart)
  const {currentUser} = useSelector(state => state.user)




  const addToCartHandler = (id)=>{

    const isExists = cart && cart.find((i)=>i._id === id)

     if(isExists){

       toast.error("Product already in cart"); 

     }else{

       if(currentUser){

         dispatch(addToCart({...product , qty:1})); 
         toast.success("Product added to cart"); 
       }else{

          toast('Please login first.')
       }

        
      
        
      }


 
  
}

  const openProductModal = () => {
    setIsOpenModal(true);
  };

  const closeProductModal = () => {
    setIsOpenModal(false);
  };


  const openProductsCart = () => {
    setIsOpenCart(true);
  };

  const closeProductsCart = () => {
    setIsOpenCart(false);
  };



  return (

    <>
    <div className="flex flex-col gap-2 justify-center items-center flex-1 p-3 bg-white shadow rounded-md mt-3 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex gap-1 ">
        <Link to={`/product/${product.name}`}>
          <img
            src={`${backend_url}${product.images && product.images[0]}`}
            alt={product.category}
            className="w-full h-40 object-cover"
          />
        </Link>
        <div className="flex flex-col gap-2">
        <BsCartPlus onClick={() => { openProductsCart(); addToCartHandler(product._id); }} className="w-6 h-6 hover:text-orange-400 cursor-pointer" />
          <FaRegEye
            className="w-6 h-6 hover:text-orange-400 cursor-pointer"
            onClick={openProductModal}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
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
              {product.originalPrice === 0 ? product.originalPrice : product.discountPrice}$
            </span>
            <span className="text-red-600 line-through text-sm">
              {product.originalPrice ? product.originalPrice + "$" : null}
            </span>
          </div>
          <span className="text-green-600">{product.sold_out} sold</span>
        </div>
      </div>

 
    </div>

     {isOpenModal && (
    
           <ProductModal closeProductModal={closeProductModal} product={product} />
       )}


       {isOpenCart && (

           <ProductsCart closeProductsCart={closeProductsCart}  />
       )}

</>
  );

  
};

export default ProductCard;
