
import { createSlice } from "@reduxjs/toolkit";





const initialState = {

        currentUser : null,
        token:null
}
   




const userSlice = createSlice({

     name:'user',
     initialState,
     reducers:{

          signIn : (state ,action)=>{

               state.currentUser = action.payload.user;
               state.token = action.payload.token;
              
          },
          logout : (state) =>  {
               state.currentUser = null;
               state.token = null; 
              
             },

             updateUser:(state , action)=>{

                state.currentUser=action.payload;
             }
             
     }

      
})




export const { signInStart, 
    signIn,logout , updateUser
  
  } = userSlice.actions;
  export default userSlice.reducer;
  
  