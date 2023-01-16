import { postRequest } from "../../apis/requests";
import { AuthKeys } from "../../hooks/queries/keys/AuthKeys";
import { AuthApiUrl, SignInRequest, SignInResponse } from "./authAPI.type";

export function postSignIn(data: SignInRequest) {
  const res = postRequest<SignInResponse, SignInRequest>(
    AuthApiUrl.SIGN_IN,
    data
  );

  return res;
}

export function postSignOut() {
  localStorage.removeItem(AuthKeys.AccessToken);
}
