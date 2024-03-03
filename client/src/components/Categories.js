import React from 'react'
import { brandingData ,categoriesData } from '../static/data'
import {Link} from 'react-router-dom';
const Categories = () => {
  return (
   <>
  
     <div className='bg-white shadow rounded-md  max-w-6xl mx-auto my-5  p-8 border border-orange-400 grid grid-cols-2 lg:grid-cols-4 gap-8 '>
        {
            
            brandingData && brandingData.map((i , index)=>(
                <div key={index} className='flex items-center justify-center gap-2'>
                  {i.icon}
                      
                      <div> 
                         <h5 className='font-semibold'>{i.title}</h5>
                         <p className='text-sm'>{i.Description}</p>                      
                      </div>

                </div>
                    
            ))
        
        }
     </div>



     <div className='bg-white shadow rounded-md  max-w-6xl mx-auto my-5  p-8 border border-orange-400 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 '>
        {
            
            categoriesData && categoriesData.map((category , index)=>(
                <Link to={`/products?category?=${category.title}`} className='hover:text-orange-400'>
                <div key={index} className='flex items-center  gap-2'>
                
                
                    <img src={category.image_Url} alt={category.title}  className='w-20 h-20 object-cover '/>
                    {category.title}
                    
                  
                </div>
                </Link>
                    
            ))
        
        }
     </div>
   </>
  )
}

export default Categories