interface TrashIconProps {
  className?: string;
}

export const TrashIcon = (props: TrashIconProps) => {
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
        d="M3 6.41309H5H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.41309V4.41309C8 3.88265 8.21071 3.37395 8.58579 2.99887C8.96086 2.6238 9.46957 2.41309 10 2.41309H14C14.5304 2.41309 15.0391 2.6238 15.4142 2.99887C15.7893 3.37395 16 3.88265 16 4.41309V6.41309M19 6.41309V20.4131C19 20.9435 18.7893 21.4522 18.4142 21.8273C18.0391 22.2024 17.5304 22.4131 17 22.4131H7C6.46957 22.4131 5.96086 22.2024 5.58579 21.8273C5.21071 21.4522 5 20.9435 5 20.4131V6.41309H19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
