import styled from 'styled-components';
import { StyledImageUploaderProps } from './ImageUploader.type';

export const ImageUploaderContainer = styled.section<StyledImageUploaderProps>`
  width: 100%;
  height: 311px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--slate-50);
  height: 311px;
  border: ${(props) => (props.border ? '2px dashed var(--slate-300)' : 'none')};
  border-radius: 24px;

  & > :nth-child(3) {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImageContainer = styled.section`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;
