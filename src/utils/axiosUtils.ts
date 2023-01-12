import axios from "axios";
import { API_BASE_URL } from "data/API_ENV";

export function setAxiosDefaultsConfig() {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.common['timeout'] = 3000;
}