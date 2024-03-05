import React , {useState , useEffect} from 'react'
import { productData } from '../static/data'
import ProductCard from './ProductCard';

const FeaturedProduct = () => {

   
  return (
    <div className='max-w-6xl mx-auto my-12'>
    <h3 className='font-semibold text-xl'>Featured Products</h3>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8     '>
       
      {productData && productData.map((product , index)=>(
           
            <ProductCard key={index}  product={product}/>
         
      ))}
    </div>
  </div>
  )
}

export default FeaturedProduct