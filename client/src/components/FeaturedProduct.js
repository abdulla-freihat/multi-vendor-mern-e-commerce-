import React , {useState , useEffect} from 'react'
import { productData } from '../static/data'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux'

const FeaturedProduct = () => {

  const {allProducts} = useSelector(state=>state.product)

  return (
    <div className='max-w-6xl mx-auto my-12'>
    <h3 className='font-semibold text-xl'>Featured Products</h3>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8     '>
       
      {allProducts&& allProducts.map((product , index)=>(
           
            <ProductCard key={index}  product={product}/>
         
      ))}
    </div>
  </div>
  )
}

export default FeaturedProduct