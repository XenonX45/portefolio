import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Fonction pour gérer l'affichage des dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
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
                    <Link to="/skills/tech/react" className="dropdown-item">React</Link>
                    <Link to="/skills/tech/nodejs" className="dropdown-item">NodeJS</Link>
                    <Link to="/skills/tech/mongodb" className="dropdown-item">MongoDB</Link>
                    <Link to="/skills/tech/java" className="dropdown-item">Java Android</Link>
                    <Link to="/skills/tech/sql" className="dropdown-item">SQL</Link>
                    <Link to="/skills/tech/php" className="dropdown-item">PHP</Link>
                  </div>
                )}
              </div>

              {/* Sous-menu Humaines */}
              <div className="nav-item dropdown">
                <a href="#" className="dropdown-toggle nav-link">Humaines ▾</a>
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Réalisations */}
        <div className="nav-item dropdown">
          <a href="#" className="dropdown-toggle nav-link">Réalisations ▾</a>
        </div>

        {/* Contact */}
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
