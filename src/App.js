import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
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
import Aproposdemoi from "./components/Aproposdemoi";
import AllCompetences from "./components/AllCompetences";
import Allrealisation from "./components/Allrealisation";
import Contact from "./components/Contact";
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
          <Route path="/competences/Angular" element={<Angular />} />
          <Route path="/competences/C" element={<C />} />
          <Route path="/competences/UnitTest" element={<UnitTest />} />
          <Route path="/competences/Java" element={<Java />} />
          <Route path="/competences/SQL" element={<SQL />} />
          <Route path="/competences/XML" element={<XML />} />
          <Route path="/competences/Communication" element={<Communication />} />
          <Route path="/competences/Adaptabilite" element={<Adaptabilite />} />
          <Route path="/competences/Agile" element={<Agile />} />
          <Route path="/competences/Autonomie" element={<Autonomie />} />
          <Route path="/realisations/Erec" element={<Erec />} />
          <Route path="/realisations/RezDrive" element={<RezDrive />} />
          <Route path="/realisations/LocaDax" element={<LocaDax />} />
          <Route path="/realisations/Ebrush" element={<Ebrush />} />
          <Route path="/realisations/FormCollect" element={<FormCollect />} />
          <Route path="/presentation/Aproposdemoi" element={<Aproposdemoi />} />
          <Route path="/competences" element={<AllCompetences />} />
          <Route path="/realisations" element={<Allrealisation />} />
          <Route path="/contact" element={<Contact />} />
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
