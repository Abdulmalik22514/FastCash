// axiosInstance.js
import {store} from '@/store/store';
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // You can add other configurations like headers, timeout, etc. here
});

// Add an interceptor to include the token in the headers for each request
axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState().authReducer.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
