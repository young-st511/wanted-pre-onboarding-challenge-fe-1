import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTodoEdit } from "../../queries/useTodoEdit";
import { TodoType } from "../../types/todo.type";
import { PostTodoRequest } from "../../types/todosAPI.type";
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
  const isDirty = formState.isDirty;
  const { mutate } = useTodoEdit(todoId, setIsEdit);

  const onSubmit: SubmitHandler<PostTodoRequest> = (data: PostTodoRequest) => {
    if (!isDirty) {
      setIsEdit(false);
      return;
    }

    //! TEST
    console.log("TODO EDIT", data);
    mutate(data);
  };

  const props = { handleSubmit, formState, register, onSubmit };

  return <TodoEditerPresenter {...props} submitText={"수정"} />;
}

export default TodoEditerContainer;
