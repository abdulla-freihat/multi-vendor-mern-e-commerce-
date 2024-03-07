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
import axios from "axios";
import ScrollTop from "./components/ScrollTop";

function App() {
  const { token } = useSelector((state) => state.user);
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

  return (
    <BrowserRouter>
      <ScrollTop />
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
