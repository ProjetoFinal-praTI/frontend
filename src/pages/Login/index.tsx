import { Button } from "@/components/Buttons/Button";
import { LoginForm } from "@/components/Forms/LoginForm";
import { BookIcon } from "@/components/Icons/BookIcon";

export const Login = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-primary/30 via-white to-secondary/30 h-screen">
      <div className="flex flex-col items-center p-6 gap-5  bg-white rounded-lg shadow-sm max-w-lg">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center">
            <BookIcon className="w-7 h-7" stroke="var(--color-primary)" />
          </div>
          <h1 className="text-primary font-bold text-2xl">EduGamefy</h1>
          <p className="text-[#64748b] text-sm text-center">
            Acesse sua conta para começar sua jornada de aprendizado
          </p>
        </div>
        <LoginForm />
        <Button label="Entrar" className="w-full" variant="gradient" />
        <p className="text-[#64748b] text-sm text-center">
          Não tem uma conta?{" "}
          <span className="font-bold underline">Cadastre-se</span>
        </p>
      </div>
    </div>
  );
};
