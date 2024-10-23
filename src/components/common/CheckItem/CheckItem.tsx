'use client';

import Image from 'next/image';
import { CheckItemContainer } from './CheckItem.style';
import { CheckItemProps } from './CheckItem.type';
import { usePatchTodo } from '@/hooks/usePatchTodo';
import { useFormContext } from 'react-hook-form';

const CheckItem = ({
  id,
  name,
  isCompleted,
  isDetail,
  REGISTER,
}: CheckItemProps) => {
  const { mutate: patchTodo } = usePatchTodo();
  const { register } = useFormContext();

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
      {isDetail && REGISTER ? (
        <input
          defaultValue={name}
          {...register(REGISTER, {
            required: true,
          })}
        />
      ) : (
        <section onClick={() => (window.location.href = `/item/${id}`)}>
          {name}
        </section>
      )}
    </CheckItemContainer>
  );
};

export default CheckItem;
