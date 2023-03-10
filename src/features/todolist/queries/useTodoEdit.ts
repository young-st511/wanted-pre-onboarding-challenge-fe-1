import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../../../features/todolist/api/todosAPI";
import { TodoType } from "../types/todo.type";
import { UpdateTodoRequest } from "../types/todosAPI.type";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodoEdit(
  todoId: string,
  setIsEdit: (state: boolean) => void
) {
  const queryClient = useQueryClient();
  const update = (data: UpdateTodoRequest) => updateTodo(todoId, data);
  const mutation = useMutation(update, {
    onSuccess: (todo) => {
      queryClient.setQueryData<TodoType[]>(TodoKeys.Todos, (oldTodos) => {
        if (!oldTodos) {
          return [todo];
        }
        const todos = [...oldTodos];
        const index = todos.findIndex((todo) => todo.id === todoId);
        todos[index] = todo;
        return todos;
      });
      setIsEdit(false);
    },
  });

  return mutation;
}
