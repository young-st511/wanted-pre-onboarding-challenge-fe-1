import { TodoCreater } from "../../components/todos";
import TodosList from "../../components/todos/TodosList";
import { TodoType } from "../../types/todo/todo.type";
import * as S from "./Todos.style";
interface Props {
  todos: TodoType[];
}

function TodosPresenter({ todos }: Props) {
  return (
    <S.Wrapper>
      <TodoCreater />
      <S.List>
        <TodosList todos={todos} />
      </S.List>
    </S.Wrapper>
  );
}

export default TodosPresenter;
