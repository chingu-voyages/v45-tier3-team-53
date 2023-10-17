import { createListenerMiddleware, isAsyncThunkAction } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authReducer";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAsyncThunkAction(registerUser, loginUser),
    effect: (action) =>
        localStorage.setItem(
            "token",
            JSON.stringify(action.payload)
        )
});