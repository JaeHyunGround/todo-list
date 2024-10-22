export interface ButtonProps {
  width: string;
  height: string;
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: 'var(--slate-900)' | 'var(--white)';
  background: string;
  icon: 'check' | 'plus-gray' | 'plus-white' | 'x' | 'plus-black';
  buttonIconSize?: number;
  borderRadius?: string;
  borderShadow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface StyledButtonProps {
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  background: string;
  borderRadius?: string;
  borderShadow?: boolean;
}
