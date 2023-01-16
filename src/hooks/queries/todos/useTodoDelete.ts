import { useMutation, useQueryClient } from "react-query";
import { deleteTodo as deleteTodoRequest } from "../../../apis/todos/todosAPI";
import { TodoType } from "../../../types/todo/todo.type";
import { TodoKeys } from "../keys/TodoKeys";

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
