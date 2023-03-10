import { InputHTMLAttributes } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import * as S from "./Input.style";

interface Props<TForm extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: FieldPath<TForm>;
  register: UseFormRegister<TForm>;
  isError: boolean;
  error?: string;
  options?: RegisterOptions<TForm>;
}

function FormInput<TForm extends FieldValues>({
  label,
  name,
  error,
  isError,
  register,
  options,
  autoComplete = "off",
  ...rest
}: Props<TForm>) {
  return (
    <S.Label isError={isError}>
      <S.LabelTitle>{label}</S.LabelTitle>
      <S.Input
        {...register(name, options)}
        {...rest}
        autoComplete={autoComplete}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Label>
  );
}

export default FormInput;
