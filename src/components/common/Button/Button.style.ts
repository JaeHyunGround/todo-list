import styled from 'styled-components';
import { StyledButtonProps } from './Button.type';

export const ButtonContainer = styled.section<StyledButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) =>
    props.borderShadow ? '2px solid var(--slate-900)' : 'none'};
  box-shadow: ${(props) =>
    props.borderShadow ? '5px 5px 0px -2px var(--slate-900)' : 'none'};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
