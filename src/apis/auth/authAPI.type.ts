import { APIDomains } from "apis/apiDomains";

export const AuthApiUrl = {
  /** POST: 로그인 */
  SIGN_IN: APIDomains.User + "/login",
} as const;

export interface SignInRequest {
  email: string;
  pssword: string;
}

export interface SignInResponse {
  message: string;
  token: string;
}
