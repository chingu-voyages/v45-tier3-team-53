import { createSlice } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state = initialState;
        },
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;