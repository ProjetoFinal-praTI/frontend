import { CustomInput } from "@/components/CustomInput";
import { useState } from "react";

export const CadastroForm = () => {
  const [value, setValue] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form className="flex flex-col w-full gap-5">
      <CustomInput
        value={value}
        onChange={setValue}
        label="Nome"
        inputType="text"
        placeholder="Seu nome completo"
      />
      <CustomInput
        value={value}
        onChange={setValue}
        label="E-mail"
        inputType="email"
        placeholder="seuemail@gmail.com"
      />
      <CustomInput
        value={senha}
        onChange={setSenha}
        label="Senha"
        inputType="password"
        placeholder="********"
      />
      <CustomInput
        value={senha}
        onChange={setSenha}
        label="Confirmar senha"
        inputType="password"
        placeholder="********"
      />
    </form>
  );
};
