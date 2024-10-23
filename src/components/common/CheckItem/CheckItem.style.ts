import styled from 'styled-components';
import { StyledCheckItem } from './CheckItem.type';

export const CheckItemContainer = styled.section<StyledCheckItem>`
  height: 50px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-400);
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isDetail ? 'center' : 'flex-start')};
  align-items: center;
  color: var(--slate-800);
  border: 2px solid var(--slate-900);
  border-radius: ${(props) => (props.isDetail ? '24px' : '27px')};
  background-color: ${(props) =>
    props.isCompleted ? 'var(--violet-100)' : 'var(--white)'};
  margin: 16px 0 8px 0;
  padding: 0 12px;
  cursor: ${(props) => (props.isDetail ? 'default' : 'pointer')};

  > img {
    margin-right: 16px;
  }

  > input {
    width: auto;
    text-align: center;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-700);
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
  > section {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-decoration: ${(props) =>
      props.isCompleted ? 'line-through' : 'none'};
  }
`;
