import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AllCompetences.css"; // Assurez-vous de créer ce fichier CSS

// Liste des compétences
const competences = [
  {
    id: 1,
    name: "C#",
    image: "/images/react.png",
    rating: 4,
    level: "Confirmé",
    realisations: ["eRec", "LocaDax"],
    tag: "#technique"
  },
  {
    id: 2,
    name: "Java",
    image: "/images/nodejs.png",
    rating: 3,
    level: "Autonome",
    realisations: ["RezDrive", "FormCollect"],
    tag: "#technique"
  },
  {
    id: 3,
    name: "Angular",
    image: "/images/mongodb.png",
    rating: 5,
    level: "Expert",
    realisations: ["RezDrive","eRec"],
    tag: "#technique"
  },
  {
    id: 4,
    name: "SQL",
    image: "/images/android.png",
    rating: 4,
    level: "Confirmé",
    realisations: ["RezDrive","eRec","LocaDax"],
    tag: "#technique"
  },
  {
    id: 5,
    name: "UNIT Test",
    image: "/images/angular.png",
    rating: 3,
    level: "Autonome",
    realisations: ["RezDrive","eRec"],
    tag: "#technique"
  },
  {
    id: 6,
    name: "XML",
    image: "/images/csharp.png",
    rating: 2,
    level: "Initié",
    realisations: ["FormCollect","eRec"],
    tag: "#technique"
  },
  {
    id: 7,
    name: "Autonomie",
    image: "/images/csharp.png",
    rating: 3,
    level: "Autonome",
    realisations: ["Ebrush","eRec"],
    tag: "#humaine"
  },
  {
    id: 8,
    name: "Agile",
    image: "/images/csharp.png",
    rating: 4,
    level: "Confirmé",
    realisations: ["Ebrush","eRec","RezDrive", "FormCollect","LocaDax"],
    tag: "#humaine"
  },
  {
    id: 9,
    name: "Communication",
    image: "/images/csharp.png",
    rating: 3,
    level: "Autonome",
    realisations: ["Ebrush","eRec","RezDrive", "FormCollect","LocaDax"],
    tag: "#humaine"
  },
  {
    id: 10,
    name: "Adaptabilité",
    image: "/images/csharp.png",
    rating: 3,
    level: "Autonome",
    realisations: ["Ebrush","eRec"],
    tag: "#humaine"
  }
];

const AllCompetences = () => {
  return (
    <div className="competences-container">
      {competences.map((competence) => (
        <div key={competence.id} className="competence-card">
          {/* Card Body */}
          <div className="card-body">
            <img src={competence.image} alt={competence.name} className="competence-logo" />
            <h2>{competence.name}</h2>

            {/* Étoiles */}
            <div className="rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={index < competence.rating ? "star filled" : "star"}>★</span>
              ))}
            </div>

            {/* Niveau */}
            <span className="competence-level">{competence.level}</span>

            {/* Boutons Réalisations */}
            <div className="realised-container">
              {competence.realisations.map((realisation, index) => (
                <Link key={index} to={`/realisations/${realisation.toLowerCase()}`} className="realised-button">
                  {realisation}
                </Link>
              ))}
            </div>
          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <span className="competence-tag">{competence.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCompetences;
