import { TodoType } from "../../types/todo/todo.type";
import TodoCard from "./todoCard";

interface Props {
  todos: TodoType[];
}

function TodosList({ todos }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard todo={todo} />
        </li>
      ))}
    </>
  );
}

export default TodosList;
