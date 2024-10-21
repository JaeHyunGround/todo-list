import { GetTodoItem, PostTodoItem } from '@/types';
import { create } from 'zustand';

interface TodoStore {
  todos: GetTodoItem[];
  setTodos: (todos: GetTodoItem[]) => void;
  addTodos: (todo: PostTodoItem) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodos: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));

export default useTodoStore;
