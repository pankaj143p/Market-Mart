// src/config/axios.js
import axios from 'axios';

export const axiosi = axios.create({
    baseURL: 'http://localhost:8000/', // Update with your backend server's address
    timeout: 10000,
});
