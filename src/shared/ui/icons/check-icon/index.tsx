interface CheckIconProps {
  className?: string;
}

export const CheckIcon = (props: CheckIconProps) => {
  const { className } = props;

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
        stroke="currentColor"
        d="M20 6.41309L9 17.4131L4 12.4131"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
