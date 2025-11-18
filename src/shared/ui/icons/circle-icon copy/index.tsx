interface CircleIconProps {
  className?: string;
}

export const CircleIcon = (props: CircleIconProps) => {
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
      data-lov-id="src/pages/Goals.tsx:138:12"
      data-lov-name="Target"
      data-component-path="src/pages/Goals.tsx"
      data-component-line="138"
      data-component-file="Goals.tsx"
      data-component-name="Target"
      data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
};
