import { SignUpRequest } from "apis/signUp/signUpAPI.type";
import FormInput from "../../components/widgets/form/Input";
import * as S from "./SignUp.style";
import { FormPresenter } from "types/Form/FormPresenter.type";

type Props = FormPresenter<SignUpRequest>;

function SignUp({
  formState: { errors },
  onSubmit,
  handleSubmit,
  register,
}: Props) {
  return (
    <S.Wrapper>
      <S.Title>{"Young's Todo에 오신 것을 환영합니다!"}</S.Title>
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
