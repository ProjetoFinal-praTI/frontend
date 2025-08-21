import type { JSX } from "react";

export interface BaseButtonProps {
  text: string;
  onClick?: () => void;
}

export const BaseButton = ({ onClick, text }: BaseButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} data-testid="Base-Button-Component">
      {text}
    </button>
  );
};
