import * as types from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case types.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}