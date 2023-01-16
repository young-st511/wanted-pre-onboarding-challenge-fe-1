import React, { useState } from "react";
import { TodoEditer } from "..";
import { TodoType } from "../../../types/todo/todo.type";
import TodoCardPresenter from "./TodoCard.presenter";

interface Props {
  todo: TodoType;
}

function TodoCardContainer({ todo }: Props) {
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <TodoEditer prevTodo={todo} setIsEdit={setIsEdit} />
  ) : (
    <TodoCardPresenter todo={todo} setIsEdit={setIsEdit} />
  );
}

export default TodoCardContainer;
