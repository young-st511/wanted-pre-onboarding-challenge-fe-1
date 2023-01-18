import * as S from "./TodoCard/TodoCard.style";

function TodoCardSkeleton() {
  return (
    <S.CardBox as={"article"}>
      <S.HeaderBox>
        <S.Title>{todo.title}</S.Title>
        <S.ButtonBox>
          <S.DeleteButton>삭제</S.DeleteButton>
          <S.EditButton>수정</S.EditButton>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents>{todo.content}</S.Contents>
    </S.CardBox>
  );
}

export default TodoCardSkeleton;
