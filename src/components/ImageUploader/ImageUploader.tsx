'use client';

import axios from 'axios';
import { useRef, useState } from 'react';
import {
  FileInput,
  ImageUploaderContainer,
  PreviewImage,
  PreviewImageContainer,
} from './ImageUploader.style';
import { Button } from '../common';
import Image from 'next/image';
import { ImageUploaderProps } from './ImageUploader.type';

const ImageUploader = ({ imageUrl, setImageUrl }: ImageUploaderProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl ?? null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isEnglishFileName = (fileName: string): boolean => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(fileName);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileName = file.name.split('.').slice(0, -1).join('.');

      // 파일 이름 검증
      if (!isEnglishFileName(fileName)) {
        alert('파일 이름은 영어만 포함될 수 있습니다.');
        return;
      }

      // 파일 크기 검증 (5MB 이하만 허용)
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기가 5MB를 초과했습니다.');
        return;
      }

      handleImageUpload();
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async () => {
    const file = fileInputRef.current?.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        setImageUrl(response.data.url);
        alert('사진이 정상적으로 업로드 됐습니다.');
      } catch {
        alert(
          '사진을 업로드 하는데 문제가 생겼습니다. 파일 크기 혹은 파일명이 영어로 이루어져있는지 확인해주세요.'
        );
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click(); // file input을 클릭
  };

  return (
    <ImageUploaderContainer border={previewUrl ? false : true}>
      <PreviewImageContainer>
        {previewUrl ? (
          <PreviewImage src={previewUrl} alt="업로드 이미지 미리보기" />
        ) : (
          <Image
            width={64}
            height={64}
            alt="빈 이미지"
            src={'/icons/img.png'}
          />
        )}
      </PreviewImageContainer>
      <FileInput
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
      />
      <Button
        width="64px"
        height="64px"
        background={previewUrl ? 'rgba(15, 23, 42, 0.5)' : 'var(--slate-200)'}
        icon={previewUrl ? 'edit' : 'plus-gray'}
        border={previewUrl ? true : false}
        borderShadow={false}
        iconMargin={false}
        onClick={triggerFileInput}
      />
    </ImageUploaderContainer>
  );
};

export default ImageUploader;
