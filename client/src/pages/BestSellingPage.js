import React, { useState, useEffect } from "react";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard";
import {useSelector} from 'react-redux'


const BestSellingPage = () => {
  const [data, setData] = useState([]);

  const {allProducts} = useSelector(state=>state.product)


  useEffect(() => {


    setData(allProducts);
  }, [allProducts]);
  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-2  max-w-6xl mx-auto  ">
          {data &&
            data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>

        {data && data.length === 0 ? (
          <h1 className="font-bold text-orange-400 text-lg text-center mt-5 ">
            No Products Available.
          </h1>
        ) : null}
      </div>
    </>
  );
};

export default BestSellingPage;
