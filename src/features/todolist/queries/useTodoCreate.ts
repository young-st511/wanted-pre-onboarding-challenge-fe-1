import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../api/todosAPI";
import { TodoType } from "../types/todo.type";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodoCreate(reset: VoidFunction) {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTodo, {
    onSuccess: (todo) => {
      //! TEST
      console.log(todo);
      reset();

      queryClient.setQueryData<TodoType[]>(TodoKeys.Todos, (todos) => {
        if (!todos) {
          return [todo];
        }
        console.log("투두", todos);
        return [...todos, todo];
      });
    },
  });

  return mutation;
}
