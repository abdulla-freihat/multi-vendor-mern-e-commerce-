import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data';
import ProductDetails from '../components/ProductDetails';
import {useSelector} from 'react-redux'


const ProductsDetailsPage = () => {


    const {name} = useParams();

    const [data , setData] = useState(null);
  
    const {allProducts} = useSelector(state=>state.product)




    useEffect(()=>{

     const product = allProducts.find((i)=> i.name === name);

     setData(product)

    } , [])
  return (
    <div className='min-h-screen'>
      

        
              <ProductDetails  data={data} />
      


 
    </div>
  )
}

export default ProductsDetailsPage
