import React, { useState, useEffect } from "react";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {

  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);


  useEffect(()=>{

      if(categoryData === null){
                 
           const products =  productData && productData.sort((a,b)=> a.total_sell - b.total_sell);

           setData(products);
         
      }else{

          const productsCategory = productData && productData.filter((i)=> i.category === categoryData);
          setData(productsCategory)
      }

  }, [])
  return (
    <>

    <div className="min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-2  max-w-6xl mx-auto  ">

        {data && data.map((product , index)=>(
              
               <ProductCard key={index}  product={product} />
             
        ))}

    </div>

    {data && data.length === 0 ? <h1 className="font-bold text-orange-400 text-lg text-center mt-5 ">No Products Available.</h1> : null}

</div>
    </>
  );
};

export default ProductsPage;
