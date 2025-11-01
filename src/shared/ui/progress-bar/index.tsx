interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { value, max = 100, className } = props;
  return (
    <progress
      value={value}
      max={max}
      className={`custom-progress ${className} w-full h-2`}
    ></progress>
  );
};
