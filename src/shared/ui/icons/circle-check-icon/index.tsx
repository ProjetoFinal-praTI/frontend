interface CircleCheckIconProps {
  className?: string;
}

export const CircleCheckIcon = (props: CircleCheckIconProps) => {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
      data-lov-id="src/pages/Goals.tsx:180:12"
      data-lov-name="CheckCircle"
      data-component-path="src/pages/Goals.tsx"
      data-component-line="180"
      data-component-file="Goals.tsx"
      data-component-name="CheckCircle"
      data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
  );
};
