import { SignUpRequest } from "../../apis/signUp/signUpAPI.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValidations } from "../../types/Form/FormPresenter.type";
import SignUp from "./SignUp.presenter";
import { useEffect } from "react";
import { setAxiosDefaultsConfig } from "../../utils/axiosUtils";

function SignUpContainer() {
  const { register, handleSubmit, formState, setValue } =
    useForm<SignUpRequest>();

  const onSubmit: SubmitHandler<SignUpRequest> = (data) => {
    delete data.passwordConfirm;

    console.log("data", data);
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
