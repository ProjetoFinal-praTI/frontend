import { Button } from "@/components/Buttons/Button";
import { LoginForm } from "@/components/Forms/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-background flex justify-center items-center h-screen">
      <div className="flex flex-col items-center p-6 gap-5 bg-card rounded-lg shadow-sm max-w-md w-full">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-semibold text-xl text-card-foreground">
            Fazer login
          </h3>
          <p className="text-muted-foreground text-sm text-center">
            Digite suas credenciais para acessar sua conta
          </p>
        </div>
        <LoginForm />
        <p className="text- text-sm text-center">
          Não tem uma conta?{" "}
          <Link to={"/cadastro"} className="font-bold underline cursor-pointer">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};
