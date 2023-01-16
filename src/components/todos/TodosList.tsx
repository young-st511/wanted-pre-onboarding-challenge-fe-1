import { List as StyledList } from "../../pages/Todos/Todos.style";
import { TodoType } from "../../types/todo/todo.type";
import TodoPresenter from "./TodoPresenter";

interface Props {
  todos: TodoType[];
}

function TodosList({ todos }: Props) {
  return (
    <StyledList>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoPresenter todo={todo} />
        </li>
      ))}
    </StyledList>
  );
}

export default TodosList;
