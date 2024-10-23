export interface ButtonProps {
  width: string;
  height: string;
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: 'var(--slate-900)' | 'var(--white)';
  background: string;
  icon: 'check' | 'plus-gray' | 'plus-white' | 'x' | 'plus-black' | 'edit';
  buttonIconSize?: number;
  border?: boolean;
  borderRadius?: string;
  borderShadow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  iconMargin?: boolean;
}

export interface StyledButtonProps {
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  background: string;
  border?: boolean;
  borderRadius?: string;
  borderShadow?: boolean;
  iconMargin?: boolean;
}
