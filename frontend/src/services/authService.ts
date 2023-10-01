import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (firstName, lastName, email, password) => {
    return axios.post(API_URL + "register", {
        firstName,
        lastName,
        email,
        password
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "authenticate", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout
};