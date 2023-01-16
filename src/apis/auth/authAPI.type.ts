import { APIDomains } from "../apiDomains";

export const AuthApiUrl = {
  /** POST: 로그인 */
  SIGN_IN: APIDomains.User + "/login",
} as const;

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  message: string;
  token: string;
}
