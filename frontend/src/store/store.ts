import { configureStore } from "@reduxjs/toolkit";
import TripReducer from "./tripReducer.ts";
import ApiReducer from "./apiReducer.ts";

export const store = configureStore({
  reducer: {
    trip: TripReducer,
    api: ApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
