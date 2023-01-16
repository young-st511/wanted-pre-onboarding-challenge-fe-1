import * as S from "../../../pages/Todos/Todos.style";
import { TodoType } from "../../../types/todo/todo.type";

interface Props {
  todo: TodoType;
  clickDelete: VoidFunction;
  clickEdit: VoidFunction;
}

function TodoCardPresenter({ todo, clickDelete, clickEdit }: Props) {
  return (
    <S.Wrapper>
      <S.HeaderBox>
        <S.Title>{todo.title}</S.Title>
        <S.ButtonBox>
          <S.DeleteButton onClick={clickDelete}>삭제</S.DeleteButton>
          <S.Button onClick={clickEdit}>수정</S.Button>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents>{todo.content}</S.Contents>
    </S.Wrapper>
  );
}

export default TodoCardPresenter;
