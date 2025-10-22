import React, { cloneElement } from "react";
import type { IconProps, IconSize, IconVariant } from "./types";

const sizeClasses: Record<IconSize, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const variantClasses: Record<IconVariant, string> = {
  default: "stroke-foreground fill-foreground",
  primary: "stroke-primary fill-primary",
  secondary: "stroke-secondary-foreground fill-secondary-foreground",
  destructive: "stroke-destructive fill-destructive",
  success: "stroke-success fill-success",
  warning: "stroke-warning fill-warning",
};

export const Icon: React.FC<IconProps> = ({
  icon,
  size = "md",
  variant = "default",
  className = "",
}) => {
  const combinedClasses = [
    "transition-colors",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .join(" ")
    .trim();

  return cloneElement(icon, {
    "data-testid": "icon-component",
    className: combinedClasses,
  });
};
