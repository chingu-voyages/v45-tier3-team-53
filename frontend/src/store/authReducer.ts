import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

// interface AuthState {
//     token: string | null;
//     status: "idle" | "loading" | "succeeded" | "failed";
//     error: string | null;
// }

// const initialState: AuthState = {
//     token: null,
//     status: "idle",
//     error: null,
// }

interface RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface LoginData {
    email: string;
    password: string;
}

export const registerUser = createAsyncThunk("auth/registerUser", async (registerData: RegisterData) => {
    const response = await axiosInstance.post("/auth/register", registerData);
    return response.data;
})

export const loginUser = createAsyncThunk("auth/loginUser", async (loginData: LoginData) => {
    const response = await axiosInstance.post("/auth/authenticate", loginData);
    return response.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        loginConfirm: (state) => {
            state.isLoggedIn = true;
        },
        logoutConfirm: (state) => {
            state.isLoggedIn = false;
        },
        logout: () => {

        },
        confirm: () => {

        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(registerUser.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    // }
})

export const { loginConfirm, logoutConfirm, logout, confirm } = authSlice.actions;
export default authSlice.reducer;