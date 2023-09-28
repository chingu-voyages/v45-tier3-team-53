import { configureStore } from "@reduxjs/toolkit";
import TripReducer from "./tripReducer.ts";
import index from "../reducers";

export const store = configureStore({
  reducer: {
    trip: TripReducer,
    index
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
