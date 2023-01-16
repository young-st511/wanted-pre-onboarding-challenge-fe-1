import * as S from "../../pages/Todos/Todos.style";
import { TodoType } from "../../types/todo/todo.type";

interface Props {
  todo: TodoType;
}

function TodoPresenter({ todo }: Props) {
  return (
    <S.Wrapper>
      <S.Title>{todo.title}</S.Title>
      <S.Contents>{todo.content}</S.Contents>
    </S.Wrapper>
  );
}

export default TodoPresenter;
