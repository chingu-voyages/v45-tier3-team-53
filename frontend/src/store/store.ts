import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./authReducer.ts";
import TripReducer from "./tripReducer.ts";
import UserReducer from "./userReducer.ts";
import { listenerMiddleware } from "./middleware.ts"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    trip: TripReducer,
    user: UserReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
