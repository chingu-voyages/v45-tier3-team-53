import { createListenerMiddleware, isAsyncThunkAction } from "@reduxjs/toolkit";
import { registerUser, loginUser, logout, loginConfirm, logoutConfirm, confirm } from "./authReducer";

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

listenerMiddleware.startListening({
    actionCreator: confirm,
    effect: (action, listenerApi) => {
        if (localStorage.getItem("token") != null) {
            listenerApi.dispatch(loginConfirm);
        } else {
            listenerApi.dispatch(logoutConfirm);
        }
    }
});