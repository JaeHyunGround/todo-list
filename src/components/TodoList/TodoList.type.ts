import { GetTodoItem } from '@/types';

export interface TodoListProps {
  type: 'todo' | 'done';
  data?: GetTodoItem[];
}
