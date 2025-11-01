import { Button } from "@/shared/ui/buttons/button";
import { Card } from "@/shared/ui/card";
import { ShieldIcon } from "@/shared/ui/icons/shield-icon";
import { TelephoneIcon } from "@/shared/ui/icons/telephone-icon";

export const Security = () => {
  return (
    <Card className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <ShieldIcon stroke="white" className="w-6 h-6" />
        <h1 className="text-foreground md:text-xl text-lg  font-semibold">
          Segurança
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-3 rounded-md text-sm font-medium bg-[#0a0d15] text-foreground p-3 w-full hover:cursor-pointer hover:bg-accent">
          <ShieldIcon stroke="white" className="w-4 h-4" />
          Alterar Senha
        </button>
        <button className="flex items-center gap-3 rounded-md text-sm font-medium bg-[#0a0d15] text-foreground p-3 w-full hover:cursor-pointer hover:bg-accent">
          <TelephoneIcon stroke="white" className="w-4 h-4" />
          Configurar autenticação 2FA
        </button>
        <div className="shrink-0 bg-border h-[1px] w-full" />
        <div className="flex gap-3 xl:items-center xl:flex-row flex-col xl:justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="font-medium md:text-base text-sm text-foreground">
              Sessões Ativas
            </h4>
            <p className="text-sm text-muted-foreground">
              Gerencie dispositivos conectados à sua conta
            </p>
          </div>
          <Button label="Ver todas" variant="outline" />
        </div>
      </div>
    </Card>
  );
};
