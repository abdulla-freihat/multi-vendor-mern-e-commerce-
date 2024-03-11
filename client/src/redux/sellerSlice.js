
import { createSlice } from "@reduxjs/toolkit";





const initialState = {

        seller: null,
        token:null
}
   




const sellerSlice = createSlice({

     name:'seller',
     initialState,
     reducers:{

          sellerLogin : (state ,action)=>{

               state.seller = action.payload.seller;
               state.token = action.payload.token;
              
          },
         sellerLogout(state) {
               state.seller = null;
               state.token = null; 
              
             },
     }

      
})




export const {sellerLogin , 
  sellerLogout
  
  } = sellerSlice.actions;
  export default sellerSlice.reducer;
  
  