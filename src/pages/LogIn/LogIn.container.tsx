import { SubmitHandler, useForm } from "react-hook-form";
import { SignInRequest } from "../../apis/auth/authAPI.type";
import useAuth from "../../hooks/auth/useAuth";
import LogIn from "./LogIn.presenter";

function LogInContainer() {
  const { register, handleSubmit, formState, setValue } =
    useForm<SignInRequest>();

  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<SignInRequest> = (data) => {
    console.log("login data", data);
    signIn(data);
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
