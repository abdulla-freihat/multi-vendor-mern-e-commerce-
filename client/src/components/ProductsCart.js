import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { backend_url } from '../server';
import { removeFromCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';


const ProductsCart = ({ closeProductsCart }) => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();


  const removeCartItemHandler = (id)=>{

     dispatch(removeFromCart(id))
     toast.success('Item deleted from cart');
  }

  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart ({cart.length} items)</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={closeProductsCart}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.map(item => (
                          <li key={item._id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={`${backend_url}${item.images[0]}`} alt={item.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <Link to={`/${item.category}/${item._id}`} className='text-orange-400 hover:text-orange-500'>{item.name}</Link>
                                  </h3>
                                  <p className="ml-4">  {item.originalPrice === 0 ? item.originalPrice : item.discountPrice}$</p>
                                </div>
                               
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">qty 1</p>
                                <div className="flex">
                                  <button type="button" className="font-medium text-red-600 hover:text-red-700 " onClick={()=>removeCartItemHandler(item._id)}>Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$90.00</p>
                  </div>
                  <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-500">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center gap-2  text-center text-sm text-gray-500">
                    or
                    <Link to='/products' className="font-medium text-orange-400 hover:text-orange-500">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;


