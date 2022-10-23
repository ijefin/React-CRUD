import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import CadastroProduto from "../views/Produtos/Cadastro";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cadastro-produto" element={<CadastroProduto />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
