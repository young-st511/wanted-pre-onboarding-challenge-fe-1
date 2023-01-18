import { TodoCreater } from "../../features/todolist/components/TodoEditer";
import TodosList from "../../features/todolist/components/TodosList";
import { TodoType } from "../../features/todolist/types/todo.type";
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
