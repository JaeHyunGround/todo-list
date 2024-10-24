'use client';

import { breakpoints } from '@/constants/breakpoints';
import { Button } from '../common';
import { SearchBarContainer, SearchBarForm } from './SearchBar.style';
import { useViewport } from '@/hooks/useViewport';
import { SearchBarProps } from './SearchBar.type';
import { useFormContext } from 'react-hook-form';
import useTodoStore from '@/stores/todoStore';

const SearchBar = ({ handleSearchSubmit, REGISTER }: SearchBarProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useFormContext();
  const todos = useTodoStore((state) => state.todos);

  const { viewportWidth } = useViewport();
  const SearchSubmit = () => {
    if (!errors[REGISTER]?.message && getValues(REGISTER).trim().length !== 0) {
      handleSearchSubmit();
    } else {
      alert('할 일은 1글자 이상 입력 해주세요');
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSubmit(SearchSubmit)}>
        <input
          placeholder="할 일을 입력해주세요."
          {...register(REGISTER, {
            required: true,
            minLength: {
              value: 1,
              message: '최소 1글자 이상 입력해주세요',
            },
          })}
        />
      </SearchBarForm>
      <Button
        width={viewportWidth > breakpoints.mobile ? '168px' : '52px'}
        height="52px"
        text={viewportWidth > breakpoints.mobile ? '추가하기' : ''}
        color={todos.length === 0 ? 'var(--white)' : 'var(--slate-900)'}
        background={
          todos.length === 0 ? 'var(--violet-600)' : 'var(--slate-200)'
        }
        icon={todos.length === 0 ? 'plus-white' : 'plus-black'}
        buttonIconSize={16}
        borderRadius="50px"
        border={true}
        borderShadow={true}
        onClick={SearchSubmit}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
