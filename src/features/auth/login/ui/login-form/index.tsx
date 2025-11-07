import { Button } from "@/shared/ui/buttons/button";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [value, setValue] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form className="flex flex-col w-full gap-5">
      <CustomInput
        value={value}
        onChange={setValue}
        label="E-mail"
        inputType="email"
        placeholder="seu@email.com"
      />
      <CustomInput
        value={senha}
        onChange={setSenha}
        label="Senha"
        inputType="password"
        placeholder="********"
      />
      <Link
        to="/esqueci-senha"
        className="text-sm text-primary hover:text-primary/80 self-end"
      >
        Esqueceu sua senha?
      </Link>
      <Button label="Entrar" className="w-full" />
    </form>
  );
};
