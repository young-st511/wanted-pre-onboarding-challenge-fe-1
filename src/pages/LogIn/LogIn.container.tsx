import { SubmitHandler, useForm } from "react-hook-form";
import { SignInRequest } from "../../apis/auth/authAPI.type";
import LogIn from "./LogIn.presenter";

function LogInContainer() {
  const { register, handleSubmit, formState, setValue } =
    useForm<SignInRequest>();

  const onSubmit: SubmitHandler<SignInRequest> = (data) => {
    console.log("data", data);
  };
  return (
    <LogIn
      formState={formState}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}

export default LogInContainer;
