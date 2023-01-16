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
        <S.Input {...register("title")} />
        <S.Input {...register("content")} />
        <S.Submit>{submitText}</S.Submit>
      </S.Form>
    </S.Wrapper>
  );
}

export default TodoEditerPresenter;
