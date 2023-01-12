import { SignUpRequest } from "apis/signUp/signUpAPI.type";
import FormInput from "../../components/widgets/form/Input";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";
import * as S from "./SignUp.style";

interface PresenterProps {
  register: UseFormRegister<SignUpRequest>;
  formState: UseFormStateReturn<SignUpRequest>;
  onSubmit: SubmitHandler<SignUpRequest>;
  handleSubmit: UseFormHandleSubmit<SignUpRequest>;
}

function SignUp({
  formState: { errors },
  onSubmit,
  handleSubmit,
  register,
}: PresenterProps) {
  return (
    <S.Wrapper>
      <S.Title>{"Young's Todo에 오신 것을 환영합니다!"}</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="아이디(이메일)"
          name="email"
          required
          isError={!!errors.email ?? false}
          register={register}
        />
        <S.Submit type="submit">가입하기</S.Submit>
      </S.Form>
    </S.Wrapper>
  );
}

export default SignUp;
