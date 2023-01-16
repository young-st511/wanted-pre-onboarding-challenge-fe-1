import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateTodoRequest } from "../../apis/todos/todosAPI.type";
import { useTodoCreate } from "../../hooks/queries/todos/useTodoCreate";
import TodoEditerPresenter from "./TodoEditer.presenter";

function TodoCreaterContainer() {
  const { handleSubmit, formState, register, reset } =
    useForm<UpdateTodoRequest>();
  const { mutate, isSuccess } = useTodoCreate();

  const onSubmit: SubmitHandler<UpdateTodoRequest> = (
    data: UpdateTodoRequest
  ) => {
    mutate(data);
    console.log(data);

    if (isSuccess) {
      reset();
    }
  };

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"추가"} />;
}

export default TodoCreaterContainer;
