import axios from "axios";

export type JWToken = string;

export function getAccessToken(): JWToken {
  const token = axios.defaults.headers.common["Authorization"];
  if (!token) {
    return "";
  }

  return token.toString().split(" ")[1];
}

export function getTokenExpirationDate(token: JWToken) {
  if (!token) {
    return "";
  }
  const info = JSON.parse(window.atob(token.split(".")[1]));
  const expDate = info.exp as number;

  return new Date(expDate * 1000);
}
