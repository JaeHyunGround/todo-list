import { breakpoints } from '@/constants/breakpoints';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--white);
  padding: 10px 24px;
  box-sizing: border-box;

  @media screen and (max-width: ${breakpoints.mobile}px) {
    padding: 10px 16px;
  }
`;

export const HeaderContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  > img {
    cursor: pointer;
  }
`;
