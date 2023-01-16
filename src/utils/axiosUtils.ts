import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "data/API_ENV";

export function setAxiosDefaultsConfig() {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.common["timeout"] = 3000;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showAxiosError(error: AxiosError<any, any>) {
  console.error("REQ:", error.request);
  console.error("status:" + error.status);
  console.error("code: " + error.response?.data?.code, error.code);
  console.error("message:", error.response?.data?.message, error.message);
  console.error(error);
  console.warn("ERROR_RES: ", error.response);
}
