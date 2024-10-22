'use client';

import { TodoList } from '@/components';
import { ListContainer, PageContainer } from './page.style';
import SearchBar from '@/components/SearchBar/SearchBar';
import { FormProvider, useForm } from 'react-hook-form';
import { useFetchTodos } from '@/hooks/useFetchTodos';
import { useAddTodo } from '@/hooks/useAddTodo';
import useTodoStore from '@/stores/todoStore';
import { Spinner } from '@/components/common';

export default function Home() {
  const { isLoading } = useFetchTodos();
  const { mutate: addTodo } = useAddTodo();
  const todos = useTodoStore((state) => state.todos);

  const methods = useForm({ mode: 'onBlur' });
  const REGISTER = 'todo';
  const handleSubmit = () => {
    addTodo({ name: methods.getValues(REGISTER) });
    methods.reset({ todo: '' });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <PageContainer>
          <FormProvider {...methods}>
            <SearchBar handleSearchSubmit={handleSubmit} REGISTER={REGISTER} />
          </FormProvider>
          <ListContainer>
            <TodoList
              type="todo"
              data={todos.filter((todo) => todo.isCompleted === false)}
            />
            <TodoList
              type="done"
              data={todos.filter((todo) => todo.isCompleted === true)}
            />
          </ListContainer>
        </PageContainer>
      )}
    </>
  );
}
