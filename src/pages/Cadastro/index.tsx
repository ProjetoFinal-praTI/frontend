import { Button } from "@/components/Buttons/Button";
import { CadastroForm } from "@/components/Forms/CadastroForm";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-primary/30 via-white to-secondary/30 h-screen">
      <div className="flex flex-col items-center p-6 gap-5  bg-white rounded-lg shadow-sm max-w-lg">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
          </div>
          <h1 className="text-primary font-bold text-2xl">EduGamefy</h1>
          <p className="text-[#64748b] text-sm text-center">
            Cadastre-se para começar sua jornada de aprendizado
          </p>
        </div>
        <CadastroForm />
        <Button label="Entrar" className="w-full" variant="gradient" />
        <p className="text-[#64748b] text-sm text-center">
          Já tem uma conta?{" "}
          <Link to={"/login"} className="font-bold underline cursor-pointer">Faça login</Link>
        </p>
      </div>
    </div>
  );
};
