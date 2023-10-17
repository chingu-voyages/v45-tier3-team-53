import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

interface AuthState {
    token: string | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    status: "idle",
    error: null,
}

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state = initialState;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;