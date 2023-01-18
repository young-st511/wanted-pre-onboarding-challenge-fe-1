import * as S from "./TodoCard.style";
import { TodoType } from "../../types/todo.type";

interface Props {
  todo: TodoType;
  clickDelete: VoidFunction;
  clickEdit: VoidFunction;
}

function TodoCardPresenter({ todo, clickDelete, clickEdit }: Props) {
  return (
    <S.CardBox as={"article"}>
      <S.HeaderBox>
        <S.Title>{todo.title}</S.Title>
        <S.ButtonBox>
          <S.DeleteButton onClick={clickDelete}>삭제</S.DeleteButton>
          <S.EditButton onClick={clickEdit}>수정</S.EditButton>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents>{todo.content}</S.Contents>
    </S.CardBox>
  );
}

export default TodoCardPresenter;
