import { useTodosList } from "../../hooks/queries/todos/useTodosList";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const { data: todos } = useTodosList();

  if (!todos) {
    return;
  }

  return <TodosPresenter todos={todos} />;
}

export default TodosContainer;
