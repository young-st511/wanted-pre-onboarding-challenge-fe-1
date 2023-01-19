import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as deleteTodoRequest } from "../../../features/todolist/api/todosAPI";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodoDelete(todoId: string) {
  const queryClient = useQueryClient();

  const deleteTodo = () => deleteTodoRequest(todoId);
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(TodoKeys.Todos);
    },
  });

  return mutation;
}
