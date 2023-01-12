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
  options?: RegisterOptions<TForm>;
}

function FormInput<TForm extends FieldValues>({
  label,
  name,
  isError,
  register,
  options,
  ...rest
}: Props<TForm>) {
  return (
    <S.Label isError={isError}>
      <S.LabelTitle>{label}</S.LabelTitle>
      <S.Input {...register(name, options)} {...rest} />
    </S.Label>
  );
}

export default FormInput;
