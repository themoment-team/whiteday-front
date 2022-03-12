import axios from "axios";
import { baseUrl } from "../Shared/Config";

const api = axios.create({
  withCredentials: true,
  baseURL: baseUrl
});

export default api;
