import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "../menu";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Não mostrar o menu nas telas de login e cadastro (inclui rotas filhas)
  const hideMenu =
    pathname.startsWith("/login") || pathname.startsWith("/cadastro");

  return (
    <div className="min-h-screen bg-background">
      {!hideMenu && <Menu />}
      <main className="flex-1 px-8 py-10 md:py-14 lg:px-20 md:px-20">
        {children}
      </main>
    </div>
  );
};
