'use client';

import Image from 'next/image';
import { CheckItem } from './CheckList.style';
import { CheckListProps } from './ChexkList.type';
import { usePatchTodo } from '@/hooks/usePatchTodo';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner/Spinner';

const CheckList = ({ id, name, isCompleted, isDetail }: CheckListProps) => {
  const { mutate: patchTodo } = usePatchTodo();
  const router = useRouter();
  return (
    <CheckItem isCompleted={isCompleted} isDetail={isDetail}>
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
    </CheckItem>
  );
};

export default CheckList;
