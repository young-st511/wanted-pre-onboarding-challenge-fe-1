import { Suspense } from "react";
import { TodoCreater } from "../../features/todolist/components/TodoEditer";
import TodoCardSkeletonList from "../../features/todolist/components/TodosList/TodoCardSkeleton";
import TodosList from "../../features/todolist/components/TodosList";
import * as S from "./Todos.style";

function TodosPresenter() {
  return (
    <S.Wrapper>
      <TodoCreater />
      <S.List>
        <Suspense fallback={<TodoCardSkeletonList listNumber={4} />}>
          <TodosList />
        </Suspense>
      </S.List>
    </S.Wrapper>
  );
}

export default TodosPresenter;
