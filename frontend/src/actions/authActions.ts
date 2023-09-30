import * as types from "./types";
import AuthService from "../services/authService";

export const register = (firstName, lastName, email, password) => (dispatch) => {
    return AuthService.register(firstName, lastName, email, password).then(
        (response) => {
            dispatch({
                type: types.REGISTER_SUCCESS,
            });

            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: types.REGISTER_FAIL,
            });

            return Promise.reject();
        }
    );
};