// /items api로 받아오는 TodoItem의 타입
export interface GetTodoItem {
  isCompleted?: boolean;
  name: string;
  id?: number;
}

// /items api로 보내는 TodoItem의 타입
export interface PostTodoItem {
  name: string;
  isCompleted?: boolean;
}
