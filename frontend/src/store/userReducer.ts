import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    firstName: string;
    lasstName: string;
    email: string;
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        }
    }
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;