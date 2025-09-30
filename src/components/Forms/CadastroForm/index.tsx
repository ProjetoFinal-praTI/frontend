import { CustomInput } from "@/components/CustomInput";
import { useState } from "react";

export const CadastroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirSenha, setConfirSenha] = useState("");

  return (
    <form className="flex flex-col w-full gap-5">
      <CustomInput
        value={nome}
        onChange={setNome}
        label="Nome"
        inputType="text"
        placeholder="Seu nome completo"
      />
      <CustomInput
        value={email}
        onChange={setEmail}
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
        value={confirSenha}
        onChange={setConfirSenha}
        label="Confirmar senha"
        inputType="password"
        placeholder="********"
      />
    </form>
  );
};
