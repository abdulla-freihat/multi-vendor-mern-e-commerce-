import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCart = ({ closeProductsCart }) => {
  return (
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart (3 items)</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={closeProductsCart}>
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li class="flex py-6">
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                          </div>
                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <Link to='' className='text-orange-400 hover:text-orange-500'>Throwback Hip Bag</Link>
                                </h3>
                                <p class="ml-4">$90.00</p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">Salmon</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty 1</p>
                              <div class="flex">
                                <button type="button" class="font-medium text-red-600 hover:text-red-700">Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$90.00</p>
                  </div>
                 
                  <div class="mt-6">
                    <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-500">Checkout</a>
                  </div>
                  <div class="mt-6 flex justify-center gap-2  text-center text-sm text-gray-500">
                   
                      or
                      <Link to='/products' class="font-medium text-orange-400 hover:text-orange-500">
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
