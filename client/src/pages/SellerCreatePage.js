import React, { useState, useRef , useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { server } from "../server";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import {useSelector} from 'react-redux';


const SellerCreatePage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [shopName , setShopName] = useState('');
  const [phoneNumber , setPhoneNumber] = useState();

  const [email, setEmail] = useState("");
  const [address , setAddress] = useState()
  const [zipCode , setZipCode] = useState()
  const [password, setPassword] = useState(""); 
  const {currentUser} = useSelector(state =>state.user);
  
  

  const fileRef = useRef();

  const [avatar, setAvatar] = useState(null);

  const navigate = useNavigate();


  





  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const config = { headers: { "Content-Type": "multipart/form-data " } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", shopName);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("address", address);
    newForm.append("zipCode" , zipCode);
    newForm.append("phoneNumber" , phoneNumber);


    axios
      .post(`${server}/seller/create-shop`, newForm, config)
      .then((res) => {
        
          if(res.data.success === true){
                 toast.success(res.data.message);
            setTimeout(()=>{
              navigate('/shop-login');
            } , 2000)
               

                setShopName('');
                setEmail('');
                setPassword('');
                setZipCode('');
                setAddress('');
                setPhoneNumber('')
                setAvatar(null);
          }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          // Display the specific error message received from the backend
          toast.error(err.response.data.error);
      } else {
          // If no specific error message received, display a generic error
          toast.error("An error occurred");
      }
      });

   
  };

  return (

    <div className="min-h-screen">
    <div className="bg-gray-50 flex  items-center p-2 min-h-screen">
      <div className="bg-white shadow p-5 max-w-lg mx-auto rounded flex-1">
        <h1 className="text-xl text-center my-3 font-bold ">
          Register as a seller
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5 p-3">
          <div className="flex items-center gap-2 mx-auto  p-2">
            {avatar ? (
              <img
                src={URL.createObjectURL(avatar)}
                className="w-10 h-10 rounded-full object-cover"
                alt="profile image"
              />
            ) : (
              <FaRegUserCircle className="w-10 h-10" />
            )}

            <input
              type="file"
              ref={fileRef}
              accept=".jpg,.jpeg,.png"
              onChange={handleFileInputChange}
              className="hidden"
            />
            <button
              onClick={() => fileRef.current.click()}
              type="button"
              className="border p-2 rounded text-gray-500"
            >
              Upload Shop Image{" "}
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-500 text-sm ">
             Shop Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="outline-none border rounded p-1"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-500 text-sm ">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="outline-none border rounded p-1"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-500 text-sm ">
             Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none border rounded p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-500 text-sm ">
              Address
            </label>
            <input
              type="address"
              name="address"
              id="address"
              className="outline-none border rounded p-1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>


          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-500 text-sm ">
              Zip Code
            </label>
            <input
              type="number"
              name="zipcode"
              id="zipcode"
              className="outline-none border rounded p-1"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>



        

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-500 text-sm ">
              Password
            </label>
            <div className="flex justify-between gap-1 items-center outline-none border rounded  flex-1">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="border-none outline-none w-full p-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {passwordVisible ? (
                <FaRegEye
                  className="text-xl me-1"
                  onClick={() => setPasswordVisible(false)}
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setPasswordVisible(true)}
                  className="text-xl me-1"
                />
              )}
            </div>
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 font-semibold text-white rounded p-2">
           Submit
          </button>
        </form>

        <div className="flex text-sm gap-2 flex-wrap">
          <h5>Already have an account?</h5>
          <Link to="/shop-login" className="text-blue-600">
            Sign In
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SellerCreatePage;
