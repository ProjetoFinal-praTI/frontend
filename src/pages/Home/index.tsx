import { Card } from "@/shared/ui/card";
import { DownArrowIcon } from "@/shared/ui/icons/down-arrowIcon";
import { UpArrowIcon } from "@/shared/ui/icons/up-arrow-icon";
import { WalletIcon } from "@/shared/ui/icons/wallet-icon";
import { Line } from "react-chartjs-2";
import "@/shared/config/chart-configs";
import { RecentTransactions } from "@/features/dashboard/ui/recent-transactions";
import { FinancialSummary } from "@/features/dashboard/ui/financial-summary";
import { EconomyGoals } from "@/features/dashboard/ui/economy-goals";
import { useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { Select } from "@/shared/ui/inputs/select";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { Button } from "@/shared/ui/buttons/button";
// import { EconomyGoals } from "@/features/Dashboard/ui/EconomyGoals";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const cards = [
    {
      text: "Saldo Atual",
      icon: <WalletIcon className="w-4 h-4" stroke="var(--color-primary)" />,
      value: "R$ 8.420,75",
      month: "+12.5% em relação ao mês passado",
    },
    {
      text: "Receitas do Mês",
      icon: <UpArrowIcon className="w-4 h-4" stroke="var(--color-success)" />,
      value: "R$ 4.300,00",
      month: "Janeiro 2024",
    },
    {
      text: "Despesas do Mês",
      icon: (
        <DownArrowIcon className="w-4 h-4" stroke="var(--color-destructive)" />
      ),
      value: "R$ 2.876,30",
      month: "Janeiro 2024",
    },
  ];

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
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-3xl text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Visão geral das suas finanças
            </p>
          </div>
          <Button label="Novo Lançamento" onClick={() => setOpenModal(true)} />
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          {cards.map((card, index) => (
            <Card key={index}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">
                    {card.text}
                  </p>
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground">
                  {card.value}
                </h4>
                <p className="text-xs text-success">{card.month}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <RecentTransactions />
          <EconomyGoals />
        </div>
        <FinancialSummary />
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
          />
        </Card>
      </div>
      {openModal && (
        <Modal
          isModalOpen={openModal}
          setIsModalOpen={() => setOpenModal(false)}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground">
              Novo Lançamento
            </h2>
            <Select
              label="Tipo"
              id="type"
              options={[
                { value: "receita", label: "Receita" },
                { value: "despesa", label: "Despesa" },
              ]}
            />
            <CustomInput
              label="Descrição"
              placeholder="Ex: Salário, Aluguel, Supermercado"
              inputType="text"
              value=""
              variant="primary"
            />
            <CustomInput
              label="Valor (R$)"
              placeholder="0,00"
              inputType="number"
              value=""
              variant="primary"
            />
            <Select
              label="Categoria"
              id="category"
              options={[
                { value: "alimentacao", label: "Alimentação" },
                { value: "transporte", label: "Transporte" },
                { value: "lazer", label: "Lazer" },
                { value: "saude", label: "Saúde" },
                { value: "educacao", label: "Educação" },
                { value: "casa", label: "Casa" },
                { value: "investimentos", label: "Investimentos" },
                { value: "outros", label: "Outros" },
              ]}
            />
            <CustomInput
              label="Data"
              inputType="date"
              value=""
              variant="primary"
            />
            <Button label="Adicionar" onClick={() => {}} />
          </div>
        </Modal>
      )}
    </>
  );
};
