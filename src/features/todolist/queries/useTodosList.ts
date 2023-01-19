import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../features/todolist/api/todosAPI";
import { TodoKeys } from "./TodoQueryKeys";

export function useTodosList() {
  const query = useQuery(TodoKeys.Todos, getTodos);

  return query;
}
