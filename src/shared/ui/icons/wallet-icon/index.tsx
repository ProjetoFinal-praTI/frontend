interface WalletIconProps {
  className?: string;
  stroke?: string;
}

export const WalletIcon = (props: WalletIconProps) => {
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
      data-lov-id="src/pages/Dashboard.tsx:75:12"
      data-lov-name="Wallet"
      data-component-path="src/pages/Dashboard.tsx"
      data-component-line="75"
      data-component-file="Dashboard.tsx"
      data-component-name="Wallet"
      data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
    </svg>
  );
};
