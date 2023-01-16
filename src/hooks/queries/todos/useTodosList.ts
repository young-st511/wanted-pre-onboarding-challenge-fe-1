import { useQuery } from "react-query";
import { getTodos } from "../../../apis/todos/todosAPI";
import { TodoKeys } from "../keys/TodoKeys";

export function useTodosList() {
  const query = useQuery(TodoKeys.Todos, getTodos);

  return query;
}
