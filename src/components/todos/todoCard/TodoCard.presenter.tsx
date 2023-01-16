import { Dispatch, SetStateAction } from "react";
import * as S from "../../../pages/Todos/Todos.style";
import { TodoType } from "../../../types/todo/todo.type";

interface Props {
  todo: TodoType;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

function TodoCardPresenter({ todo, setIsEdit }: Props) {
  return (
    <S.Wrapper>
      <S.HeaderBox>
        <S.Title>{todo.title}</S.Title>
        <S.ButtonBox>
          <S.DeleteButton>삭제</S.DeleteButton>
          <S.Button onClick={() => setIsEdit(true)}>수정</S.Button>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents>{todo.content}</S.Contents>
    </S.Wrapper>
  );
}

export default TodoCardPresenter;
