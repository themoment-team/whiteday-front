import axios from "axios";
import { baseUrl } from "../Shared/Config";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
