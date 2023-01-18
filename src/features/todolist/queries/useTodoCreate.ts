import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../api/todosAPI";
import { TodoType } from "../types/todo.type";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodoCreate() {
  const queryClient = useQueryClient();
  const mutation = useMutation(postTodo, {
    onSuccess: (todo) => {
      console.log(todo);

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
