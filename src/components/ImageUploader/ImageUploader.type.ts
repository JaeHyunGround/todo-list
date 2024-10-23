export interface ImageUploaderProps {
  imageUrl?: string | null;
  setImageUrl: (imageUrl: string | null) => void;
}

export interface StyledImageUploaderProps {
  border: boolean;
}
