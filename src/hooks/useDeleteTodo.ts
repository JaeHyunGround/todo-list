import { deleteTodo } from '@/apis/todoApi';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todoId: string) => deleteTodo(todoId), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error('삭제 실패:', error);
    },
  });
};
