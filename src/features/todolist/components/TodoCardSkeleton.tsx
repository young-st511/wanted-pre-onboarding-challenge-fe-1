import SkeletonBox from "../../../components/styles/SkeletonBox";
import * as S from "./TodoCard/TodoCard.style";

function TodoCardSkeleton() {
  return (
    <S.CardBox as={"article"}>
      <S.HeaderBox>
        <S.Title>
          <SkeletonBox width={4} height={2} colorKey={"gray2"} />
        </S.Title>
        <S.ButtonBox>
          <S.DeleteButton>삭제</S.DeleteButton>
          <S.EditButton>수정</S.EditButton>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents>
        <SkeletonBox width={4} height={2} colorKey={"gray2"} />
      </S.Contents>
    </S.CardBox>
  );
}

export default TodoCardSkeleton;
