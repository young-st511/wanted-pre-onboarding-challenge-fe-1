import { useTodosList } from "../../queries/useTodosList";
import TodosListPresenter from "./TodosList.persenter";

function TodosListContainer() {
  const { data } = useTodosList();

  const todos = data?.sort(
    (x, y) => Date.parse(y.updatedAt) - Date.parse(x.updatedAt)
  );

  return <TodosListPresenter todos={todos} />;
}

export default TodosListContainer;
