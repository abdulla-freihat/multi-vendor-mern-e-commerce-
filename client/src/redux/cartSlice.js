import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const item = action.payload;
      const itemIsExist = state.cart.find((i) => i._id === item._id);
      if (itemIsExist) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            (i._id === itemIsExist._id ? item : i)
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    },

    removeFromCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((i) => i._id !== action.payload),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
