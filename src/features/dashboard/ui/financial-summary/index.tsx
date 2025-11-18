import { Card } from "@/shared/ui/card";
import { TrendingUpIcon } from "@/shared/ui/icons/trending-up-icon";

export const FinancialSummary = () => {
  const summarys = [
    {
      value: "R$ 1.423,70",
      text: "Saldo Mensal",
    },
    {
      value: "65.9%",
      text: "Taxa de Gastos",
    },
    {
      value: "3",
      text: "Metas Ativas",
    },
  ];

  const colors = ["text-success", "text-foreground", "text-primary"];

  return (
    <Card className="flex flex-col gap-5">
      <div className="flex items-center  gap-2">
        <TrendingUpIcon className="w-5 h-5" stroke="var(--color-primary)" />
        <h1 className="md:text-lg text-base font-semibold text-foreground">
          Resumo Financeiro
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:justify-around">
        {summarys.map((summary, index) => (
          <div key={index}>
            <div className="flex flex-col gap-1 items-center">
              <h1 className={`md:text-2xl text-lg font-bold ${colors[index]}`}>
                {summary.value}
              </h1>
              <p className="text-sm text-muted-foreground">{summary.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
