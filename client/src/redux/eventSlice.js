import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 event: null,
  events: null,
  allEvents:null
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

      state.events = state.events.filter((event)=> event._id !== action.payload)

    },
    getAllEvents:(state , action)=>{

      state.allEvents = action.payload;
  }
  }

 
});

export const { eventCreate, getAllEventsShop , deleteEventsShop ,  getAllEvents } = eventSlice.actions;
export default eventSlice.reducer;