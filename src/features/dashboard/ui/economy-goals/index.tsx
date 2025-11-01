import { Button } from "@/shared/ui/buttons/button";
import { Card } from "@/shared/ui/card";
import { ProgressBar } from "@/shared/ui/progress-bar";

export const EconomyGoals = () => {
  const goals = [
    {
      goal: "Carro Novo",
      when: "Meta para 30/11/2024",
      percentage: "65%",
      price: "R$ 6.500 / R$ 10.000",
    },
    {
      goal: "Reserva",
      when: "Meta para 31/07/2024",
      percentage: "55%",
      price: "R$ 8.300 / R$ 15.000",
    },
    {
      goal: "Notebook Novo",
      when: "Meta para 31/05/2024",
      percentage: "60%",
      price: "R$ 2.100 / R$ 3.500",
    },
  ];

  return (
    <Card className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="md:text-lg text-base font-semibold text-foreground">
          Metas de Economia
        </h1>
        <Button label="Gerenciar" />
      </div>
      <div className="flex flex-col gap-6">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-foreground text-sm">
                  {goal.goal}
                </h3>
                <p className="text-xs text-muted-foreground">{goal.when}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground text-end">
                  {goal.percentage}
                </p>
                <p className="text-xs text-muted-foreground text-end">
                  {goal.price}
                </p>
              </div>
            </div>
            <ProgressBar value={50} />
          </div>
        ))}
      </div>
    </Card>
  );
};
