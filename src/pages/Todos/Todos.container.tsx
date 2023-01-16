import React from "react";
import { useTodosList } from "../../hooks/queries/todos/useTodosList";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const { data } = useTodosList();
  const todos = data?.data.data ?? [];

  return <TodosPresenter todos={todos} />;
}

export default TodosContainer;
