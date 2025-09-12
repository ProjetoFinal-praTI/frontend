import React from "react";

export type ProgressBarProps = {
  /** Valor entre 0 e 100 */
  value: number;
  /** Mostra o rótulo com a porcentagem dentro da barra */
  showLabel?: boolean;
  /** Altura da barra */
  size?: "sm" | "md" | "lg";
  /** Cor da barra */
  color?: "primary" | "success" | "warning" | "danger";
  /** Classes extras opcionais */
  className?: string;
  /** Texto acessível opcional (lido por leitores de tela) */
  ariaLabel?: string;
};

const HEIGHTS: Record<NonNullable<ProgressBarProps["size"]>, string> = {
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

const COLORS: Record<NonNullable<ProgressBarProps["color"]>, string> = {
  primary: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-yellow-500",
  danger: "bg-red-600",
};

export default function ProgressBar({
  value,
  showLabel = false,
  size = "md",
  color = "primary",
  className = "",
  ariaLabel = "Progresso",
}: ProgressBarProps) {
  const safe = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative w-full ${HEIGHTS[size]} bg-gray-200/80 rounded-full overflow-hidden`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(safe)}
        aria-label={ariaLabel}
      >
        <div
          className={`${COLORS[color]} h-full rounded-full transition-[width] duration-300 ease-out`}
          style={{ width: `${safe}%` }}
        />

        {showLabel && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-medium text-gray-700 select-none">
            {Math.round(safe)}%
          </span>
        )}
      </div>
    </div>
  );
}


