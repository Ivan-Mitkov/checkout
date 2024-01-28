import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type BaseUrl = string;

type Headers = {
  "Content-Type": string;
  Accept: string;
};

type ApiClientConfig = {
  baseURL: BaseUrl;
  headers: Headers;
  responseType: "json";
};

const apiClient: AxiosInstance = axios.create({
  baseURL: "api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  responseType: "json",
} as ApiClientConfig);

export default apiClient;
