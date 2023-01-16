import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateTodoRequest } from "../../apis/todos/todosAPI.type";
import TodoEditerPresenter from "./TodoEditer.presenter";

function TodoCreaterContainer() {
  const { handleSubmit, formState, register } = useForm<UpdateTodoRequest>();

  const onSubmit: SubmitHandler<UpdateTodoRequest> = (
    data: UpdateTodoRequest
  ) => {
    console.log(data);
  };

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"추가"} />;
}

export default TodoCreaterContainer;
