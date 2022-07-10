import axios from "axios";

const axiosInstant = axios.create({
  baseURL: process.env.API,
});

export default axiosInstant;
