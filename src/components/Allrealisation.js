import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AllRealisations.css"; // Assurez-vous de créer ce fichier CSS

const realisations = [
  {
    id: 1,
    name: "eRec",
    description: "Erec est un outil de gestion du recrutement uniquement utilisé par Capgemini Engineering en interne. Cet outil est utilisé par plus de 500 recruteurs de Capgemini France, ce qui leur permet d’optimiser le processus métier lors de leur recrutement.",
    technologies: ["Angular", "C#", "SQL", "UNIT Test", "XML"],
    skills: ["Agile", "Communication", "Autonomie", "Adaptabilité"],
    tag: "#technique"
  },
  {
    id: 2,
    name: "RezDrive",
    description: "Le but de l’équipe Rez Drive était de développer une application web pour école de conduite Michelet présente à Montauban. L’objectif de cette application web était de moderniser l’organisation interne via des plannings dynamiques spécifiques à chaque membre présent dans l’établissement de l’auto-école.",
    technologies: ["Java", "Angular", "UNIT Test", "SQL"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 3,
    name: "FormCollect",
    description: "L’association AFDAS souhaitait moderniser le fonctionnement de collection dans les points relais qu’il devait gérer dans l’agglomération d’Agen. Pour faire cela il souhaitait que nous développions une application Android qu’il pourrait utiliser plutôt que d’utiliser du papier.",
    technologies: ["Java", "XML"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 4,
    name: "LocaDax",
    description: "La ville de Dax souhaitait moderniser leur manière de gérer les archives des entreprises présentent à Dax pour ce faire elle souhaitait avoir un logiciel qui leur permettrait de remplacer ces archives qui commence à augmenter la difficulté de la ville de Dax à retrouver les données d’une entreprise facilement.",
    technologies: ["C#", "SQL"],
    skills: ["Agile", "Communication"],
    tag: "#technique"
  },
  {
    id: 5,
    name: "Ebrush",
    description: "Ebrush est une application web faisant partie d’une plus grande application nommée FTEMenu cette application a pour but d’aider les ingénieurs navigants chez Airbus durant leur configuration pour leur teste en vol.",
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

            {/* Bouton pour voir la réalisation */}
            <Link to={`/realisations/${realisation.name.toLowerCase()}`} className="view-button">
              Voir la réalisation
            </Link>
          </div>

          <div className="card-footer">
            <span className="realisation-tag">{realisation.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRealisations;
