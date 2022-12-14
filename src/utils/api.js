import axios from "axios";
import { API_URL } from "../config";


const axiosInstance = axios.create({
    baseURL: API_URL,
    // timeout: 5000,
    responseType: 'json',
    responseEncoding: 'utf8',
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;