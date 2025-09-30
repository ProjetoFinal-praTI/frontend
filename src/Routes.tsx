import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { MeuPerfil } from "./pages/MeuPerfil";
import { Layout } from "./components/Layout";

export const RoutesManager = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/cadastro"
        element={
          <Layout>
            <Cadastro />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/meu-perfil"
        element={
          <Layout>
            <MeuPerfil />
          </Layout>
        }
      />
    </Routes>
  );
};
