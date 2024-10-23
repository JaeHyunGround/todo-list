import styled from 'styled-components';
import { StyledButtonProps } from './Button.type';
import { breakpoints } from '@/constants/breakpoints';

export const ButtonContainer = styled.section<StyledButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => (props.border ? '2px solid var(--slate-900)' : 'none')};
  box-shadow: ${(props) =>
    props.borderShadow ? '5px 5px 0px -2px var(--slate-900)' : 'none'};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > img {
    @media screen and (min-width: ${breakpoints.mobile + 1}px) {
      margin-right: ${(props) => (props.iconMargin ? '4px' : 'none')};
    }
  }
`;
