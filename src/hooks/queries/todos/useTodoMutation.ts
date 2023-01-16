import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../../../apis/todos/todosAPI";
import { TodoType } from "../../../types/todo/todo.type";
import { TodoKeys } from "../keys/TodoKeys";

export function useTodoCreate() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTodo, {
    onSuccess: ({ data }) => {
      const todo = data.data;

      console.log(data);

      queryClient.setQueryData<TodoType[]>(TodoKeys.Todos, (todos) => {
        if (!todos) {
          return [todo];
        }
        return [...todos, todo];
      });
    },
  });

  return mutation;
}
