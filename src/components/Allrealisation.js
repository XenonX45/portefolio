import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AllRealisations.css"; // Assurez-vous de créer ce fichier CSS

// Liste des réalisations
const realisations = [
  {
    id: 1,
    name: "eRec",
    description: "Optimap est un outil interne de gestion client permettant d'optimiser et de faciliter les processus de prospection employés par les commerciaux et les assistantes commerciales au sein de l'entreprise EUPHORIA.",
    technologies: ["Angular", "C#", "SQL", "UNIT Test", "XML"],
    skills: ["Agile", "Communication", "Autonomie", "Adaptabilité"],
    tag: "#technique"
  },
  {
    id: 2,
    name: "RezDrive",
    description: "Altara est un serveur de jeu pour GTA V dont le style de jeu est axé sur le jeu de rôles...",
    technologies: ["Java", "Angular", "UNIT Test", "SQL"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 3,
    name: "FormCollect",
    description: "Apps47 est un ensemble de deux applications Android pour le Conseil départemental du Lot-et-Garonne...",
    technologies: ["Java", "XML"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 4,
    name: "LocaDax",
    description: "Apps47 est un ensemble de deux applications Android pour le Conseil départemental du Lot-et-Garonne...",
    technologies: ["C#", "SQL"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 5,
    name: "Ebrush",
    description: "Apps47 est un ensemble de deux applications Android pour le Conseil départemental du Lot-et-Garonne...",
    technologies: ["Javascript"],
    skills: ["Agile", "Communication", "Autonomie", "Adaptabilité"],
    tag: "#technique"
  }
];

const AllRealisations = () => {
  return (
    <div className="realisations-container">
      {realisations.map((realisation) => (
        <div key={realisation.id} className="realisation-card">
          {/* Card Body */}
          <div className="card-body">
            <h2>{realisation.name}</h2>
            <p className="realisation-description">{realisation.description}</p>

            {/* Technologies utilisées (avec liens) */}
            <div className="tech-container">
              {realisation.technologies.map((tech, index) => (
                <Link key={index} to={`/competences/${tech.replace(/ /g, "")}`} className="tech-badge">
                  {tech}
                </Link>
              ))}
            </div>

            {/* Compétences utilisées (avec liens) */}
            <div className="skills-container">
              {realisation.skills.map((skill, index) => (
                <Link key={index} to={`/competences/${skill.replace(/ /g, "")}`} className="skill-badge">
                  {skill}
                </Link>
              ))}
            </div>
          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <span className="realisation-tag">{realisation.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRealisations;
