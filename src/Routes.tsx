import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { Home } from "./pages/home";
import { MeuPerfil } from "./pages/meu-perfil";
import { Lancamento } from "./pages/lancamento";
import { Relatorios } from "./pages/relatorios";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/meu-perfil" element={<MeuPerfil />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lancamento" element={<Lancamento />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
