import { SignUpRequest } from "../../apis/signUp/signUpAPI.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValidations } from "../../types/form/FormPresenter.type";
import SignUp from "./SignUp.presenter";
import { useEffect } from "react";
import { setAxiosDefaultsConfig } from "../../utils/axiosUtils";
import { postSignUp } from "../../apis/signUp/signUpAPI";
import useAuth from "../../hooks/auth/useAuth";

function SignUpContainer() {
  const { register, handleSubmit, formState } = useForm<SignUpRequest>();

  const { signInWithToken } = useAuth();

  const onSubmit: SubmitHandler<SignUpRequest> = async (data) => {
    delete data.passwordConfirm;

    const res = await postSignUp(data);

    if ((res.status == 200 || res.status == 201) && res.data.token) {
      signInWithToken(res.data.token);
    }
  };

  useEffect(() => {
    setAxiosDefaultsConfig();
  }, []);

  // const validations: FormValidations<SignUpRequest> = {
  //   email: (v) => v === "",
  // };

  return (
    <SignUp
      formState={formState}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}

export default SignUpContainer;
