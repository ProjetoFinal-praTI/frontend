import React from "react";
import { type CustomInputProps } from "./types";

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  label,
  placeholder,
  required,
  disabled = false,
  readonly = false,
  size = "md",
  style,
  inputType = "text",
  onChange,
}) => {
  const baseStyles =
    "w-full flex transition-colors duration-200 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent";

  const sizeStyles = {
    sm: inputType === "textarea" ? "p-2 text-sm" : "h-10 px-2 py-1 text-sm",
    md: inputType === "textarea" ? "p-3 text-sm" : "h-10 px-3 py-2 text-sm",
    lg: inputType === "textarea" ? "p-4 text-base" : "h-12 px-4 py-3 text-base",
  };

  const getCombinedClasses = (baseClasses: string) => {
    let classes = `${sizeStyles[size]} ${baseClasses}`;

    if (disabled || readonly) {
      classes += " bg-gray-100 text-gray-500 cursor-not-allowed";
    } else {
      classes += " hover:border-blue-400";
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

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          className="text-sm font-semibold text-gray-700"
          data-testid="CustomInput-component-label"
        >
          {label}
          {required && (
            <span
              className="text-red-500"
              data-testid="CustomInput-component-label-required"
            >
              *
            </span>
          )}
        </label>
      )}

      {isTextarea ? (
        <textarea
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleChange}
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
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleChange}
          className={getCombinedClasses(baseStyles)}
          style={{
            ...style,
            padding: "8px 12px",
          }}
          data-testid="CustomInput-component-inputfield"
        />
      )}
    </div>
  );
};
