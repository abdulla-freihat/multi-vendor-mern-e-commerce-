import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { backend_url } from '../server';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const ProductsCart = ({ closeProductsCart }) => {
  const { cart } = useSelector(state => state.cart);
  const itemQuantity = cart.map(item=>item.qty)
  const [quantity , setQuantity] = useState(itemQuantity);
  
  const totalPrice = cart.reduce((acc , item) => acc + item.qty * item.discountPrice , 0)

  const dispatch = useDispatch();

  const removeCartItemHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success('Item deleted from cart');
  };


  const incrementQuantity = (cartItem) => {

    const newQuantity = cartItem.qty + 1; 
    setQuantity(newQuantity); 
    if(cartItem.stock < newQuantity){

       toast.error('Product stock limited!');
    }else{
      const updateCartData = { ...cartItem, qty: newQuantity };
      dispatch(addToCart(updateCartData)); 
    }
  
  };
  
  const decrementQuantity = (cartItem) => {
    const newQuantity = cartItem.qty === 1 ? 1 : cartItem.qty - 1; 
    setQuantity(newQuantity); 
    const updateCartData = { ...cartItem, qty: newQuantity }; 
    dispatch(addToCart(updateCartData)); 
  };

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
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart ({cart.length}) {cart.length ===1 ? 'item' : 'items'} </h2>
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
                  {cart.length === 0 ? (
                    <p className="mt-8 text-gray-600 text-center">Your cart is empty.</p>
                  ) : (
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map(item => (
                            <li key={item._id} className="flex flex-col md:flex-row gap-4 md:gap-0 py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={`${backend_url}${item.images[0]}`} alt={item.name} className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <Link to={`/product/${item.name}`} className='text-orange-400 hover:text-orange-500'>{item.name}</Link>
                                    </h3>
                                    <p className="ml-4">{item.originalPrice === 0 ? item.originalPrice : item.discountPrice}$</p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                <div className='flex gap-2 items-center'>
                                  <p className="text-gray-500">qty {item.qty}</p>
                                    <button onClick={()=>incrementQuantity(item)} className='border text-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1'> +</button>
                                    <button onClick={()=>decrementQuantity(item)} className='border text-orange-400 hover:bg-orange-400 hover:text-white px-4 py-1'> -</button>

                                  </div>
                                  <div className="flex">
                                    <button type="button" className="font-medium text-red-600 hover:text-red-700 " onClick={() => removeCartItemHandler(item._id)}>Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{totalPrice}$</p>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;


