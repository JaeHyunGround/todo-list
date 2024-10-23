import styled from 'styled-components';

export const MemoContainer = styled.section`
  width: 100%;
  height: 311px;
  position: relative;
  background-image: url('/images/memo.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 24px;
`;

export const MemoTitle = styled.section`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-24px, -50%);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-800);
  color: var(--amber-800);
`;

export const MemoArea = styled.textarea`
  width: 100%;
  height: 50%;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  border-radius: 24px;
  outline: none;
  resize: none;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-400);
  color: var(--slate-800);
  text-align: center;
  box-sizing: border-box;
`;
