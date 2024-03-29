import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  products: null,
  allProducts:null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productCreate: (state, action) => {
      state.product = action.payload;
    },

    getAllProductsShop: (state, action) => {
      state.products = action.payload;
    },

    deleteProductsShop:(state,action)=>{

      state.products = state.products.filter((product)=> product._id !== action.payload)

    },
    getAllProducts:(state , action)=>{

        state.allProducts = action.payload;
    }
  }

 
});

export const { productCreate, getAllProductsShop , deleteProductsShop ,    getAllProducts } = productSlice.actions;
export default productSlice.reducer;
