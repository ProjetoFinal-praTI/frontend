import { LoadingIcon } from "../../icons/loading-icon";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "link" | "destructive";
  fontWeight?: "medium" | "semibold" | "bold";
  fontSize?: "base" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    onClick,
    variant = "primary",
    fontWeight = "medium",
    fontSize = "base",
    type = "button",
    className,
    icon,
    disabled,
    isLoading = false,
  } = props;

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-gray-500",
    secondary:
      "bg-background text-foreground hover:bg-background/90 disabled:bg-gray-500",
    outline:
      "border border-border text-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    destructive:
      "bg-success/90 text-destructive-foreground hover:bg-success/80",
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
      className={`${variants[variant]} ${fontWeights[fontWeight]} ${fontSizes[fontSize]} disabled:cursor-not-allowed flex px-5 py-2 items-center justify-center gap-2 rounded-lg transition duration-300 ease-in-out cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {isLoading ? (
        <LoadingIcon className="animate-spin h-5 w-5 text-white" />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </button>
  );
};
