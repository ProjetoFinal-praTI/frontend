import { Button } from "@/shared/ui/buttons/button";
import { Card } from "@/shared/ui/card";

export const RecentTransactions = () => {
  const transactions = [
    {
      where: "Supermercado São João",
      typeExpense: "Alimentação",
      date: "14/01/2024",
      price: "R$ 89,50",
    },
    {
      where: "Salário",
      typeExpense: "Receita",
      date: "14/01/2024",
      price: "+R$ 3.500,00",
    },
    {
      where: "Uber",
      typeExpense: "Transporte",
      date: "13/01/2024",
      price: "R$ 18,90",
    },
    {
      where: "Netflix",
      typeExpense: "Lazer",
      date: "12/01/2024",
      price: "R$ 29,90",
    },
    {
      where: "Freelance Design",
      typeExpense: "Receita",
      date: "11/01/2024",
      price: "+R$ 800,00",
    },
  ];

  const getPriceColor = (price: string) => {
    if (price.startsWith("+")) return "text-success";
    if (price.startsWith("-")) return "text-destructive";
    return "text-foreground";
  };

  return (
    <Card className="flex flex-col gap-5">
      <h1 className="md:text-lg text-base font-semibold text-foreground">
        Transações Recentes
      </h1>
      <div className="flex flex-col gap-5">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="rounded-lg bg-surface/80 border border-border/50 py-3 px-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h4 className="font-medium text-sm text-foreground">
                  {transaction.where}
                </h4>
                <div className="flex items-center gap-3">
                  <p className="text-xs text-muted-foreground">
                    {transaction.typeExpense}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <p
                className={`font-semibold text-sm ${getPriceColor(
                  transaction.price
                )}`}
              >
                {transaction.price}
              </p>
            </div>
          </div>
        ))}
        <Button label="Ver todos" />
      </div>
    </Card>
  );
};
