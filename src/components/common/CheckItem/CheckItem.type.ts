export interface CheckItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  isDetail: boolean;
  REGISTER?: string;
}

export interface StyledCheckItem {
  isCompleted: boolean;
  isDetail: boolean;
}
