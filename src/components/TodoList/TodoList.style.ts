import { breakpoints } from '@/constants/breakpoints';
import styled from 'styled-components';

export const TodoListContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TodoListEmpty = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 0 0;
  > img {
    margin-bottom: 24px;
  }
  > span {
    color: var(--slate-400);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-700);
    text-align: center;
    white-space: pre-line;
  }

  @media screen and (max-width: ${breakpoints.tablet}px) {
    margin: 32px 0 48px 0;
  }
`;
