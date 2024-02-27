import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";



const Header = () => {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
        toast.success('Sign out successfully');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <header className="bg-white ">


               <nav className=" bg-gray-100 flex items-center justify-between p-3 lg:px-8 border-b">
               
                    <Link to='/' className='text-3xl font-bold text-orange-400'>Shop</Link>
                     

                     <div className=' w-[150px] md:w-[200px] lg:w-[400px] border bg-white flex items-center p-1 ' >

                     <input type='text' className='bg-transparent w-full outline-none'  />
                     <FaSearch />
                     </div>


                           
                     <button className='bg-black flex items-center gap-1 text-white  p-2 rounded-md'>Become Seller <IoIosArrowForward/></button>

                          
                  
               </nav>



            <nav className=" flex  items-center justify-between p-3 lg:px-8 border-b" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/' className='text-3xl font-bold text-orange-400'>Shop</Link>
                </div>
              
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMenu}>Home</Link>
                    <Link to="/best-selling" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMenu}>Best Selling</Link>
                    <Link to="/products" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMenu}>Products</Link>
                    <Link to="/events" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeMenu}>Events</Link>
                </div>
                <div className=" flex flex-1 justify-end gap-4 items-center">
                    <IoCartOutline className='w-6 h-6' />
                    <FaRegUserCircle className='w-6 h-6' />
                    {currentUser ?
                    
                          
                            <h5 className="text-sm font-semibold leading-6 cursor-pointer text-gray-900" onClick={handleLogout}>Log out <span aria-hidden="true">&rarr;</span></h5>
                     
                        :
                   
                            <Link to='/sign-in' className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
                         
                           
                     
                    }

                    <button type="button" className="-m-2.5 block lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                </div>
            </nav>
            {isOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10" onClick={toggleMenu}></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <Link to='/' className='text-3xl font-bold text-orange-400'>Shop</Link>

                            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <div className="-mx-3">
                                        <div className="mt-2 space-y-2" id="disclosure-1">
                                            <Link to="/" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Home</Link>
                                            <Link to="/best-selling" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Best Selling</Link>
                                            <Link to="/products" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Products</Link>
                                            <Link to="/events" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={closeMenu}>Events</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
