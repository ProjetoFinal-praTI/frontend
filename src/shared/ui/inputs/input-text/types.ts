import type { CSSProperties } from "react";

export interface CustomInputProps {
  value: string;

  label?: string;
  placeholder?: string;

  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  maxDate?: string;

  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
  register?: any;
  variant?: "primary" | "secondary";

  inputType?: "text" | "password" | "textarea" | "email" | "date" | "number";
  onChange?: (value: string) => void;
  error?: string;
}
