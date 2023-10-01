import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/";

const getAllTrips = () => {
    return axios.get(API_URL + "trips", { headers: authHeader() });
};

export default {
    getAllTrips
};