import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000/'; // 5.204.105.132

const axiosPublic = axios.create({
    baseURL: BASE_URL
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export { axiosPrivate, axiosPublic };