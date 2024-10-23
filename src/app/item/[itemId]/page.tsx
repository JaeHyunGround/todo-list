'use client';

import { FormProvider, useForm } from 'react-hook-form';
import {
  ButtonSection,
  DetailImageMemoSection,
  DetailPageContainer,
} from './page.style';
import { Button, CheckItem, Spinner } from '@/components/common';
import { usePathname, useRouter } from 'next/navigation';
import { useFetchTodoDetail } from '@/hooks/useFetchTodoDetail';
import { ImageUploader, Memo } from '@/components';
import { useState } from 'react';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { usePatchTodo } from '@/hooks/usePatchTodo';

export default function Item() {
  const pathname = usePathname();
  const { data, isLoading: fetchLoading } = useFetchTodoDetail(
    Number(pathname.split('/')[2])
  );
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: patchTodo } = usePatchTodo();
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState<string | null>('');
  const methods = useForm({ mode: 'onChange' });
  const REGISTER = {
    detailTodo: 'detailTodo',
    detailTodoMemo: 'detailTodoMemo',
  };

  const handleUpdate = () => {
    if (methods.getValues(REGISTER.detailTodoMemo) && imageUrl) {
      patchTodo({
        id: Number(pathname.split('/')[2]),
        data: {
          name: methods.getValues(REGISTER.detailTodo),
          memo: methods.getValues(REGISTER.detailTodoMemo),
          imageUrl: imageUrl,
          isCompleted: data.isCompleted,
        },
      });
      alert('Todo 수정이 완료됐습니다.');
      router.push('/');
    } else {
      alert('변경된 내용이 없습니다.');
    }
  };

  const handleDelete = () => {
    deleteTodo(pathname.split('/')[2]);
    alert('Todo 삭제가 완료됐습니다.');
    router.push('/');
  };

  return (
    <>
      {fetchLoading ? (
        <Spinner />
      ) : (
        data && (
          <DetailPageContainer>
            <FormProvider {...methods}>
              <CheckItem
                id={Number(data.id)}
                name={data.name}
                isCompleted={data.isCompleted}
                isDetail={true}
                REGISTER={REGISTER.detailTodo}
              />
              <DetailImageMemoSection>
                <ImageUploader
                  imageUrl={data.imageUrl}
                  setImageUrl={setImageUrl}
                />
                <Memo
                  currentMemo={data.memo}
                  REGISTER={REGISTER.detailTodoMemo}
                />
              </DetailImageMemoSection>
            </FormProvider>
            <ButtonSection>
              <Button
                width="168px"
                height="56px"
                text="수정 완료"
                color="var(--slate-900)"
                background="var(--slate-200)"
                icon="check"
                border={true}
                onClick={handleUpdate}
              />
              <Button
                width="168px"
                height="56px"
                text="삭제하기"
                color="var(--white)"
                background="var(--rose-500)"
                icon="x"
                border={true}
                onClick={handleDelete}
              />
            </ButtonSection>
          </DetailPageContainer>
        )
      )}
    </>
  );
}
