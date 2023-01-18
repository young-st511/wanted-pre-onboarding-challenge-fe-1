import { APIDomains } from "../../../api/apiDomains";

export const SignUpApiUrl = {
  /** POST: 회원가입 */
  SIGN_UP: APIDomains.User + "/create",
} as const;

export interface SignUpRequest {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface SignUpResponse {
  message: string;
  token: string;
}
