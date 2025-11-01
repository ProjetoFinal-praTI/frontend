interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon = (props: CloseIconProps) => {
  const { className, onClick } = props;

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
        d="M18 6.41309L6 18.4131"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.41309L18 18.4131"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onClick}
      />
    </svg>
  );
};
