import { LoginForm } from "@/features/auth/login/ui/login-form";
import { Button } from "@/shared/ui/buttons/button";
import { GoogleIcon } from "@/shared/ui/icons/google-icon";
import { LinkedinIcon } from "@/shared/ui/icons/linkedin-icon";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-background flex justify-center items-center min-h-[85vh]">
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
        <p className="text-foreground text-sm text-center">
          Não tem uma conta?{" "}
          <Link to={"/cadastro"} className="font-bold underline cursor-pointer">
            Cadastre-se
          </Link>
        </p>
        <div className="flex flex-col gap-5">
          <Button
            icon={<GoogleIcon className="w-5 h-5" />}
            label="Continuar com Google"
            onClick={() => console.log("Cliquei no botão")}
            variant="outline"
            fontWeight="medium"
            fontSize="sm"
          />
          <Button
            icon={<LinkedinIcon className="w-5 h-5" />}
            label="Continuar com LinkedIn"
            onClick={() => console.log("Cliquei no botão")}
            variant="outline"
            fontWeight="medium"
            fontSize="sm"
          />
        </div>
      </div>
    </div>
  );
};
