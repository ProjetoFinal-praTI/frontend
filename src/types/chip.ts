// types/chip.ts
export type ChipVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline'
  | 'ghost';

export interface ChipProps {
  text: string;
  variant?: ChipVariant;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
  onClick?: () => void;
  onClose?: () => void;
  closable?: boolean;
}