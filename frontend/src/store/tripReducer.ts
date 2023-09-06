import {Location} from "../components/PlaceSearchBar.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TripState {
    destination: Location
}

const defaultLocation: Location = {

}

const initialState: TripState = {
    destination: {},
}

const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {
        resetTrip: (state) => {
            state.destination = null;
        },
        setDestination: (state, action: PayloadAction<Location>) => {
            state.destination = action.payload;
        }
    }
})

export const {
    resetTrip,
    setDestination,
} = tripSlice.actions;
export default tripSlice.reducer;