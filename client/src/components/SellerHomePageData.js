import React, { useState  , useEffect} from 'react'

import ProductCard from '../components/ProductCard'
import { Link  , useParams} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import { fetchProductsShop } from '../App';

const SellerHomePageData = ({isOwner}) => {

    const [active ,setActive] = useState(1)

     const {products} = useSelector(state=>state.product)
     const {seller} = useSelector(state=>state.seller)
     const {id } = useParams();
     const dispatch = useDispatch();


     useEffect(()=>{
         dispatch(fetchProductsShop(id))
     }  , [dispatch])
  return (
    <div className='w-full flex flex-col gap-4 '>

<div className='flex justify-between items-center bg-white shadow rounded-md p-3 flex-wrap gap-4 '>

<div className='flex gap-4 '>
    <div className='' onClick={()=>setActive(1)}>
        <h5 className={` ${active === 1 ? 'text-orange-400 underline ' : 'text-gray-500 '  } font-bold cursor-pointer`}>Shop Products</h5>
    </div>




    </div>

    {seller && (

        <Link to='/dashboard' className='bg-black text-white rounded-md py-2 px-4'>Go To Dashboard</Link>

    )}


    </div>



<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

{
   products && products.map((product , index)=>(
          
          <ProductCard  product={product} key={index}  isShop={true}/>

    ))
}


</div>
    </div>
  )
}

export default SellerHomePageData