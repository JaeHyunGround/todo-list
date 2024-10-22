import { breakpoints } from '@/constants/breakpoints';
import styled from 'styled-components';

export const PageContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

export const ListContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    gap: 40px;
  }
`;
