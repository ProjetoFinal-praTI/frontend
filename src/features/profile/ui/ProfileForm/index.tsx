import { Card } from "@/components/Card";
import { CustomInput } from "@/components/CustomInput";
import { UserIcon } from "@/components/Icons/UserIcon";
import { InputPhone } from "@/components/Inputs/InputPhone";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const ProfileForm = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [location, setLocation] = useState("");
  const [birth, setBirth] = useState("");

  const {
    control,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Card>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <UserIcon stroke="white" className="w-6 h-6" />
          <h1 className="text-foreground md:text-xl text-lg  font-semibold">
            Informações Pessoais
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <CustomInput
            value={nome}
            onChange={setNome}
            label="Nome Completo"
            inputType="text"
            placeholder="Seu nome completo"
          />
          <CustomInput
            value={email}
            onChange={setEmail}
            label="E-mail"
            inputType="email"
            placeholder="seu@email.com"
          />
          <InputPhone
            label="Telefone"
            id="phone"
            placeholder="(11) 99999-8888"
            control={control}
            error={errors.phone?.message as string}
          />
          <CustomInput
            value={location}
            onChange={setLocation}
            label="Localização"
            inputType="text"
            placeholder="São Paulo, SP"
          />
          <CustomInput
            value={birth}
            onChange={setBirth}
            label="Data de Nascimento"
            inputType="date"
            maxDate={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    </Card>
  );
};
