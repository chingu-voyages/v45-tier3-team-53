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

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {

            dispatch({
                type: LOGIN_FAIL,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};