import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  products: null,
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
  }

 
});

export const { productCreate, getAllProductsShop } = productSlice.actions;
export default productSlice.reducer;
