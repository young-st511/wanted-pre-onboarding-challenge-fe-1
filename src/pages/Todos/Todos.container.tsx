import { useTodosList } from "../../features/todolist/queries/useTodosList";
import TodosPresenter from "./Todos.presenter";

function TodosContainer() {
  const { data: todos } = useTodosList();

  if (!todos) {
    return null;
  }

  return <TodosPresenter todos={todos} />;
}

export default TodosContainer;
