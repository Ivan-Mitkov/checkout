import axios from "axios";

const apiClient = axios.create({
  baseURL: 'api',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  responseType: "json",
});

export default apiClient;
