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