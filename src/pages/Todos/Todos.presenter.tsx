import { TodoCreater } from "../../components/todos";
import TodosList from "../../components/todos/TodosList";
import { TodoType } from "../../types/todo/todo.type";
interface Props {
  todos: TodoType[];
}

function TodosPresenter({ todos = [] }: Props) {
  return (
    <>
      <TodoCreater />
      <TodosList todos={todos} />
    </>
  );
}

export default TodosPresenter;
