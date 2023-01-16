import { postRequest } from "../../apis/requests";
import * as T from "./todosAPI.type";

export async function postSignUp(signUpFormData: SignUpRequest) {
  const response = await postRequest<SignUpResponse, SignUpRequest>(
    SignUpApiUrl.SIGN_UP,
    signUpFormData
  );

  return response;
}
