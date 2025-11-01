import { Button } from "@/shared/ui/buttons/button";
import { Card } from "@/shared/ui/card";
import { CalendarIcon } from "@/shared/ui/icons/calendar-icon";
import { CheckIcon } from "@/shared/ui/icons/check-icon";
import { DownArrowIcon } from "@/shared/ui/icons/down-arrowIcon";
import { PencilIcon } from "@/shared/ui/icons/pencil-icon";
import { TrashIcon } from "@/shared/ui/icons/trash-icon";
import { UpArrowIcon } from "@/shared/ui/icons/up-arrow-icon";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { Select } from "@/shared/ui/inputs/select";
import { Menu } from "@/shared/ui/menu";
import { Modal } from "@/shared/ui/modal";
import { useState } from "react";

export const Lancamento = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const [searchPatients, setSearchPatients] = useState("");

  const cards = [
    {
      text: "Total de Receitas",
      icon: <UpArrowIcon className="w-4 h-4" stroke="var(--color-success)" />,
      value: "R$ 4.450,00",
    },
    {
      text: "Total de Despesas",
      icon: (
        <DownArrowIcon className="w-4 h-4" stroke="var(--color-destructive)" />
      ),
      value: "R$ 462,30",
    },
    {
      text: "Saldo",
      icon: <UpArrowIcon className="w-4 h-4" stroke="var(--color-success)" />,
      value: "R$ 3.983,70",
    },
  ];

  const colors = ["text-success", "text-foreground", "text-success"];

  const options = [
    { value: "todas", label: "Todas" },
    { value: "alimentacao", label: "Alimentação" },
    { value: "transporte", label: "Transporte" },
    { value: "saude", label: "Saúde" },
    { value: "lazer", label: "Lazer" },
    { value: "receita", label: "Receita" },
    { value: "investimento", label: "Investimento" },
  ];

  const transacoes = [
    {
      icon: (
        <DownArrowIcon className="w-6 h-6" stroke="var(--color-foreground)" />
      ),
      name: "Supermercado São João",
      category: "Alimentação",
      date: "10/09/2024",
      price: "R$ 89,50",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
    {
      icon: <UpArrowIcon className="w-6 h-6" stroke="var(--color-success)" />,
      name: "Salário",
      category: "Receita",
      date: "10/09/2024",
      price: "+R$ 3.500,00",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
    {
      icon: (
        <DownArrowIcon className="w-6 h-6" stroke="var(--color-foreground)" />
      ),
      name: "Uber",
      category: "Transporte",
      date: "10/09/2024",
      price: "R$ 18,90",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
    {
      icon: (
        <DownArrowIcon className="w-6 h-6" stroke="var(--color-foreground)" />
      ),
      name: "Netflix",
      category: "Lazer",
      date: "10/09/2024",
      price: "R$ 29,90",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
    {
      icon: <UpArrowIcon className="w-6 h-6" stroke="var(--color-success)" />,
      name: "Freelance Design",
      category: "Receita",
      date: "10/09/2024",
      price: "+R$ 800,00",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
    {
      icon: <UpArrowIcon className="w-6 h-6" stroke="var(--color-success)" />,
      name: "Dividendos",
      category: "Investimento",
      date: "10/09/2024",
      price: "+R$ 150,00",
      iconPencil: <PencilIcon className="w-4 h-4 text-foreground" />,
      iconTrash: <TrashIcon className="w-4 h-4 text-foreground" />,
    },
  ];

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="flex flex-col gap-8 px-8 py-10 md:py-14 lg:px-20 md:px-20">
        <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-3xl text-2xl font-semibold text-foreground">
              Lançamentos
            </h1>
            <p className="text-muted-foreground">
              Gerencie suas receitas e despesas
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
                <h4
                  className={`text-2xl font-bold text-foreground ${colors[index]}`}
                >
                  {card.value}
                </h4>
              </div>
            </Card>
          ))}
        </div>
        <Card className="w-full relative flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground">Filtros</h3>
          <div className="flex lg:flex-row flex-col gap-4 w-full">
            <input
              type="text"
              className=" w-full border border-border/10 rounded-xl bg-input px-3 py-2 outline-0 text-foreground"
              value={searchPatients}
              onChange={(e) => setSearchPatients(e.target.value)}
              placeholder="Pesquisar transações..."
            />
            {/* <SearchIcon className="w-5 h-5 absolute top-3 bottom-0 right-3 stroke-foreground" /> */}
            <Select label="" options={options} id="select-category" />
          </div>
        </Card>
        <Card className="w-full relative flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-foreground">Transações</h3>
          <div className="flex flex-col gap-4">
            {transacoes.map((transacoes, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-surface/50 border border-border/30"
              >
                <div className="flex items-center gap-4">
                  {transacoes.icon}
                  <div className="flex flex-col gap-2">
                    <h4 className="font-medium text-foreground">
                      {transacoes.name}
                    </h4>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 rounded-full px-2.5 py-0.5 w-fit border border-border/40">
                        <CheckIcon className="w-4 h-4 text-foreground" />
                        <p className="font-semibold text-foreground">
                          {transacoes.category}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full px-2.5 py-0.5 w-fit border border-border/40">
                        <CalendarIcon className="w-4 h-4 text-foreground" />
                        <p className="font-semibold text-foreground">
                          {transacoes.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-lg text-foreground">
                      {transacoes.price}
                    </p>
                    {transacoes.iconPencil}
                    {transacoes.iconTrash}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
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
              variant="secondary"
            />
            <CustomInput
              label="Valor (R$)"
              placeholder="0,00"
              inputType="number"
              value=""
              variant="secondary"
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
              variant="secondary"
            />
            <Button label="Adicionar" onClick={() => {}} />
          </div>
        </Modal>
      )}
    </div>
  );
};
