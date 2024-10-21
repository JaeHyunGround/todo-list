import styled from 'styled-components';

export const SearchBarContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const SearchBarForm = styled.form`
  width: 80%;
  height: 56px;
  margin-right: 16px;

  > input {
    width: 100%;
    height: 100%;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-400);
    background-color: var(--slate-100);
    padding: 17px 24px;
    box-sizing: border-box;
    border: 2px solid var(--slate-900);
    box-shadow: 5px 5px 0px -2px var(--slate-900);
    outline: none;
    border-radius: 24px;
  }
`;
