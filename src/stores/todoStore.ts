import { TodoItem } from '@/types';
import { create } from 'zustand';

interface TodoStore {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  addTodos: (todo: TodoItem) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodos: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));

export default useTodoStore;
