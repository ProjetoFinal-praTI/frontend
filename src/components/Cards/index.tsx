interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className } = props;

  const cardClasses = `bg-white rounded-lg shadow-sm p-6 ${className || ""}`;

  return <div className={cardClasses}>{children}</div>;
};
