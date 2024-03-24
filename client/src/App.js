import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/userSlice";
import { server } from "./server";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import BestSellingPage from "./pages/BestSellingPage"; 
import EventsPage from "./pages/EventsPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import SellerCreatePage from "./pages/SellerCreatePage";
import SellerLoginPage from "./pages/SellerLoginPage";
import ShopHomePage from "./pages/ShopHomePage";
import SellerShopDashboardPage from "./pages/SellerShopDashboardPage";

import axios from "axios";
import ScrollTop from "./components/ScrollTop";
import PrivateRoute from "./components/PrivateRoute";
import SellerPrivateRoute from "./components/SellerPrivateRoute"
import MaybeShowNavbar from "./components/MaybeShowNavbar";


import { getAllProductsShop } from "./redux/productSlice";
import { getAllEventsShop } from "./redux/eventSlice";
import {getAllProducts} from "./redux/productSlice";




function App() {
  const { token } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenExpiration = async () => {
      try {
        if (token) {
          const response = await axios.get(`${server}/auth/check-token`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Token is valid, do nothing
        }
      } catch (error) {
        // If token expiration error is received, log out the user
        if (error.response && error.response.status === 401) {
          dispatch(logout());
          Navigate("/sign-n");
        }
      }
    };

    // Check token expiration on component mount
    checkTokenExpiration();

    // Set up interval to check token expiration every 5 minutes (adjust as needed)
    const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch, token]);


  useEffect(() => {
    if(seller){


      axios
      .get(`${server}/product/all-products/${seller._id}` ,)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(getAllProductsShop(res.data.products));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  
  }, [dispatch , seller]);



  useEffect(() => {
    if(seller){


      axios
      .get(`${server}/event/all-events/${seller._id}` ,)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(getAllEventsShop(res.data.events));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  
  }, [dispatch , seller]);




  useEffect(() => {


      axios
      .get(`${server}/product/all-products` ,)
      .then((res) => {
        if (res.data.success === true) {
          dispatch(getAllProducts(res.data.products));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

  
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollTop />
      <Toaster />

      <MaybeShowNavbar>
      <Header />
      </MaybeShowNavbar>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:name" element={<ProductsDetailsPage/>}></Route>
        <Route path="/best-selling" element={<BestSellingPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/shop-create" element={<SellerCreatePage />}></Route>
        <Route path="/shop-login" element={<SellerLoginPage />}></Route>


 

        <Route element={<SellerPrivateRoute />}>
        <Route path="/shop/:id" element={<ShopHomePage />}></Route>
        <Route path="/dashboard" element={<SellerShopDashboardPage />}></Route>


        </Route>



        <Route    element={<PrivateRoute/>} >
        <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
      </Routes>

      
      <MaybeShowNavbar>
      <Footer />
      </MaybeShowNavbar>
     
    </BrowserRouter>

    
  );
}

export default App;
