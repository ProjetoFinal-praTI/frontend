import { CustomInput } from "@/shared/ui/inputs/input-text";
import { Button } from "@/shared/ui/buttons/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z
  .object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirme sua senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Dados de cadastro:", data);

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-5"
    >
      <CustomInput
        value=""
        label="Nome"
        inputType="text"
        placeholder="Seu nome completo"
        register={register("nome")}
        error={errors.nome?.message}
      />
      <CustomInput
        value=""
        label="E-mail"
        inputType="email"
        placeholder="seuemail@gmail.com"
        register={register("email")}
        error={errors.email?.message}
      />
      <CustomInput
        value=""
        label="Senha"
        inputType="password"
        placeholder="********"
        register={register("senha")}
        error={errors.senha?.message}
      />
      <CustomInput
        value=""
        label="Confirmar senha"
        inputType="password"
        placeholder="********"
        register={register("confirmarSenha")}
        error={errors.confirmarSenha?.message}
      />
      <Button
        label="Cadastrar"
        className="w-full"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </form>
  );
};
