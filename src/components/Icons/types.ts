import type { ReactElement, SVGProps } from "react";

export type IconSize = "sm" | "md" | "lg" | "xl";

export type IconVariant =
  | "default"
  | "primary"
  | "secondary"
  | "destructive"
  | "success"
  | "warning";

export interface IconProps {
 
  icon: ReactElement<
    SVGProps<SVGSVGElement> & { "data-testid"?: string }
  >;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
}
