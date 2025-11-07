import { Button } from "@/shared/ui/buttons/button";
import { Card } from "@/shared/ui/card";
import { ProgressBar } from "@/shared/ui/progress-bar";
import { PencilIcon } from "@/shared/ui/icons/pencil-icon";
import { TrashIcon } from "@/shared/ui/icons/trash-icon";
import { PlusIcon } from "@/shared/ui/icons/plus-icon";
import { CalendarIcon } from "@/shared/ui/icons/calendar-icon";
import { CheckIcon } from "@/shared/ui/icons/check-icon";
import { WalletIcon } from "@/shared/ui/icons/wallet-icon";
import { CircleIcon } from "@/shared/ui/icons/circle-icon copy";
import { CircleCheckIcon } from "@/shared/ui/icons/circle-check-icon";
import { Modal } from "@/shared/ui/modal";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { useState, useEffect } from "react";

interface Meta {
  id: number;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  deadline: string;
  progress: number;
  monthlyContribution: number;
  isCompleted?: boolean;
  completedDate?: string;
}

export const Metas = () => {
  // Função para carregar metas do localStorage
  const carregarMetasDoLocalStorage = (): Meta[] => {
    try {
      const metasSalvas = localStorage.getItem("metasAtivas");
      if (metasSalvas) {
        return JSON.parse(metasSalvas);
      }
    } catch (error) {
      console.error("Erro ao carregar metas do localStorage:", error);
    }

    // Retornar dados de exemplo se não houver nada salvo
    return [
      {
        id: 1,
        title: "Carro novo",
        description: "Economizar para compra de um carro",
        currentAmount: 24.4,
        targetAmount: 40000,
        deadline: "Prazo vencido",
        progress: 61,
        monthlyContribution: 500,
      },
      {
        id: 2,
        title: "Reserva",
        description: "Construir uma reserva equivalente a 6 meses de gastos",
        currentAmount: 12800,
        targetAmount: 15000,
        deadline: "Prazo vencido",
        progress: 85.3,
        monthlyContribution: 800,
      },
      {
        id: 3,
        title: "Curso de Investimentos",
        description: "MBA em finanças pessoais",
        currentAmount: 900,
        targetAmount: 2500,
        deadline: "Prazo vencido",
        progress: 36,
        monthlyContribution: 200,
      },
    ];
  };

  // Estado do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingMetaId, setEditingMetaId] = useState<number | null>(null);

  // Estado do modal de exclusão
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingMetaId, setDeletingMetaId] = useState<number | null>(null);

  // Estado do modal de contribuição
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);
  const [contributingMetaId, setContributingMetaId] = useState<number | null>(
    null
  );
  const [valorContribuicao, setValorContribuicao] = useState("");

  // Estados do formulário
  const [nomeMeta, setNomeMeta] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valorAlvo, setValorAlvo] = useState("");
  const [valorAtual, setValorAtual] = useState("");
  const [dataAlvo, setDataAlvo] = useState("");

  // Estado das metas ativas - inicializa do localStorage
  const [metasAtivas, setMetasAtivas] = useState<Meta[]>(
    carregarMetasDoLocalStorage
  );

  // useEffect para salvar metas no localStorage sempre que mudarem
  useEffect(() => {
    try {
      localStorage.setItem("metasAtivas", JSON.stringify(metasAtivas));
    } catch (error) {
      console.error("Erro ao salvar metas no localStorage:", error);
    }
  }, [metasAtivas]);

  const metasConcluidas: Meta[] = [
    {
      id: 4,
      title: "Novo Notebook",
      description: "MacBook Pro M3 para trabalho",
      currentAmount: 3500,
      targetAmount: 3500,
      deadline: "",
      progress: 100,
      monthlyContribution: 0,
      isCompleted: true,
      completedDate: "21/05/2024",
    },
  ];

  const totalEconomizado = metasAtivas.reduce(
    (sum, meta) => sum + meta.currentAmount,
    0
  );
  const metaTotal = metasAtivas.reduce(
    (sum, meta) => sum + meta.targetAmount,
    0
  );
  const progressoGeral = Math.round((totalEconomizado / metaTotal) * 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleEditMeta = (id: number) => {
    // Encontrar a meta a ser editada
    const metaParaEditar = metasAtivas.find((meta) => meta.id === id);

    if (!metaParaEditar) return;

    // Preencher o formulário com os dados da meta
    setNomeMeta(metaParaEditar.title);
    setDescricao(metaParaEditar.description);
    setValorAlvo(metaParaEditar.targetAmount.toString());
    setValorAtual(metaParaEditar.currentAmount.toString());

    // Converter a data formatada de volta para o formato YYYY-MM-DD
    const dataPartes = metaParaEditar.deadline.split("/");
    if (dataPartes.length === 3) {
      const dataFormatadaInput = `${dataPartes[2]}-${dataPartes[1]}-${dataPartes[0]}`;
      setDataAlvo(dataFormatadaInput);
    }

    // Ativar modo de edição
    setIsEditMode(true);
    setEditingMetaId(id);
    setIsModalOpen(true);
  };

  const handleDeleteMeta = (id: number) => {
    // Abrir modal de confirmação
    setDeletingMetaId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deletingMetaId === null) return;

    // Remover a meta do array
    setMetasAtivas(metasAtivas.filter((meta) => meta.id !== deletingMetaId));

    // Fechar modal e limpar estado
    setIsDeleteModalOpen(false);
    setDeletingMetaId(null);
  };

  const handleCancelDelete = () => {
    // Fechar modal sem excluir
    setIsDeleteModalOpen(false);
    setDeletingMetaId(null);
  };

  const handleAddContribution = (id: number) => {
    // Abrir modal de contribuição
    setContributingMetaId(id);
    setValorContribuicao("");
    setIsContributionModalOpen(true);
  };

  const handleConfirmContribution = () => {
    if (contributingMetaId === null || !valorContribuicao) return;

    const valorContribuicaoNum = parseFloat(valorContribuicao);
    if (isNaN(valorContribuicaoNum) || valorContribuicaoNum <= 0) {
      alert("Por favor, insira um valor válido");
      return;
    }

    // Atualizar a meta adicionando a contribuição
    setMetasAtivas(
      metasAtivas.map((meta) => {
        if (meta.id === contributingMetaId) {
          const novoValorAtual = meta.currentAmount + valorContribuicaoNum;
          const novoProgresso =
            meta.targetAmount > 0
              ? Math.round((novoValorAtual / meta.targetAmount) * 100)
              : 0;

          return {
            ...meta,
            currentAmount: novoValorAtual,
            progress: novoProgresso,
          };
        }
        return meta;
      })
    );

    // Fechar modal e limpar estado
    setIsContributionModalOpen(false);
    setContributingMetaId(null);
    setValorContribuicao("");
  };

  const handleCancelContribution = () => {
    // Fechar modal sem adicionar
    setIsContributionModalOpen(false);
    setContributingMetaId(null);
    setValorContribuicao("");
  };

  const handleNewMeta = () => {
    // Limpar formulário e abrir em modo criação
    setNomeMeta("");
    setDescricao("");
    setValorAlvo("");
    setValorAtual("");
    setDataAlvo("");
    setIsEditMode(false);
    setEditingMetaId(null);
    setIsModalOpen(true);
  };

  const handleUpdateMeta = () => {
    // Validar campos
    if (!nomeMeta || !valorAlvo || !dataAlvo) {
      alert("Por favor, preencha os campos obrigatórios");
      return;
    }

    if (editingMetaId === null) return;

    const valorAlvoNum = parseFloat(valorAlvo);
    const valorAtualNum = parseFloat(valorAtual) || 0;

    // Calcular progresso atualizado
    const progressoAtualizado =
      valorAlvoNum > 0 ? Math.round((valorAtualNum / valorAlvoNum) * 100) : 0;

    // Formatar data para exibição
    const dataFormatada = new Date(dataAlvo).toLocaleDateString("pt-BR");

    // Atualizar a meta no array
    setMetasAtivas(
      metasAtivas.map((meta) =>
        meta.id === editingMetaId
          ? {
              ...meta,
              title: nomeMeta,
              description: descricao,
              currentAmount: valorAtualNum,
              targetAmount: valorAlvoNum,
              deadline: dataFormatada,
              progress: progressoAtualizado,
            }
          : meta
      )
    );

    // Limpar formulário e fechar modal
    setNomeMeta("");
    setDescricao("");
    setValorAlvo("");
    setValorAtual("");
    setDataAlvo("");
    setIsEditMode(false);
    setEditingMetaId(null);
    setIsModalOpen(false);

    // Aqui você adicionaria a lógica para atualizar na API
  };

  const handleCreateMeta = () => {
    // Validar campos
    if (!nomeMeta || !valorAlvo || !dataAlvo) {
      alert("Por favor, preencha os campos obrigatórios");
      return;
    }

    const valorAlvoNum = parseFloat(valorAlvo);
    const valorAtualNum = parseFloat(valorAtual) || 0;

    // Calcular progresso inicial
    const progressoInicial =
      valorAlvoNum > 0 ? Math.round((valorAtualNum / valorAlvoNum) * 100) : 0;

    // Formatar data para exibição
    const dataFormatada = new Date(dataAlvo).toLocaleDateString("pt-BR");

    // Criar nova meta
    const novaMeta: Meta = {
      id: Date.now(),
      title: nomeMeta,
      description: descricao,
      currentAmount: valorAtualNum,
      targetAmount: valorAlvoNum,
      deadline: dataFormatada,
      progress: progressoInicial,
      monthlyContribution: 0, // Calcular depois baseado no prazo
    };

    // Adicionar a nova meta à lista de metas ativas
    setMetasAtivas([...metasAtivas, novaMeta]);

    // Limpar formulário e fechar modal
    setNomeMeta("");
    setDescricao("");
    setValorAlvo("");
    setValorAtual("");
    setDataAlvo("");
    setIsModalOpen(false);

    // Aqui você adicionaria a lógica para salvar na API
  };

  const handleSaveMeta = () => {
    if (isEditMode) {
      handleUpdateMeta();
    } else {
      handleCreateMeta();
    }
  };

  const handleCancelModal = () => {
    // Limpar formulário e fechar modal
    setNomeMeta("");
    setDescricao("");
    setValorAlvo("");
    setValorAtual("");
    setDataAlvo("");
    setIsEditMode(false);
    setEditingMetaId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
        <div className="flex flex-col gap-2">
          <h1 className="md:text-3xl text-2xl font-semibold text-foreground">
            Metas de Economia
          </h1>
          <p className="text-muted-foreground">
            Defina e acompanhe seus objetivos financeiros
          </p>
        </div>
        <Button label="Nova Meta" onClick={handleNewMeta} />
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Metas Ativas</span>
            <div className="p-2 rounded-full bg-primary/10">
              <CircleIcon className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="xl:text-3xl text-2xl font-bold text-foreground">
            {metasAtivas.length}
          </p>
        </Card>

        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Total Economizado
            </span>
            <div className="p-2 rounded-full bg-green-500/10">
              <WalletIcon className="w-4 h-4 text-green-500" stroke="#22c55e" />
            </div>
          </div>
          <p className="xl:text-3xl text-2xl font-bold text-green-500">
            {formatCurrency(totalEconomizado)}
          </p>
        </Card>

        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Meta Total</span>
            <div className="p-2 rounded-full bg-muted-foreground/10">
              <CircleIcon className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <p className="xl:text-3xl text-2xl font-bold text-foreground">
            {formatCurrency(metaTotal)}
          </p>
        </Card>

        <Card className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Progresso Geral
            </span>
            <div className="p-2 rounded-full bg-primary/10">
              <CircleCheckIcon className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="xl:text-3xl text-2xl font-bold text-primary">
            {progressoGeral}%
          </p>
        </Card>
      </div>

      {/* Metas Ativas */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <h2 className="text-xl font-semibold text-foreground">
            Metas Ativas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {metasAtivas.map((meta) => (
            <Card key={meta.id} className="flex flex-col gap-4">
              {/* Header do Card */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {meta.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {meta.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditMeta(meta.id)}
                    className="p-2 hover:bg-muted/90 rounded-md transition-colors cursor-pointer"
                    aria-label="Editar meta"
                  >
                    <PencilIcon className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => handleDeleteMeta(meta.id)}
                    className="p-2 hover:bg-destructive/20 rounded-md transition-colors cursor-pointer"
                    aria-label="Excluir meta"
                  >
                    <TrashIcon className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Barra de Progresso */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="font-semibold text-foreground">
                    {meta.progress}%
                  </span>
                </div>
                <ProgressBar value={meta.progress} className="h-2" />
              </div>

              {/* Valores */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Atual</span>
                  <span className="md:text-lg font-semibold text-foreground">
                    {formatCurrency(meta.currentAmount)}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-muted-foreground">Meta</span>
                  <span className="md:text-lg font-semibold text-foreground">
                    {formatCurrency(meta.targetAmount)}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex gap-2 text-sm text-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{meta.deadline}</span>
                </div>
                {/* <Button 
                onClick={() => handleAddContribution(meta.id)}
                variant="outline"
                label="Adicionar Contribuição"
                /> */}
                <button
                  onClick={() => handleAddContribution(meta.id)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors text-sm font-medium text-foreground cursor-pointer"
                >
                  <PlusIcon className="w-4 h-4" />
                  Adicionar
                </button>
              </div>

              {/* Meta Mensal */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Meta mensal</span>
                <span className="font-semibold text-foreground">
                  {formatCurrency(meta.monthlyContribution)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Metas Concluídas */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-green-500" />
          <h2 className="text-xl font-semibold text-foreground">
            Metas Concluídas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {metasConcluidas.map((meta) => (
            <Card key={meta.id} className="flex flex-col gap-4">
              {/* Header do Card */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-500/10 mt-1">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {meta.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {meta.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <ProgressBar value={100} className="h-2" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between pt-2 border-t border-border/40">
                <span className="text-sm text-green-500 font-semibold">
                  Meta Concluída
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Concluída em {meta.completedDate}</span>
                </div>
              </div>

              {/* Valor Final */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Valor alcançado</span>
                <span className="font-semibold text-green-500">
                  {formatCurrency(meta.currentAmount)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal de Nova Meta / Editar Meta */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">
            {isEditMode ? "Editar Meta" : "Nova meta de economia"}
          </h2>

          <div className="flex flex-col gap-4">
            {/* Nome da Meta */}
            <CustomInput
              label="Nome da Meta"
              placeholder="Ex: Comprar um carro"
              value={nomeMeta}
              onChange={setNomeMeta}
              required
            />

            {/* Descrição */}
            <CustomInput
              label="Descrição (opcional)"
              placeholder="Descreva sua meta..."
              value={descricao}
              onChange={setDescricao}
              inputType="textarea"
            />

            {/* Valor Alvo e Valor Atual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomInput
                label="Valor Alvo (R$)"
                placeholder="0,00"
                value={valorAlvo}
                onChange={setValorAlvo}
                inputType="number"
                required
              />

              <CustomInput
                label="Valor Atual (R$)"
                placeholder="0"
                value={valorAtual}
                onChange={setValorAtual}
                inputType="number"
              />
            </div>

            {/* Data Alvo */}
            <CustomInput
              label="Data Alvo"
              value={dataAlvo}
              onChange={setDataAlvo}
              inputType="date"
              required
            />
          </div>

          {/* Botões */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              onClick={handleCancelModal}
              className="px-6 py-2.5 rounded-md border border-border/40 text-foreground hover:bg-muted/20 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveMeta}
              className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
            >
              {isEditMode ? "Atualizar" : "Criar Meta"}
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal de Confirmação de Exclusão */}
      <Modal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">Excluir Meta</h2>

          <p className="text-muted-foreground">
            Tem certeza que deseja excluir esta meta? Esta ação não pode ser
            desfeita.
          </p>

          {/* Botões */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              onClick={handleCancelDelete}
              className="px-6 py-2.5 rounded-md border border-border/40 text-foreground hover:bg-muted/20 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirmDelete}
              className="px-6 py-2.5 rounded-md bg-destructive text-white hover:bg-destructive/90 transition-colors font-medium"
            >
              Excluir
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal de Adicionar Contribuição */}
      <Modal
        isModalOpen={isContributionModalOpen}
        setIsModalOpen={setIsContributionModalOpen}
      >
        {(() => {
          const meta = metasAtivas.find((m) => m.id === contributingMetaId);
          if (!meta) return null;

          const valorContribuicaoNum = parseFloat(valorContribuicao) || 0;
          const novoSaldo = meta.currentAmount + valorContribuicaoNum;

          return (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-foreground">
                Adicionar Fundos
              </h2>

              {/* Informações da Meta */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">Meta:</span>
                  <span className="text-lg font-semibold text-foreground">
                    {meta.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>
                    Atual: {formatCurrency(meta.currentAmount)} /{" "}
                    {formatCurrency(meta.targetAmount)}
                  </span>
                </div>
              </div>

              {/* Input de Valor */}
              <div className="flex flex-col gap-2">
                <CustomInput
                  label="Valor a Adicionar (R$)"
                  placeholder="0"
                  value={valorContribuicao}
                  onChange={setValorContribuicao}
                  inputType="number"
                  required
                />
              </div>

              {/* Novo Saldo */}
              {valorContribuicaoNum > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Novo saldo:</span>
                  <span className="text-lg font-semibold text-green-500">
                    {formatCurrency(novoSaldo)}
                  </span>
                </div>
              )}

              {/* Botões */}
              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  onClick={handleCancelContribution}
                  className="px-6 py-2.5 rounded-md border border-border/40 text-foreground hover:bg-muted/20 transition-colors font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmContribution}
                  className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                  disabled={
                    !valorContribuicao || parseFloat(valorContribuicao) <= 0
                  }
                >
                  Adicionar
                </button>
              </div>
            </div>
          );
        })()}
      </Modal>
    </div>
  );
};
