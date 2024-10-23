// /items api로 받아오는 TodoItem의 타입
export interface GetTodoItem {
  isCompleted?: boolean;
  name?: string;
  id?: number;
}

export interface GetTodoItemDetail extends GetTodoItem {
  imageUrl?: string | null;
  memo?: string;
  tenantId?: string;
}

// /items api로 보내는 TodoItem의 타입
export interface PostTodoItem {
  name: string;
}

// /items api로 Patch 요청 보내는 TodoItem의 타입
export interface PatchTodoItem {
  name?: string;
  memo?: string | null;
  imageUrl?: string | null;
  isCompleted: boolean;
}
