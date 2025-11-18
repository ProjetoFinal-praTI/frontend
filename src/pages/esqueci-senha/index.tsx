import { Button } from "@/shared/ui/buttons/button";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { useState } from "react";
import { Link } from "react-router-dom";

export const EsqueciSenha = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-6 min-h-[85vh]">
      <div className="flex flex-col items-center p-6 gap-5 bg-card rounded-lg shadow-sm lg:w-xl max-w-xl w-full">
        <div className="flex flex-col text-center gap-2">
          <h2 className="text-foreground font-semibold text-lg md:text-xl">
            Esqueci minha senha
          </h2>
          <p className="text-foreground text-sm md:text-base">
            Digite seu email para receber um código de recuperação
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <CustomInput
            label="E-mail"
            placeholder="seu@email.com"
            inputType="email"
            value={email}
            onChange={(value: string) => setEmail(value)}
            required
          />

          <Button
            label="Enviar código"
            className="w-full"
            isLoading={isLoading}
            disabled={!email}
          />
        </form>

        <p className="text-foreground text-sm">
          Lembrou da senha?{" "}
          <Link
            to="/login"
            className="text-foreground hover:cursor-pointer hover:underline"
          >
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
};
