import { Button } from "@/shared/ui/buttons/button";
import "../../shared/config/chart-configs";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Card } from "@/shared/ui/card";

export const Relatorios = () => {
  const barData = {
    labels: ["Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Receitas",
        data: [4200, 4300, 4100, 4400, 4500, 4700],
        backgroundColor: "rgba(34,197,94,0.7)",
      },
      {
        label: "Despesas",
        data: [3100, 3200, 3000, 2900, 2800, 3200],
        backgroundColor: "rgba(239,68,68,0.7)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação"],
    datasets: [
      {
        data: [1200, 1800, 600, 900, 700],
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f59e42",
          "#ef4444",
          "#a3a3a3",
        ],
      },
    ],
  };

  const lineData = {
    labels: ["Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "Saldo",
        data: [1400, 1100, 1200, 1350, 1300, 1400],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const categories = [
    {
      color: "#3b82f6",
      name: "Alimentação",
    },
    {
      color: "#22c55e",
      name: "Transporte",
    },
    {
      color: "#f59e42",
      name: "Lazer",
    },
    {
      color: "#ef4444",
      name: "Saúde",
    },
    {
      color: "#a3a3a3",
      name: "Educação",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-3xl text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Visão geral das suas finanças
            </p>
          </div>
          <Button label="Exportar" />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <Card className="flex flex-col gap-2 font-semibold">
            <p className="text-sm font-medium text-foreground">Receita Total</p>
            <h4 className="text-2xl font-bold text-success">R$ 26.200,00</h4>
            <div className="text-xs text-muted-foreground font-semibold">
              Últimos 6 meses
            </div>
          </Card>
          <Card className="flex flex-col gap-2 font-semibold">
            <p className="text-sm font-medium text-foreground">
              Despesas Totais
            </p>
            <h4 className="text-2xl font-bold text-success">R$ 18.350,12</h4>
            <div className="text-xs text-muted-foreground font-semibold">
              Últimos 6 meses
            </div>
          </Card>
          <Card className="flex flex-col gap-2 font-semibold">
            <p className="text-sm font-medium text-foreground">
              Economia Total
            </p>
            <h4 className="text-2xl font-bold text-success">R$ 7.850,25</h4>
            <div className="text-xs text-muted-foreground font-semibold">
              Últimos 6 meses
            </div>
          </Card>
          <Card className="flex flex-col gap-2 font-semibold">
            <p className="text-sm font-medium text-foreground">
              Taxa de Economia
            </p>
            <h4 className="text-2xl font-bold text-success">29.9%</h4>
            <div className="text-xs text-muted-foreground font-semibold">
              Média mensal
            </div>
          </Card>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <Card className="flex flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">
              Evolução Mensal
            </h2>
            <Bar
              data={barData}
              options={{
                responsive: true,
                plugins: { legend: { labels: { color: "white" } } },
                scales: {
                  x: { ticks: { color: "white" } },
                  y: { ticks: { color: "white" } },
                },
              }}
            />
          </Card>
          <Card className="flex flex-col gap-6">
            <h2 className="text-white text-xl font-semibold">
              Gastos por Categoria
            </h2>
            <div className="flex items-center justify-center lg:h-64 h-48">
              <Doughnut
                data={doughnutData}
                options={{
                  plugins: { legend: { display: false } },
                  cutout: "70%",
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-foreground text-sm grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                {categories.map((category, index) => (
                  <span className="flex items-center gap-2" key={index}>
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ background: category.color }}
                    ></span>
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <Card className="flex flex-col gap-3 items-center">
          <h2 className="text-white text-xl font-semibold">
            Evolução do Saldo
          </h2>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: { legend: { labels: { color: "white" } } },
              scales: {
                x: { ticks: { color: "white" } },
                y: { ticks: { color: "white" } },
              },
            }}
            width={280}
            height={200}
          />
        </Card>
      </div>
    </>
  );
};
