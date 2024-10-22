'use client';

import Image from 'next/image';
import { TodoListContainer, TodoListEmpty } from './TodoList.style';
import { TodoListProps } from './TodoList.type';
import { useViewport } from '@/hooks/useViewport';
import { breakpoints } from '@/constants/breakpoints';
import { CheckList } from '../common';

const TodoList = ({ type, data }: TodoListProps) => {
  const { viewportWidth } = useViewport();

  return (
    <TodoListContainer>
      <Image
        src={type === 'todo' ? '/images/todo.png' : '/images/done.png'}
        alt="icon"
        width={101}
        height={36}
      />
      {data && data.length === 0 ? (
        <TodoListEmpty>
          <Image
            src={
              type === 'todo'
                ? '/images/todoEmpty.png'
                : '/images/doneEmpty.png'
            }
            alt="empty image"
            width={viewportWidth > breakpoints.mobile ? 240 : 120}
            height={viewportWidth > breakpoints.mobile ? 240 : 120}
          />
          <span>
            {type === 'todo'
              ? `할 일이 없어요. \n TODO를 새롭게 추가해주세요!`
              : `아직 다 한 일이 없어요. \n 해야 할 일을 체크해보세요!`}
          </span>
        </TodoListEmpty>
      ) : (
        data?.map((todo) => (
          <CheckList
            key={todo.id}
            id={todo.id!}
            name={todo.name}
            isCompleted={todo.isCompleted!}
            isDetail={false}
          />
        ))
      )}
    </TodoListContainer>
  );
};

export default TodoList;
