interface UserIconProps {
  className?: string;
  stroke?: string;
}

export const UserIcon = (props: UserIconProps) => {
  const { className, stroke } = props;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21.4131V19.4131C20 18.3522 19.5786 17.3348 18.8284 16.5847C18.0783 15.8345 17.0609 15.4131 16 15.4131H8C6.93913 15.4131 5.92172 15.8345 5.17157 16.5847C4.42143 17.3348 4 18.3522 4 19.4131V21.4131"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.4131C14.2091 11.4131 16 9.62222 16 7.41309C16 5.20395 14.2091 3.41309 12 3.41309C9.79086 3.41309 8 5.20395 8 7.41309C8 9.62222 9.79086 11.4131 12 11.4131Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
