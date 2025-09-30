import { Button } from "@/components/Buttons/Button";
import { Menu } from "@/components/Menu";
import { Preferences } from "@/features/profile/ui/Preferences";
import { ProfileForm } from "@/features/profile/ui/ProfileForm";
import { Security } from "@/features/profile/ui/Security";

export const MeuPerfil = () => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Menu />
      </div>
      <div className="flex flex-col gap-8 px-6 py-4 lg:px-34 md:px-20 2xl:px-40">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-2xl text-xl text-foreground font-semibold">
              Meu Perfil
            </h1>
            <p className="text-muted-foreground md:text-base text-md">
              Gerencie suas informações pessoais e configurações
            </p>
          </div>
          <Button label="Editar Perfil" className="hidden md:block" />
        </div>
        <ProfileForm />
        <div className="flex gap-8 flex-col lg:flex-row">
          <Preferences />
          <Security />
        </div>
      </div>
    </div>
  );
};
