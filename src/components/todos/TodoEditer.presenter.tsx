import { PostTodoRequest } from "../../apis/todos/todosAPI.type";
import * as S from "../../pages/Todos/Todos.style";
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
          <S.Input {...register("title")} />
          <S.Submit>{submitText}</S.Submit>
        </S.FormHeader>
        <S.ContentInput {...register("content")} />
      </S.Form>
    </S.Wrapper>
  );
}

export default TodoEditerPresenter;