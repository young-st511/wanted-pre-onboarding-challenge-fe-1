import { AuthKeys } from "hooks/queries/keys/AuthKeys";
import jwtDecode from "jwt-decode";

export type JWToken = string;

export function checkTokenValidity(): boolean {
  const token = getAccessToken();

  if (!token) {
    return false;
  }

  const expireDate = getTokenExpirationDate(token);
  const now = new Date();

  if (now > expireDate) {
    return true;
  } else {
    return false;
  }
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

export function getTokenExpirationDate(token: JWToken) {
  if (!token) {
    throw Error("Token is not exist");
  }

  const decodedToken = jwtDecode(token);

  console.log("TT: ", decodedToken);

  const info = JSON.parse(window.atob(token.split(".")[1]));
  const expDate = info.exp as number;

  return new Date(expDate * 1000);
}
