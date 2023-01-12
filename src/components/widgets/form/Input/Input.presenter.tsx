import { InputHTMLAttributes } from "react";
import { FieldPath, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import * as S from "./Input.style";

interface PresenterProps<TForm extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: FieldPath<TForm>;
  register: UseFormRegister<TForm>;
  options?: RegisterOptions<TForm>;
}

function FormInputPresenter<TForm extends FieldValues>({label, name, register, options, ...rest}: PresenterProps<TForm>) {
  return (
    <S.Label>
      <S.LabelTitle>{label}</S.LabelTitle>
      <S.Input {...register(name, options)} {...rest} />
    </S.Label>
  )
}

export default FormInputPresenter