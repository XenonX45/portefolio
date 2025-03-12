import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Competences from "./components/Competences";
import Realisations from "./components/Realisations";
import Angular from "./components/Angular";
import C from "./components/C";
import RezDrive from "./components/RezDrive";
import Erec from "./components/eRec";
import Adaptabilite from "./components/Adaptabilite";
import Agile from "./components/Agile";
import Autonomie from "./components/Autonomie";
import Communication from "./components/Communication";
import Ebrush from "./components/Ebrush";
import FormCollect from "./components/FormCollect";
import Java from "./components/Java";
import LocaDax from "./components/LocaDax";
import SQL from "./components/SQL";
import UnitTest from "./components/UnitTest";
import XML from "./components/XML";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Vérifie si on est sur la page Home

  return (
    <div className="App">
      <Header />
      <div className={isHome ? "" : "container"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/competences/Angular" element={<Angular />} />
          <Route path="/competences/C" element={<C />} />
          <Route path="/realisations/Erec" element={<Erec />} />
          <Route path="/realisations/RezDrive" element={<RezDrive />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
