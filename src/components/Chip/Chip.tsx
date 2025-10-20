// components/Chip/Chip.tsx
import React from 'react';
import type { ChipProps, ChipVariant } from '../../types/chip';

const Chip: React.FC<ChipProps> = ({
  text,
  variant = 'primary',
  textColor,
  backgroundColor,
  className = '',
  onClick,
  onClose,
  closable = false
}) => {
  // Mapeamento das variantes para classes Tailwind
  const variantClasses: Record<ChipVariant, { bg: string; text: string; border?: string }> = {
    primary: {
      bg: 'bg-blue-500',
      text: 'text-white'
    },
    secondary: {
      bg: 'bg-gray-500',
      text: 'text-white'
    },
    success: {
      bg: 'bg-green-500',
      text: 'text-white'
    },
    warning: {
      bg: 'bg-yellow-500',
      text: 'text-gray-800'
    },
    error: {
      bg: 'bg-red-500',
      text: 'text-white'
    },
    info: {
      bg: 'bg-cyan-500',
      text: 'text-white'
    },
    outline: {
      bg: 'bg-transparent',
      text: 'text-blue-500',
      border: 'border border-blue-500'
    },
    ghost: {
      bg: 'bg-gray-100',
      text: 'text-gray-600'
    }
  };

  const getVariantClass = () => {
    const baseClasses = variantClasses[variant];
    return `${baseClasses.bg} ${baseClasses.text} ${baseClasses.border || ''}`;
  };

  const customStyles = {
    ...(textColor && { color: textColor }),
    ...(backgroundColor && { backgroundColor })
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <div
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        transition-all duration-200 ease-in-out
        hover:opacity-90 active:scale-95
        ${getVariantClass()}
        ${className}
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
      `}
      style={customStyles}
      onClick={handleClick}
      role="button"
      tabIndex={onClick ? 0 : -1}
    >
      <span className="truncate max-w-xs">{text}</span>
      
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="ml-2 rounded-full hover:bg-black hover:bg-opacity-10 p-0.5 transition-colors"
          aria-label="Remover chip"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chip;