import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostTodoRequest } from "../../apis/todos/todosAPI.type";
import { useTodoEdit } from "../../hooks/queries/todos/useTodoEdit";
import { TodoType } from "../../types/todo/todo.type";
import TodoEditerPresenter from "./TodoEditer.presenter";

interface Props {
  prevTodo: TodoType;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

function TodoEditerContainer({ prevTodo, setIsEdit }: Props) {
  const todoId = prevTodo.id;

  const { handleSubmit, formState, register } = useForm<PostTodoRequest>({
    defaultValues: { title: prevTodo.title, content: prevTodo.content },
  });
  const { mutate, isSuccess } = useTodoEdit(todoId);

  const onSubmit: SubmitHandler<PostTodoRequest> = (data: PostTodoRequest) => {
    //! TEST
    console.log("TODO EDIT", data);
    mutate(data);
  };

  if (isSuccess) {
    setIsEdit(false);
  }

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"수정"} />;
}

export default TodoEditerContainer;
