interface TrendingUpIconProps {
  className?: string;
  stroke?: string;
}

export const TrendingUpIcon = (props: TrendingUpIconProps) => {
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
      data-lov-id="src/pages/Dashboard.tsx:127:12"
      data-lov-name="TrendingUp"
      data-component-path="src/pages/Dashboard.tsx"
      data-component-line="127"
      data-component-file="Dashboard.tsx"
      data-component-name="TrendingUp"
      data-component-content="%7B%22className%22%3A%22w-5%20h-5%20text-primary%22%7D"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  );
};
