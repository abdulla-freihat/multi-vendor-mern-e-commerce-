import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {categoriesData} from "../../static/data"

const SellerShopDashboardCreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();



  const handleImageChange =(e)=>{

     e.preventDefault();
     let files = Array.from(e.target.files);
     setImages((prevImages => [...prevImages , ...files]))
  }

  const handleSubmit=(e)=>{

     e.preventDeafult();
  }
  return (
    <div className=" w-full lg:w-[60%] bg-white rounded-md shadow  p-5 h-[90vh] overflow-y-scroll">
      <h5 className="font-bold text-xl text-center">Create Products</h5>
      {/* product form */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label>
            Name <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            value={name}
            name='name'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
            placeholder="Enter your product name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
            Description <span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            value={description}
            name='description'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
            placeholder="Enter your product description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>


        <div className="flex flex-col gap-2">
          <label>
            Category<span className="text-red-600">*</span>
          </label>

        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="outline-none border border-gray-300 placeholder-gray-400 p-1">
        <option value='Choose a category'> Choose a Category</option>
          
            {categoriesData && categoriesData.map((category ,index)=>(
                <option value={category.title}  key={index}>{category.title} </option>
            ))}
        </select>
        </div>



        <div className="flex flex-col gap-2">
          <label>
           Tags
          </label>

          <input
            type="text"
            value={tags}
            name='tags'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1"
            placeholder="Enter your product tags..."
            onChange={(e) => setTags(e.target.value)}
          />
        </div>


        <div className="flex flex-col gap-2">
          <label>
           Original Price  
          </label>

          <input
            type="number"
            value={originalPrice}
            name='price'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your product price..."
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>


        <div className="flex flex-col gap-2">
          <label>
           Price (With Discount) <span className="text-red-600">*</span>
          </label>

          <input
            type="number"
            value={discountPrice}
            name='price'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your product price with discount..."
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
           Product Stock <span className="text-red-600">*</span>
          </label>

          <input
            type="number"
            value={stock}
            name='stock'
            className="outline-none border border-gray-300 placeholder-gray-400 p-1 "
            placeholder="Enter your product stock..."
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>
          Upload Product Images <span className="text-red-600">*</span>
          </label>

          <input
            type="file"
            name=''
            id='upload'
            multiple
            onChange={handleImageChange}
      
          />
            <div className="mt-2 flex gap-2 flex-wrap">
          {images && images.map((image , index)=>(
               <img src={URL.createObjectURL(image)} key={index} className="w-[100px] h-[100px] object-cover" />
          ))}
          </div>
        </div>


        <button type='submit' className="bg-black rounded-md text-white p-2">Create</button>
      </form>
    </div>
  );
};

export default SellerShopDashboardCreateProduct;
