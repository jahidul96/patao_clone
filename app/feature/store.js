import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    myLocation: LocationReducer,
  },
});
