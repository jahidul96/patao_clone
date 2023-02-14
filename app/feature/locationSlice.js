import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myAdderss: null,
  userLocation: null,
};

export const LocationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    addAddress: (state, action) => {
      state.myAdderss = action.payload;
    },
    addUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
  },
});

export const { addAddress, addUserLocation } = LocationSlice.actions;

export default LocationSlice.reducer;
