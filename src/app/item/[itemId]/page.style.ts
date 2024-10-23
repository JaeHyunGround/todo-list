import { breakpoints } from '@/constants/breakpoints';
import styled from 'styled-components';

export const DetailPageContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

export const DetailImageMemoSection = styled.section`
  width: 100%;
  display: flex;
  gap: 24px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const ButtonSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    justify-content: center;
  }
`;
