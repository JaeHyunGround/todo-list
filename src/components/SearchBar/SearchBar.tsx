'use client';

import { breakpoints } from '@/constants/breakpoints';
import { Button } from '../common';
import { SearchBarContainer, SearchBarForm } from './SearchBar.style';
import { useViewport } from '@/hooks/useViewport';
import { SearchBarProps } from './SearchBar.type';
import { useFormContext } from 'react-hook-form';

const SearchBar = ({ handleSearchSubmit, REGISTER }: SearchBarProps) => {
  const { register, handleSubmit } = useFormContext();

  const { viewportWidth } = useViewport();

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSubmit(handleSearchSubmit)}>
        <input placeholder="할 일을 입력해주세요." {...register(REGISTER)} />
      </SearchBarForm>
      <Button
        width={viewportWidth > breakpoints.mobile ? '168px' : '52px'}
        height="52px"
        text={viewportWidth > breakpoints.mobile ? '추가하기' : ''}
        color="var(--white)"
        background="var(--violet-600)"
        icon="plus-white"
        buttonIconSize={16}
        borderRadius="50px"
        borderShadow={true}
        onClick={handleSearchSubmit}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
