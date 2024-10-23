'use client';

import Image from 'next/image';
import { CheckItemContainer } from './CheckItem.style';
import { CheckItemProps } from './ChexkItem.type';
import { usePatchTodo } from '@/hooks/usePatchTodo';
import { useRouter } from 'next/navigation';

const CheckItem = ({ id, name, isCompleted, isDetail }: CheckItemProps) => {
  const { mutate: patchTodo } = usePatchTodo();
  const router = useRouter();
  return (
    <CheckItemContainer isCompleted={isCompleted} isDetail={isDetail}>
      <Image
        src={isCompleted ? '/icons/todoDone.png' : '/icons/todoDefault.png'}
        alt="check marker"
        width={32}
        height={32}
        onClick={() =>
          patchTodo({ id: id, data: { isCompleted: !isCompleted } })
        }
      />
      {isDetail ? (
        <input defaultValue={name} />
      ) : (
        <section onClick={() => router.push(`/item/${id}`)}>{name}</section>
      )}
    </CheckItemContainer>
  );
};

export default CheckItem;
