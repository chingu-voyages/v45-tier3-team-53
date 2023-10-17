import { createListenerMiddleware, isAsyncThunkAction } from "@reduxjs/toolkit";
import { registerUser, loginUser, logout } from "./authReducer";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAsyncThunkAction(registerUser, loginUser),
    effect: (action) =>
        localStorage.setItem(
            "token",
            JSON.stringify(action.payload)
        )
});

listenerMiddleware.startListening({
    actionCreator: logout,
    effect: () =>
        localStorage.removeItem("token")
});