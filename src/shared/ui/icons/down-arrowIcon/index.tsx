interface DownArrowIconProps {
  className?: string;
  stroke?: string;
}

export const DownArrowIcon = (props: DownArrowIconProps) => {
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
      data-lov-id="src/pages/Dashboard.tsx:110:12"
      data-lov-name="ArrowDownLeft"
      data-component-path="src/pages/Dashboard.tsx"
      data-component-line="110"
      data-component-file="Dashboard.tsx"
      data-component-name="ArrowDownLeft"
      data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-destructive%22%7D"
    >
      <path d="M17 7 7 17"></path>
      <path d="M17 17H7V7"></path>
    </svg>
  );
};
