import { SubmitHandler, useForm } from "react-hook-form";
import { PostTodoRequest } from "../../apis/todos/todosAPI.type";
import { TodoType } from "../../types/todo/todo.type";
import TodoEditerPresenter from "./TodoEditer.presenter";

interface Props {
  prevTodo: TodoType;
}

function TodoEditerContainer({ prevTodo }: Props) {
  const { handleSubmit, formState, register } = useForm<PostTodoRequest>({
    defaultValues: { title: prevTodo.title, content: prevTodo.content },
  });

  const onSubmit: SubmitHandler<PostTodoRequest> = (data: PostTodoRequest) => {
    console.log(data);
  };

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"수정"} />;
}

export default TodoEditerContainer;
