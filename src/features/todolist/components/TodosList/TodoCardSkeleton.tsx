import SkeletonBox from "../../../../components/styles/SkeletonBox";
import * as S from "../TodoCard/TodoCard.style";

function TodoCardSkeletonList({ listNumber }: { listNumber: number }) {
  return (
    <>
      {new Array(listNumber).fill(null).map((_, idx) => (
        <TodoCardSkeleton key={"skul" + idx} />
      ))}
    </>
  );
}

function TodoCardSkeleton() {
  return (
    <S.CardBox as={"article"}>
      <S.HeaderBox>
        <S.Title as="div">
          <SkeletonBox
            className="aa"
            width={34}
            height={2}
            colorKey={"gray3"}
          />
        </S.Title>
        <S.ButtonBox>
          <S.DeleteButton as="div">
            <SkeletonBox
              className="aa"
              width={2.8}
              height={2}
              colorKey={"sub"}
            />
          </S.DeleteButton>
          <S.EditButton as="div">
            <SkeletonBox
              className="aa"
              width={2.8}
              height={2}
              colorKey={"main"}
            />
          </S.EditButton>
        </S.ButtonBox>
      </S.HeaderBox>
      <S.Contents as="div">
        <SkeletonBox width={12} height={2} colorKey={"gray3"} />
      </S.Contents>
    </S.CardBox>
  );
}

export default TodoCardSkeletonList;
