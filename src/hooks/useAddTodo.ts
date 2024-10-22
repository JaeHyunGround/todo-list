import useTodoStore from '@/stores/todoStore';
import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from '@/apis/todoApi';

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const addTodoToStore = useTodoStore((state) => state.addTodo);

  return useMutation(addTodo, {
    onSuccess: (newTodo) => {
      addTodoToStore(newTodo);
      queryClient.invalidateQueries('todos');
    },
  });
};
