interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  fontWeight?: "medium" | "semibold" | "bold";
  fontSize?: "base" | "sm" | "lg";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    onClick,
    variant = "primary",
    fontWeight = "medium",
    fontSize = "base",
    className,
    icon,
    disabled,
  } = props;

  const variants = {
    primary: "bg-primary text-white hover:opacity-80 disabled:bg-gray-500",
    secondary: "bg-secondary text-white hover:opacity-80 disabled:bg-gray-500",
    outline:
      "border border-[#e3e8f4] hover:bg-purple hover:text-white hover:border-purple disabled:bg-gray-500 disabled:text-white",
    gradient:
      "bg-gradient-to-r from-primary to-secondary text-white disabled:from-bg-gray-500",
  };

  const fontWeights = {
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const fontSizes = {
    base: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  };

  return (
    <button
      className={`${variants[variant]} ${fontWeights[fontWeight]} ${fontSizes[fontSize]}  disabled:cursor-not-allowed flex px-5 py-2 items-center justify-center gap-2 rounded-full transition duration-300 ease-in-out cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
};
