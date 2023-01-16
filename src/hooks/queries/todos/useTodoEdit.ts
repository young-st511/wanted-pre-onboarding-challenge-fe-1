import { useMutation, useQueryClient } from "react-query";
import { postTodo, updateTodo } from "../../../apis/todos/todosAPI";
import { UpdateTodoRequest } from "../../../apis/todos/todosAPI.type";
import { TodoType } from "../../../types/todo/todo.type";
import { TodoKeys } from "../keys/TodoKeys";

export function useTodoEdit(todoId: string) {
  const queryClient = useQueryClient();
  const update = (data: UpdateTodoRequest) => updateTodo(todoId, data);
  const mutation = useMutation(update, {
    onSuccess: (todo) => {
      queryClient.setQueryData<TodoType[]>(TodoKeys.Todos, (todos) => {
        if (!todos) {
          return [todo];
        }

        const index = todos.findIndex((todo) => todo.id === todoId);
        todos[index] = todo;

        return [...todos];
      });
    },
  });

  return mutation;
}
