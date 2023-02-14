import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myAdderss: null,
  userLocation: null,
  destination: null,
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
    addDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { addAddress, addUserLocation, addDestination } =
  LocationSlice.actions;

export default LocationSlice.reducer;
