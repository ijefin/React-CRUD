import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import CadastroProduto from "../views/Produtos/Cadastro/Cadastro";
import ConsultaProdutos from "../views/Produtos/Consulta/Consulta";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cadastro-produto" element={<CadastroProduto />} />
        <Route exact path="/consulta-produto" element={<ConsultaProdutos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
