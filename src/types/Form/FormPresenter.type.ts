import {
  FieldPathValue,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  FieldPath,
  UseFormRegister,
  UseFormStateReturn,
  Validate,
} from "react-hook-form";

type FormValidations<TForm extends FieldValues> = {
  [key in keyof TForm]?:
    | Validate<FieldPathValue<TForm, FieldPath<TForm>>>
    | Record<string, Validate<FieldPathValue<TForm, FieldPath<TForm>>>>;
};

interface FormPresenter<TForm extends FieldValues> {
  register: UseFormRegister<TForm>;
  formState: UseFormStateReturn<TForm>;
  onSubmit: SubmitHandler<TForm>;
  handleSubmit: UseFormHandleSubmit<TForm>;
}

export type { FormPresenter, FormValidations };
