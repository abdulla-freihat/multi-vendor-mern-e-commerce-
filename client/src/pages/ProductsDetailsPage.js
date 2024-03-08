import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data';
import ProductDetails from '../components/ProductDetails';


const ProductsDetailsPage = () => {


    const {name} = useParams();

    const [data , setData] = useState(null);
    console.log(data)




    useEffect(()=>{

     const product = productData.find((i)=> i.name === name);

     setData(product)

    } , [])
  return (
    <div className='min-h-screen'>
      

        
              <ProductDetails  data={data} />
      


 
    </div>
  )
}

export default ProductsDetailsPage
