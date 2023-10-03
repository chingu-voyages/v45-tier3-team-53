import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ApiState {
    isLoaded: boolean;
}

const initialState: ApiState = {
    isLoaded: false,
}

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setIsLoaded: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    }
})

export const { setIsLoaded } = apiSlice.actions;
export default apiSlice.reducer;