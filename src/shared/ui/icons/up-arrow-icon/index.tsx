interface UpArrowIconProps {
  className?: string;
  stroke?: string;
}

export const UpArrowIcon = (props: UpArrowIconProps) => {
  const { className, stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
      data-lov-id="src/pages/Dashboard.tsx:93:12"
      data-lov-name="ArrowUpRight"
      data-component-path="src/pages/Dashboard.tsx"
      data-component-line="93"
      data-component-file="Dashboard.tsx"
      data-component-name="ArrowUpRight"
      data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-success%22%7D"
    >
      <path d="M7 7h10v10"></path>
      <path d="M7 17 17 7"></path>
    </svg>
  );
};
