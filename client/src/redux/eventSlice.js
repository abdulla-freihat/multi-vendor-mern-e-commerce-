import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 event: null,
  events: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventCreate: (state, action) => {
      state.event= action.payload;
    },

    getAllEventsShop: (state, action) => {
      state.events = action.payload;
    },

    deleteEventsShop:(state,action)=>{

      state.events = state.products.filter((event)=> event._id !== action.payload)

    }
  }

 
});

export const { eventCreate, getAllEventsShop , deleteEventsShop } = eventSlice.actions;
export default eventSlice.reducer;