import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

interface AuthState {
    token: string | null;
    status: "idle" | "loading" | "success" | "failed";
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

export const registerUser = createAsyncThunk("auth/registerUser", async (registerData: RegisterData) => {
    const response = await axiosInstance.post("/auth/register", registerData);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.removeItem("user");
    return response.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.status = "success";
        },
        logout: (state) => {
            state = initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;