import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";


import {backend_url} from '../server'
const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);




  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-5 ">
      {data ? (
        <div className="flex flex-col lg:flex-row  gap-8">
          <div className="flex flex-col gap-3 flex-1 items-center ">
            <img
            src={`${backend_url}${data.images && data.images[select]}`}
              className="border  w-[250px] h-[250px] object-cover"
              onClick={() => setSelect(0)}
            />

            <div className="flex gap-2">
              <div
                className={`${
                  select === 0 ? "border border-orange-400" : "null"
                } cursor-pointer `}
              >
                <img
              src={`${backend_url}${data.images && data.images[0]}`}
                  className=" h-[150px] object-cover"
                  onClick={() => setSelect(0)}
                />
              </div>
              <div
                className={`${
                  select === 1 ? "border border-orange-400" : "null"
                } cursor-pointer `}
              >
                <img
                  src={`${backend_url}${data.images && data.images[1]}`}
                  className=" h-[150px] object-cover"
                  onClick={() => setSelect(1)}
                />
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-gray-500 text-md">{data.description}</p>
            <div className="flex gap-2">
              <span className="font-semibold">
                {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}$
              </span>
              <span className="text-red-600 line-through text-sm">
                {data.originalPrice? data.originalPrice + "$" : null}
              </span>
            </div>

            <div className="flex w-full md:w-[25%] shadow my-6  ">
              <button
                className=" flex-1 w-10 h-8 bg-gradient-to-r  from-teal-400 to-teal-500 text-white rounded-s "
                onClick={decrementCount}
              >
                -
              </button>
              <span className=" flex-1 w-16 h-8 outline-none  bg-gray-200 text-gray-800 flex items-center justify-center ">
                {" "}
                {count}
              </span>
              <button
                className=" flex-1 w-10 h-8  bg-gradient-to-r  from-teal-400 to-teal-500 text-white rounded-e"
                onClick={incrementCount}
              >
                +
              </button>
            </div>

            <button className="py-2 px-2 bg-black text-white rounded-md flex items-center justify-center gap-2 w-full  md:w-[25%]">
              Add to cart <BsCartPlus />
            </button>
          </div>
        </div>
      ) : null}

      <ProductDetailsInfo data={data} />
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="my-16 bg-gray-100 shadow rounded-md border px-3   ">
      <div className="w-full flex justify-between border-b-2 pt-10  pb-2 px-4 ">
        <div className="relative">
          <h5
            className="text-lg font-bold px-1 cursor-pointer "
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>

          {active === 1 ? (
            <div className="border-b-2 border-orange-400"> </div>
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-lg font-bold px-1 cursor-pointer "
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>

          {active === 2 ? (
            <div className="border-b-2 border-orange-400"> </div>
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-lg font-bold px-1 cursor-pointer "
            onClick={() => setActive(3)}
          >
            Seller Info
          </h5>

          {active === 3 ? (
            <div className="border-b-2 border-orange-400"> </div>
          ) : null}
        </div>
      </div>

      {active === 1 ? (
        <>
          <p className="my-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full flex justify-center items-center min-h-[40vh]">
          <p>No reviews yet !</p>
        </div>
      ) : null}

      {active === 3 ? (
        <div className="w-full flex flex-col justify-between md:flex-row p-5 gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex gap-2 items-center">
              <img
                src={`${backend_url}${data.shop.avatar}`}
                className="w-16 h-16 rounded-full "
              />
              <div>
                <Link
                    to={`/shop/${data.shop._id}`}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  {data.shop.name}
                </Link>
              
              </div>
            </div>

            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className="flex justify-start md:justify-end  flex-1">
            <div className="flex flex-col gap-2">
              <h6>
                <span className="font-semibold">Joined On :</span> {data.shop.createdAt.slice(0,10)}
              </h6>
              <h6>
                <span className="font-semibold">Total products :</span> {data.length}
              </h6>
              <h6>
                <span className="font-semibold">Total reviews :</span> 90{" "}
              </h6>
              <Link
                to={`/shop/${data.shop._id}`}
                className="bg-black px-4 py-2 text-white rounded-md text-center"
              >
                Visit shop
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
