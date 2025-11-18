interface SearchconProps {
  className?: string;
}

export const SearchIcon = (props: SearchconProps) => {
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
        d="M11 19.4131C15.4183 19.4131 19 15.8314 19 11.4131C19 6.99481 15.4183 3.41309 11 3.41309C6.58172 3.41309 3 6.99481 3 11.4131C3 15.8314 6.58172 19.4131 11 19.4131Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="currentColor"
        d="M21 21.4131L16.65 17.0631"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
