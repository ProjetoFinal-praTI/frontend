import { Card } from "@/shared/ui/card";
import { DownArrowIcon } from "@/shared/ui/icons/down-arrowIcon";
import { UpArrowIcon } from "@/shared/ui/icons/up-arrow-icon";
import { WalletIcon } from "@/shared/ui/icons/wallet-icon";
import { Line } from "react-chartjs-2";
import "@/shared/config/chart-configs";
import { RecentTransactions } from "@/features/dashboard/ui/recent-transactions";
import { FinancialSummary } from "@/features/dashboard/ui/financial-summary";
import { EconomyGoals } from "@/features/dashboard/ui/economy-goals";
import { useState, useEffect } from "react";
import { Modal } from "@/shared/ui/modal";
import { Select } from "@/shared/ui/inputs/select";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { Button } from "@/shared/ui/buttons/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema de validação com Zod
const lancamentoSchema = z.object({
  type: z.enum(["receita", "despesa"], {
    message: "Selecione um tipo",
  }),
  description: z.string().min(3, "Descrição deve ter no mínimo 3 caracteres"),
  value: z.string().min(1, "Valor é obrigatório"),
  category: z.string().min(1, "Selecione uma categoria"),
  date: z.string().min(1, "Data é obrigatória"),
});

type LancamentoFormData = z.infer<typeof lancamentoSchema>;

// Função para carregar transações do localStorage
const carregarTransacoesDoLocalStorage = () => {
  const transacoesSalvas = localStorage.getItem("transactions");
  if (transacoesSalvas) {
    return JSON.parse(transacoesSalvas);
  }
  return [
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
};

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState(
    carregarTransacoesDoLocalStorage()
  );

  // Salva as transações no localStorage sempre que mudam
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LancamentoFormData>({
    resolver: zodResolver(lancamentoSchema),
  });

  const onSubmit = async (data: LancamentoFormData) => {
    setIsLoading(true);

    // Simula uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Formata a data de yyyy-mm-dd para dd/mm/yyyy
    const [year, month, day] = data.date.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    // Formata o valor
    const formattedValue =
      data.type === "receita"
        ? `+R$ ${parseFloat(data.value).toFixed(2)}`
        : `R$ ${parseFloat(data.value).toFixed(2)}`;

    // Cria a nova transação
    const newTransaction = {
      where: data.description,
      typeExpense:
        data.category.charAt(0).toUpperCase() + data.category.slice(1),
      date: formattedDate,
      price: formattedValue,
    };

    // Adiciona no início da lista
    setTransactions([newTransaction, ...transactions]);

    // Reseta o formulário e fecha o modal
    reset();
    setIsLoading(false);
    setOpenModal(false);
  };

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
          <RecentTransactions transactions={transactions} />
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
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
              register={register("type")}
              error={errors.type?.message}
              required
            />
            <CustomInput
              label="Descrição"
              placeholder="Ex: Salário, Aluguel, Supermercado"
              inputType="text"
              value=""
              variant="primary"
              register={register("description")}
              error={errors.description?.message}
            />
            <CustomInput
              label="Valor (R$)"
              placeholder="0,00"
              inputType="number"
              value=""
              variant="primary"
              register={register("value")}
              error={errors.value?.message}
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
              register={register("category")}
              error={errors.category?.message}
              required
            />
            <CustomInput
              label="Data"
              inputType="date"
              value=""
              variant="primary"
              register={register("date")}
              error={errors.date?.message}
            />
            <Button
              label="Adicionar"
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </form>
        </Modal>
      )}
    </>
  );
};
