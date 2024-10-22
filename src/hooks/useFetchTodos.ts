import { fetchTodos } from '@/apis/todoApi';
import useTodoStore from '@/stores/todoStore';
import { useQuery } from 'react-query';

export const useFetchTodos = () => {
  const setTodos = useTodoStore((state) => state.setTodos);

  return useQuery('todos', fetchTodos, {
    onSuccess: (data) => {
      setTodos(data);
    },
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });
};
