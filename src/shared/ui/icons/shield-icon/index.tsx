interface ShieldIconProps {
  className?: string;
  stroke?: string;
}

export const ShieldIcon = (props: ShieldIconProps) => {
  const { className, stroke } = props;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22.4131C12 22.4131 20 18.4131 20 12.4131V5.41309L12 2.41309L4 5.41309V12.4131C4 18.4131 12 22.4131 12 22.4131Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
