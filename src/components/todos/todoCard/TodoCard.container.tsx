import React, { useState } from "react";
import { TodoEditer } from "..";
import { useTodoDelete } from "../../../hooks/queries/todos/useTodoDelete";
import { TodoType } from "../../../types/todo/todo.type";
import TodoCardPresenter from "./TodoCard.presenter";

interface Props {
  todo: TodoType;
}

function TodoCardContainer({ todo }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const { mutate: deleteTodo } = useTodoDelete(todo.id);

  const clickDelete = () => {
    const confirmation = confirm(`${todo.title} 할 일을 정말 지우시겠습니까?`);
    if (confirmation) {
      deleteTodo();
    }
  };
  const clickEdit = () => setIsEdit(true);

  return isEdit ? (
    <TodoEditer prevTodo={todo} setIsEdit={setIsEdit} />
  ) : (
    <TodoCardPresenter
      todo={todo}
      clickDelete={clickDelete}
      clickEdit={clickEdit}
    />
  );
}

export default TodoCardContainer;
