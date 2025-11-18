import React from "react";
import { type CustomInputProps } from "./types";

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  label,
  placeholder,
  required,
  disabled = false,
  maxDate,
  readonly = false,
  size = "md",
  style,
  variant = "primary",
  inputType = "text",
  onChange,
  error,
  register,
}) => {
  const baseStyles =
    "bg-[#1f232e] w-full flex border border-border/10 rounded-xl focus:outline-none text-card-foreground";

  const sizeStyles = {
    sm: inputType === "textarea" ? "p-2 text-sm" : "h-10 px-2 py-1 text-sm",
    md: inputType === "textarea" ? "p-3 text-sm" : "h-10 px-3 py-2 text-sm",
    lg: inputType === "textarea" ? "p-4 text-base" : "h-12 px-4 py-3 text-base",
  };

  const variants = {
    primary: "border-border bg-[#1f232e] text-card-foreground",
    secondary: "border-border/50 bg-background text-card-foreground",
  };

  const getCombinedClasses = (baseClasses: string) => {
    let classes = `${sizeStyles[size]} ${baseClasses} ${variants[variant]}`;

    if (disabled) {
      classes += " bg-gray-100 text-gray-500 cursor-not-allowed";
    }
    return classes.trim();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const isTextarea = inputType === "textarea";

  const inputProps = register
    ? register
    : onChange
    ? { value, onChange: handleChange }
    : { defaultValue: value };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          className="text-sm font-medium text-accent-foreground"
          data-testid="CustomInput-component-label"
        >
          {label}
          {required && (
            <span
              className="text-red-500"
              data-testid="CustomInput-component-label-required"
            >
              {" "}
              *
            </span>
          )}
        </label>
      )}

      {isTextarea ? (
        <textarea
          {...inputProps}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          className={getCombinedClasses(`${baseStyles} resize-none`)}
          style={{
            ...style,
            padding: "8px 12px",
          }}
          data-testid="CustomInput-component-textarea"
        />
      ) : (
        <input
          type={inputType}
          {...inputProps}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          max={maxDate}
          readOnly={readonly}
          className={getCombinedClasses(baseStyles)}
          data-testid="CustomInput-component-inputfield"
          style={style}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
