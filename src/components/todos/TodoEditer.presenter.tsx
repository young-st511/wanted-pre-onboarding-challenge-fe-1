import { PostTodoRequest } from "../../apis/todos/todosAPI.type";
import * as S from "./TodoEditer.style";
import { FormPresenter } from "../../types/form/FormPresenter.type";

interface Props extends FormPresenter<PostTodoRequest> {
  submitText: string;
}

function TodoEditerPresenter({
  formState: { errors },
  handleSubmit,
  onSubmit,
  register,
  submitText,
}: Props) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>
          <S.Input
            {...register("title")}
            autoComplete="off"
            placeholder="할 일을 입력해주세요"
            tabIndex={1}
          />
          <S.Submit tabIndex={3}>{submitText}</S.Submit>
        </S.FormHeader>
        <S.ContentInput
          {...register("content")}
          autoComplete="off"
          placeholder="할 일 내용"
          tabIndex={2}
        />
      </S.Form>
    </S.Wrapper>
  );
}

export default TodoEditerPresenter;
