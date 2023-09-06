import { Location } from "../components/PlaceSearchBar.tsx";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TripState {
  destination: Location;
}

const defaultLocation: Location = {
  name: "Los Angeles",
  coordinate: {
    lat: 34.0549076,
    lng: -118.242643,
  },
  swBound: {
    lat: 33.7036519,
    lng: -118.6681759,
  },
  neBound: {
    lat: 34.3373061,
    lng: -118.1552891,
  },
};

const initialState: TripState = {
  destination: defaultLocation,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    resetTrip: (state) => {
      state.destination = defaultLocation;
    },
    setDestination: (state, action: PayloadAction<Location>) => {
      state.destination = action.payload;
      console.log(state.destination);
    },
  },
});

export const { resetTrip, setDestination } = tripSlice.actions;
export default tripSlice.reducer;
