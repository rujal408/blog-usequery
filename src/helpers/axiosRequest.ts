import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL } from "services/api";

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosRequest: AxiosInstance = axios.create(config);

export default axiosRequest;
