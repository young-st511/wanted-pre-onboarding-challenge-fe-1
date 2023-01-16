import { List as StyledList } from "../../pages/Todos/Todos.style";
import { TodoType } from "../../types/todo/todo.type";
import TodoCard from "./todoCard";

interface Props {
  todos: TodoType[];
}

function TodosList({ todos }: Props) {
  return (
    <StyledList>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard todo={todo} />
        </li>
      ))}
    </StyledList>
  );
}

export default TodosList;
