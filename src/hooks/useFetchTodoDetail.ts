import { fetchTodoDetail } from '@/apis/todoApi';
import { useQuery } from 'react-query';

export const useFetchTodoDetail = (todoId: number) => {
  return useQuery(['todo', todoId], () => fetchTodoDetail(todoId), {
    enabled: !!todoId,
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });
};