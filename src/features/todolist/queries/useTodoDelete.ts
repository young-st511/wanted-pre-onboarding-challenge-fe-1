import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as deleteTodoRequest } from "../../../features/todolist/api/todosAPI";
import { TodoType } from "../types/todo.type";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodoDelete(todoId: string) {
  const queryClient = useQueryClient();

  const deleteTodo = () => deleteTodoRequest(todoId);
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.setQueryData<TodoType[]>(TodoKeys.Todos, (todos) => {
        if (!todos) {
          return [];
        }

        const index = todos.findIndex((todo) => todo.id === todoId);
        todos.splice(index, 1);

        return [...todos];
      });
    },
  });

  return mutation;
}
