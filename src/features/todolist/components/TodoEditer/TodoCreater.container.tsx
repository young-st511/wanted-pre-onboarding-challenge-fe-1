import { SubmitHandler, useForm } from "react-hook-form";
import { useTodoCreate } from "../../queries/useTodoCreate";
import { PostTodoRequest } from "../../types/todosAPI.type";
import TodoEditerPresenter from "./TodoEditer.presenter";

function TodoCreaterContainer() {
  const { handleSubmit, formState, register, reset } =
    useForm<PostTodoRequest>();
  const { mutate } = useTodoCreate(reset);

  const onSubmit: SubmitHandler<PostTodoRequest> = (data: PostTodoRequest) => {
    mutate(data);
  };

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"추가"} />;
}

export default TodoCreaterContainer;
