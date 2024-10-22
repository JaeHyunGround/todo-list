import { GetTodoItem, PostTodoItem } from '@/types';
import { create } from 'zustand';

interface TodoStore {
  todos: GetTodoItem[];
  setTodos: (todos: GetTodoItem[]) => void;
  addTodo: (todo: PostTodoItem) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
}));

export default useTodoStore;
