import React from "react";

import { Link } from "react-router-dom";

import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import FeaturedProduct from "../components/FeaturedProduct";
import Events from "../components/Events";

const Home = () => {
  return (

    <>
    <div className="bg-gray-50 min-h-screen">
    <div
      className=" min-h-[30vh] md:min-h-[50vh] lg:h-[70vh] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center p-5"
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col justify-center  gap-5  h-full">
        <h1 className="font-semibold text-2xl md:text-6xl text-[#3d3a3a]">
          Best Collection For <span className="text-orange-400">Home Decration</span>
        </h1>
        <p className="text-xs md:text-sm text-[#000000ba]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
         
         <Link to='/products' >
        <button className="bg-black  text-center text-white font-semibold rounded-md py-3 px-8 ">Shop Now</button>
        </Link>
      </div>
    </div>
      <div className="p-2">
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      

      </div>

     

      </div>
    </>
  );
};

export default Home;
