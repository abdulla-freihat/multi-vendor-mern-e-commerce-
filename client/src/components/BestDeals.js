import React , {useState , useEffect} from 'react'
import { productData } from '../static/data'
import ProductCard from './ProductCard';





const BestDeals = () => {

  const [data , setData] = useState([]);



  useEffect(()=>{

     const products = productData && productData.sort((a,b)=> b.total_sell - a.total_sell)
     const firstFiveProducts = products.slice(0,5);

     setData(firstFiveProducts)

  } , [])
  return (
  <div className='max-w-6xl mx-auto'>
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