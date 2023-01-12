import { useForm } from "react-hook-form"
import FormInputPresenter from "./Input.presenter"

type FormInputProps = {}

function FormInputContainer({}: Props) {
  const {} = useForm
  
  return (
    <FormInputPresenter />
  )
}

export default FormInputContainer