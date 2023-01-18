import { APIDomains } from "../../../api/apiDomains";
import { TodoType } from "./todo.type";

export const TodosApiUrl = {
  /** GET: 모든 TODO 받아오기 */
  GET_TODOS: APIDomains.Todo,
  /** GET: 개별 TODO id로 받아오기 `/todos/{:id}` */
  GET_TODO_BY_ID: APIDomains.Todo + "/",
  /** POST: TODO 만들기 */
  POST_TODO: APIDomains.Todo,
  /** PUT: TODO 수정하기  `/todos/{:id}` */
  UPDATE_TODO: APIDomains.Todo + "/",
  /** DELETE: TODO 삭제하기  `/todos/{:id}` */
  DELETE_TODO: APIDomains.Todo + "/",
} as const;

type Todo = TodoType;

export interface GetTodosResponse {
  data: Todo[];
}

export interface GetTodoByIdResponse {
  data: Todo;
}

export interface PostTodoRequest {
  title: string;
  content: string;
}

export interface PostTodoResponse {
  data: Todo;
}

export interface UpdateTodoRequest {
  title: string;
  content: string;
}

export interface UpdateTodoResponse {
  data: Todo;
}

export interface DeleteTodoResponse {
  data: null;
}
