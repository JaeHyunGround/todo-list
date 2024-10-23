'use client';

import { useFormContext } from 'react-hook-form';
import { MemoArea, MemoContainer, MemoTitle } from './Memo.style';
import { MemoProps } from './Memo.type';

const Memo = ({ currentMemo, REGISTER }: MemoProps) => {
  const { register } = useFormContext();
  return (
    <MemoContainer>
      <MemoTitle>Memo</MemoTitle>
      <MemoArea
        defaultValue={currentMemo || ''}
        placeholder="메모를 입력하세요."
        {...register(REGISTER)}
      />
    </MemoContainer>
  );
};

export default Memo;
