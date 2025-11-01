import { RegisterForm } from "@/features/auth/register/ui/register-form";
import { Button } from "@/shared/ui/buttons/button";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  return (
    <div className="flex justify-center items-center bg-background h-screen">
      <div className="flex flex-col items-center p-6 gap-5 bg-card rounded-lg shadow-sm max-w-lg w-full">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-xl text-card-foreground">
            Cadastre-se
          </h1>
          <p className="text-muted-foreground text-sm text-center">
            Comece a gerenciar suas finanças de forma inteligente
          </p>
        </div>
        <RegisterForm />
        <Button label="Entrar" className="w-full" />
        <p className="text-foreground text-sm text-center">
          Já tem uma conta?{" "}
          <Link to={"/login"} className="font-bold underline cursor-pointer">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};
