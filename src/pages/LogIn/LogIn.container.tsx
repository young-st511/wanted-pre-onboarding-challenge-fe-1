import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignInRequest } from "../../features/auth/api/authAPI.type";
import useAuth from "../../hooks/auth/useAuth";
import LogIn from "./LogIn.presenter";

function LogInContainer() {
  const { register, handleSubmit, formState } = useForm<SignInRequest>();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit: SubmitHandler<SignInRequest> = async (data) => {
    await signIn(data);
    navigate("/");
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
