import { SignUpRequest } from "apis/signUp/signUpAPI.type"
import { SubmitHandler, useForm } from "react-hook-form"
import SignUp from "./SignUp.presenter"

function SignUpContainer() {
  const {register,handleSubmit, formState} = useForm<SignUpRequest>();
  
  const onSubmit: SubmitHandler<SignUpRequest> = () => {
    console.log();
  }
  
  return (
    <SignUp formState={formState} onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} />
  )
}

export default SignUpContainer