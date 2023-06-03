import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? "https://87.229.84.84/" : "https://localhost:8000/"; // 5.204.105.132

const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export { axiosPrivate, axiosPublic };
