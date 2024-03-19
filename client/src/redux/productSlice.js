
import { createSlice } from "@reduxjs/toolkit";





const initialState = {
product:null,

       
}
   




const productSlice = createSlice({

     name:'product',
     initialState,
     reducers:{

      productCreate:(state , action)=>{

            state.product = action.payload;
      }
     }
      
})




export const {
    productCreate
  } = productSlice.actions;
  export default productSlice.reducer;
  
  