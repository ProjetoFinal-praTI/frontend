import { Card } from "@/shared/ui/card";
import { BellIcon } from "@/shared/ui/icons/bell-Icon";

export const Preferences = () => {
  return (
    <Card className="flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <BellIcon stroke="white" className="w-5 h-5" />
        <h1 className="text-foreground md:text-xl text-lg font-semibold">
          Preferências
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="font-medium md:text-base text-sm text-foreground">
            Notificações por Email
          </h4>
          <p className="text-sm text-muted-foreground">
            Receber relatórios mensais e lembretes de metas
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-medium md:text-base text-sm text-foreground">
            Notificações Push
          </h4>
          <p className="text-sm text-muted-foreground">
            Alertas sobre gastos e progresso das metas
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-medium md:text-base text-sm text-foreground">
            Análise Automática
          </h4>
          <p className="text-sm text-muted-foreground">
            Gerar insights automáticos sobre seus gastos
          </p>
        </div>
      </div>
    </Card>
  );
};
