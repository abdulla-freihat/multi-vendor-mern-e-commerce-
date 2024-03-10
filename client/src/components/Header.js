import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { productData } from "../static/data";
import NavbarCategories from "./NavbarCategories";
import ProductsCart from "./ProductsCart";
import { backend_url } from "../server";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const openProductsCart = () => {
    setIsOpenCart(true);
  };

  const closeProductsCart = () => {
    setIsOpenCart(false);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData(filteredProducts);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Sign out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-orange-400" : "text-gray-900";
  };

  return (
    <header className="bg-white  w-full ">
      <nav className=" bg-gray-100 flex items-center justify-between p-3 lg:px-8 border-b ">
        <Link to="/" className="text-3xl font-bold text-orange-400">
          Shop
        </Link>

        <div className=" rounded-md  w-[180px] md:w-[300px] lg:w-[400px] border bg-white flex items-center p-1 ">
          <input
            type="text"
            className="bg-transparent w-full outline-none "
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FaSearch />

          {searchData && searchData.length !== 0 ? (
            <div className="absolute top-14 min-h-[30vh]  md:w-[400px] lg:w-[400px] bg-slate-50 shadow-sm-2 z-100 p-1 flex flex-col gap-2">
              {searchData &&
                searchData.map((i, index) => {
                  return (
                    <Link to={`/product/${i.name}`}>
                      <div
                        key={index}
                        className="w-full flex items-start-py-3 border-b p-2"
                      >
                        <img
                          src={`${i.image_Url[0]?.url}`}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        <Link
          to="/shop-create"
          className="hidden md:flex bg-black items-center gap-1 text-white p-2 rounded-md"
        >
          <span>Become Seller</span>
          <IoIosArrowForward />
        </Link>
      </nav>

      <nav
        className=" flex  items-center justify-between p-3 lg:px-8 border-b"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavbarCategories />
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={`text-sm font-semibold leading-6 ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/best-selling"
            className={`text-sm font-semibold leading-6 ${isActive(
              "/best-selling"
            )}`}
          >
            Best Selling
          </Link>
          <Link
            to="/products"
            className={`text-sm font-semibold leading-6 ${isActive(
              "/products"
            )}`}
          >
            Products
          </Link>
          <Link
            to="/events"
            className={`text-sm font-semibold leading-6 ${isActive("/events")}`}
          >
            Events
          </Link>
        </div>
        <div className=" flex flex-1 justify-end gap-4 items-center">
          <div class="relative py-2 cursor-pointer" onClick={openProductsCart} >
            <div class="top-0 absolute left-3 ">
              <p class="flex h-2 w-2 items-center justify-center rounded-full bg-orange-400 p-3 text-xs text-white">
                0
              </p>
            </div>
            <IoCartOutline  className="w-8 h-8 cursor-pointer" />
          </div>
             <Link to='/profile'>
          {currentUser ? (
              <img src={`${backend_url}${currentUser.avatar}`}  alt={currentUser.username}  className="rounded-full w-12 h-12 object-cover" />
          )
             :
             <FaRegUserCircle className="w-6 h-6" />
          }

          </Link>
        
          {currentUser ? (
            <h5
              className="text-sm font-semibold leading-6 cursor-pointer text-gray-900"
              onClick={handleLogout}
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </h5>
          ) : (
            <Link
              to="/sign-in"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}

          <button
            type="button"
            className="-m-2.5 block lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10" onClick={toggleMenu}></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-3xl font-bold text-orange-400">
                Shop
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <Link
                        to="/"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        Home
                      </Link>
                      <Link
                        to="/best-selling"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        Best Selling
                      </Link>
                      <Link
                        to="/products"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        Products
                      </Link>
                      <Link
                        to="/events"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        Events
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/shop-create"
                    className=" w-[140px] bg-black flex  items-center gap-1 text-white  p-2 rounded-md"
                    onClick={closeMenu}
                  >
                    Become Seller <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpenCart && (

<ProductsCart closeProductsCart={closeProductsCart}  />
)}

    </header>
  );
};

export default Header;
