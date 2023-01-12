export const enum SignUpApiUrl {
  /** POST: 회원가입 */
  SIGN_UP = '/users/create',
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  token: string;
}
