import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: process.env.BASE_URL,
});
