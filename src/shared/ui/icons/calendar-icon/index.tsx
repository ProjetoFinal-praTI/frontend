interface CalendarIconProps {
  className?: string;
}

export const CalendarIcon = (props: CalendarIconProps) => {
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
        d="M19 4.41309H5C3.89543 4.41309 3 5.30852 3 6.41309V20.4131C3 21.5177 3.89543 22.4131 5 22.4131H19C20.1046 22.4131 21 21.5177 21 20.4131V6.41309C21 5.30852 20.1046 4.41309 19 4.41309Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="currentColor"
        d="M16 2.41309V6.41309"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="currentColor"
        d="M8 2.41309V6.41309"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="currentColor"
        d="M3 10.4131H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
