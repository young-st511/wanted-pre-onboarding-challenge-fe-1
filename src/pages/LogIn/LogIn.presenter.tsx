import { Link } from "react-router-dom";
import { SignInRequest } from "../../apis/auth/authAPI.type";
import FormInput from "../../components/widgets/form/Input";
import { FormPresenter } from "../../types/Form/FormPresenter.type";
import * as S from "./LogIn.style";

type Props = FormPresenter<SignInRequest>;

function LogIn({
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
        <S.Submit type="submit">로그인</S.Submit>
      </S.Form>
      <Link to="/signUp">회원가입!</Link>
    </S.Wrapper>
  );
}

export default LogIn;
