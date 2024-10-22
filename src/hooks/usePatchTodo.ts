import { PatchTodoItem } from '@/types';
import { patchTodo } from '@/apis/todoApi';
import { useMutation, useQueryClient } from 'react-query';

export const usePatchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, data }: { id: number; data: PatchTodoItem }) => patchTodo(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
};
