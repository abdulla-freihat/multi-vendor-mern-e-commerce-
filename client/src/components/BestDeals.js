import React , {useState , useEffect} from 'react'
import { productData } from '../static/data'
import ProductCard from './ProductCard';

import {useSelector} from 'react-redux'





const BestDeals = () => {

  const [data , setData] = useState([]);

  const {allProducts} = useSelector(state=>state.product)





  useEffect(()=>{

     const products = allProducts && allProducts.sort((a,b)=> b.sold_out -  a.sold_out)
     const firstFiveProducts = products.slice(0,5);

     setData(firstFiveProducts)

  } , [])
  return (
  <div className='max-w-6xl mx-auto my-12'>
    <h3 className='font-semibold text-xl'>Best Deals</h3>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8     '>
       
      {data && data.map((product , index)=>(
           
            <ProductCard key={index}  product={product}/>
         
      ))}
    </div>
  </div>
  )
}

export default BestDeals