import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { MeuPerfil } from "./pages/meu-perfil";
import { Lancamento } from "./pages/lancamento";
import { EsqueciSenha } from "./pages/esqueci-senha";
import ValidarToken from "./pages/validar-token/page";
import { Relatorios } from "./pages/relatorios";
import { Metas } from "./pages/metas";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/meu-perfil" element={<MeuPerfil />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lancamento" element={<Lancamento />} />
      <Route path="/metas" element={<Metas />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/validar-token" element={<ValidarToken />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
