import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../apis/requests";
import * as T from "./todosAPI.type";

export async function getTodos() {
  const response = await getRequest<T.GetTodosResponse>(
    T.TodosApiUrl.GET_TODOS
  );

  return response;
}
export async function getTodoById(todoId: string) {
  const response = await getRequest<T.GetTodoByIdResponse>(
    T.TodosApiUrl.GET_TODO_BY_ID + todoId
  );

  return response;
}

export async function postTodo(data: T.PostTodoRequest) {
  const response = await postRequest<T.PostTodoResponse, T.PostTodoRequest>(
    T.TodosApiUrl.POST_TODO,
    data
  );

  return response;
}

export async function updateTodo(todoId: string, data: T.UpdateTodoRequest) {
  const response = await putRequest<T.UpdateTodoResponse, T.UpdateTodoRequest>(
    T.TodosApiUrl.UPDATE_TODO + todoId,
    data
  );

  return response;
}

export async function deleteTodo(todoId: string) {
  const response = await deleteRequest<T.DeleteTodoResponse>(
    T.TodosApiUrl.DELETE_TODO + todoId
  );

  return response;
}
