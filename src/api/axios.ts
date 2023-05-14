import axios from 'axios';

const BASE_URL = process.env.NODE_ENV !== 'production' ? '5.204.105.132' : ''; // http://localhost:8000

const axiosPublic = axios.create({
    baseURL: BASE_URL
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export { axiosPrivate, axiosPublic };