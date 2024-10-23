import { PatchTodoItem, PostTodoItem } from '@/types';
import axios from 'axios';

export const fetchTodos = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`);
  return response.data;
};

export const fetchTodoDetail = async (todoId: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${todoId}`
  );
  return response.data;
};

export const addTodo = async (todo: PostTodoItem) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/items`,
    todo
  );
  return response.data;
};

export const patchTodo = async (id: number, todo: PatchTodoItem) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
    todo
  );
  return response.data;
};

export const deleteTodo = async (todoId: string) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${todoId}`
  );
  return response.data;
};
