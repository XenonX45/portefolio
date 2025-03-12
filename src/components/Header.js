import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null); 
  };

  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
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
          <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown("competences")}>
            Compétences ▾
          </button>
          {openDropdown === "competences" && (
            <div className="dropdown-menu">
              <Link to="/competences" className="dropdown-item" onClick={closeDropdown}>Toutes les compétences</Link>
              <hr className="dropdown-divider" />

              {/* Sous-menu Techniques */}
              <div className="nav-item dropdown">
                <button className="dropdown-toggle sub-dropdown" onClick={() => toggleSubDropdown("techniques")}>
                  Techniques ▾
                </button>
                {openSubDropdown === "techniques" && (
                  <div className="dropdown-submenu">
                    <Link to="/competences/Angular" className="dropdown-item" onClick={closeDropdown}>Angular</Link>
                    <Link to="/competences/C#" className="dropdown-item" onClick={closeDropdown}>C#</Link>
                    <Link to="/competences/UnitTest" className="dropdown-item" onClick={closeDropdown}>UnitTest</Link>
                    <Link to="/competences/Java" className="dropdown-item" onClick={closeDropdown}>Java</Link>
                    <Link to="/competences/SQL" className="dropdown-item" onClick={closeDropdown}>SQL</Link>
                    <Link to="/competences/XML" className="dropdown-item" onClick={closeDropdown}>XML</Link>
                  </div>
                )}
              </div>

              {/* Sous-menu Humaines */}
              <div className="nav-item dropdown">
                <button className="dropdown-toggle sub-dropdown" onClick={() => toggleSubDropdown("humaines")}>
                  Humaines ▾
                </button>
                {openSubDropdown === "humaines" && (
                  <div className="dropdown-submenu">
                    <Link to="/competences/Communication" className="dropdown-item" onClick={closeDropdown}>Communication</Link>
                    <Link to="/competences/Adaptabilite" className="dropdown-item" onClick={closeDropdown}>Adaptabilité</Link>
                    <Link to="/competences/Agile" className="dropdown-item" onClick={closeDropdown}>Agile</Link>
                    <Link to="/competences/Autonomie" className="dropdown-item" onClick={closeDropdown}>Autonomie</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Réalisations */}
        <div className="nav-item dropdown">
          <button className="dropdown-toggle nav-link" onClick={() => toggleDropdown("realisations")}>
            Réalisations ▾
          </button>
          {openDropdown === "realisations" && (
            <div className="dropdown-menu">
              <Link to="/realisations" className="dropdown-item" onClick={closeDropdown}>Toutes les réalisations</Link>
              <hr className="dropdown-divider" />
              <Link to="/realisations/Erec" className="dropdown-item" onClick={closeDropdown}>Erec</Link>
              <Link to="/realisations/RezDrive" className="dropdown-item" onClick={closeDropdown}>RezDrive</Link>
              <Link to="/realisations/LocaDax" className="dropdown-item" onClick={closeDropdown}>LocaDax</Link>
              <Link to="/realisations/Ebrush" className="dropdown-item" onClick={closeDropdown}>Ebrush</Link>
              <Link to="/realisations/FormCollect" className="dropdown-item" onClick={closeDropdown}>FormCollect</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
