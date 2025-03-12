import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Fonction pour gérer l'affichage des dropdowns
  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
      setOpenSubDropdown(null); // Ferme aussi les sous-menus
    } else {
      setOpenDropdown(menu);
      setOpenSubDropdown(null); // Réinitialise les sous-menus
    }
  };

  // Gestion des sous-menus
  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  return (
    <header className="navbar">
      <div className="flex">
        <div className="title">Bastian MOLLO-GENE</div>
        <div className="desc">Expert en ingénierie logicielle - Développeur Full Stack</div>
      </div>

      <nav className="navbar-nav">
        <Link to="/" className="nav-link">Accueil</Link>

        {/* Dropdown Compétences */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            onClick={() => toggleDropdown("competences")}
          >
            Compétences ▾
          </a>
          {openDropdown === "competences" && (
            <div className="dropdown-menu">
              <Link to="/skills" className="dropdown-item">Toutes les compétences</Link>
              <hr className="dropdown-divider" />

              {/* Sous-menu Techniques */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  onClick={() => toggleSubDropdown("techniques")}
                >
                  Techniques ▾
                </a>
                {openSubDropdown === "techniques" && (
                  <div className="dropdown-menu">
                    <Link to="/competences/Angular" className="dropdown-item">Angular</Link>
                    <Link to="/competences/C#" className="dropdown-item">C#</Link>
                    <Link to="/competences/UnitTest" className="dropdown-item">UnitTest</Link>
                    <Link to="/competences/Java" className="dropdown-item">Java</Link>
                    <Link to="/competences/SQL" className="dropdown-item">SQL</Link>
                    <Link to="/competences/XML" className="dropdown-item">XML</Link>
                  </div>
                )}
              </div>

              {/* Sous-menu Humaines */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  onClick={() => toggleSubDropdown("humaines")}
                >
                  Humaines ▾
                </a>
                {openSubDropdown === "humaines" && (
                  <div className="dropdown-menu">
                    <Link to="/competences/Communication" className="dropdown-item">Communication</Link>
                    <Link to="/competences/Adaptabilite" className="dropdown-item">Adaptabilite</Link>
                    <Link to="/competences/Agile" className="dropdown-item">Agile</Link>
                    <Link to="/competences/Autonomie" className="dropdown-item">Autonomie</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Réalisations */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            onClick={() => toggleDropdown("realisations")}
          >
            Réalisations ▾
          </a>
          {openDropdown === "realisations" && (
            <div className="dropdown-menu">
              <Link to="/realisations/Erec" className="dropdown-item">Erec</Link>
              <Link to="/realisations/RezDrive" className="dropdown-item">RezDrive</Link>
              <Link to="/realisations/LocaDax" className="dropdown-item">LocaDax</Link>
              <Link to="/realisations/Ebrush" className="dropdown-item">Ebrush</Link>
              <Link to="/realisations/FormCollect" className="dropdown-item">FormCollect</Link>
            </div>
          )}
        </div>

        {/* Contact */}
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
