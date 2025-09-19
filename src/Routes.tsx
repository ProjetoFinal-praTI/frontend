import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { MeuPerfil } from "./pages/MeuPerfil";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/meu-perfil" element={<MeuPerfil />} />
    </Routes>
  );
};
