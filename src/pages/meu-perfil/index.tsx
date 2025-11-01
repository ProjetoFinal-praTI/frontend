import { Preferences } from "@/features/profile/ui/preferences";
import { ProfileForm } from "@/features/profile/ui/profile-form";
import { Security } from "@/features/profile/ui/security";
import { Button } from "@/shared/ui/buttons/button";

export const MeuPerfil = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-2xl text-xl text-foreground font-semibold">
              Meu Perfil
            </h1>
            <p className="text-muted-foreground md:text-base text-md">
              Gerencie suas informações pessoais e configurações
            </p>
          </div>
          <Button label="Editar Perfil" className="sm:block hidden" />
        </div>
        <ProfileForm />
        <div className="flex gap-8 flex-col lg:flex-row">
          <Preferences />
          <Security />
        </div>
      </div>
    </>
  );
};
