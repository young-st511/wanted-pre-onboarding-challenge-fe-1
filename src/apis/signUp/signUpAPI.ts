import { postRequest } from "../../apis/requests";
import { SignUpApiUrl, SignUpRequest, SignUpResponse } from "./signUpAPI.type";

export async function postSignUp(signUpFormData: SignUpRequest) {
  const response = await postRequest<SignUpResponse, SignUpRequest>(
    SignUpApiUrl.SIGN_UP,
    signUpFormData
  );

  return response;
}
