import { SignUpRequest } from "../../features/sign_up/api/signUpAPI.type";
import FormInput from "../../components/widgets/form/Input";
import { FormPresenter } from "../../types/form/FormPresenter.type";
import * as S from "./SignUp.style";

type Props = FormPresenter<SignUpRequest>;

function SignUp({
  formState: { errors },
  onSubmit,
  handleSubmit,
  register,
}: Props) {
  return (
    <S.Wrapper>
      <S.Title>{"Young's Todo 회원가입"}</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="아이디(이메일)"
          name="email"
          required
          isError={!!errors.email}
          register={register}
        />
        <FormInput
          label="비밀번호"
          name="password"
          type="password"
          required
          isError={!!errors.password}
          register={register}
        />
        <FormInput
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          required
          isError={!!errors.passwordConfirm}
          register={register}
        />
        <S.Submit type="submit">가입하기</S.Submit>
      </S.Form>
    </S.Wrapper>
  );
}

export default SignUp;
