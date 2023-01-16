import { AuthKeys } from "../hooks/queries/keys/AuthKeys";

export type JWToken = string;

export function checkTokenValidity(): boolean {
  const token = getAccessToken();

  if (!token) {
    return false;
  }

  return true;
}

export function setAccessToken(token: JWToken) {
  localStorage.setItem(AuthKeys.AccessToken, token);
}

export function getAccessToken(): JWToken {
  // const token = axios.defaults.headers.common["Authorization"];
  const token = localStorage.getItem(AuthKeys.AccessToken);

  if (!token) {
    return "";
  }

  // return token.toString().split(" ")[1];
  return token;
}
