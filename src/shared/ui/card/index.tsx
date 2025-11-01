interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const { children, className, onClick } = props;
  return (
    <div
      className={`w-full border rounded-md border-border/40 shadow-md bg-card text-dark-green p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
