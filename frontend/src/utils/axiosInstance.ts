import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

let store: ToolkitStore;

export const injectStore = (_store: ToolkitStore) => {
    store = _store;
};

axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;