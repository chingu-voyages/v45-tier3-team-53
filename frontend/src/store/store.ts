import { configureStore } from "@reduxjs/toolkit";
import TripReducer from "./tripReducer.ts";

export const store = configureStore({
  reducer: {
    trip: TripReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
