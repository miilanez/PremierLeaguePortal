import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Classificacao from "./pages/Classificacao";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="classificacao" element={<Classificacao />} />
        <Route component={() => <div>Error 404!</div>} />
      </Routes>
    </div>
  );
};

export default App;
