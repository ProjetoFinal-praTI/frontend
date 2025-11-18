import { Button } from "@/shared/ui/buttons/button";
import { CustomInput } from "@/shared/ui/inputs/input-text";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Dados de login:", data);

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-5"
    >
      <CustomInput
        value=""
        label="E-mail"
        inputType="email"
        placeholder="seu@email.com"
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
      <Link
        to="/esqueci-senha"
        className="text-sm text-primary hover:text-primary/80 self-end"
      >
        Esqueceu sua senha?
      </Link>
      <Button
        label="Entrar"
        className="w-full"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </form>
  );
};
