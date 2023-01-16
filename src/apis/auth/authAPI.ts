import { postRequest } from "apis/requests";
import { AuthApiUrl, SignInRequest, SignInResponse } from "./authAPI.type";

export function postSignIn(data: SignInRequest) {
  const res = postRequest<SignInResponse, SignInRequest>(
    AuthApiUrl.SIGN_IN,
    data
  );

  return res;
}
