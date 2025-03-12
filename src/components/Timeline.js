import React, { useState } from "react";
import "../styles/Timeline.css"; // Assurez-vous de créer ce fichier CSS
import CapgeminiLogo from "../img/capgemini_logo.png";
// Données des expériences
const experiences = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "E FOR IA Pamiers",
    logo: CapgeminiLogo,
    date: "6 septembre 2021 - 6 septembre 2023",
    location: "Pamiers, France",
    responsibility: "Développement et implémentation de solutions internes",
    status: "Alternant",
    description: [
      "Participer à l'implémentation de processus fonctionnels dans les applications de la suite logicielle E FOR BIZZ commercialisée par E FOR IA.",
      "Interfaçage avec des solutions tierces grâce à une API.",
      "Développement d'applications à usage interne.",
      "Mise en place de bonnes pratiques.",
    ],
    technologies: ["Optimap", "React", "NodeJS", "MongoDB", "Java Android"],
    projects: ["Optimap", "FormCollect"],
  },
  {
    id: 2,
    title: "Stage Développeur Web",
    company: "XYZ Entreprise",
    logo: CapgeminiLogo,
    date: "15 février 2021 - 15 août 2021",
    location: "Paris, France",
    responsibility: "Développement et maintenance d’une application web",
    status: "Stagiaire",
    description: [
      "Développement et maintenance d'une application web.",
      "Mise en place de tests unitaires pour garantir la qualité du code.",
      "Optimisation des performances des requêtes SQL.",
    ],
    technologies: ["Java", "SQL", "Angular", "UnitTest"],
    projects: ["RezDrive", "Ebrush"],
  },
];

const Timeline = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openPopup = (exp) => {
    setSelectedExperience(exp);
  };

  const closePopup = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="timeline">
      <h2 className="timeline-title">Mon Parcours</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content" onClick={() => openPopup(exp)}>
              <img src={exp.logo} alt={exp.company} className="timeline-logo" />
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="timeline-date">{exp.date}</p>
              <p className="timeline-location">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre pop-up pour afficher plus d'infos */}
      {selectedExperience && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✖</button>
            <h3>{selectedExperience.title}</h3>
            <h4>{selectedExperience.company}</h4>
            <p className="popup-date">{selectedExperience.date}</p>
            <p><strong>Lieu :</strong> {selectedExperience.location}</p>
            <p><strong>Responsabilité :</strong> {selectedExperience.responsibility}</p>
            <p><strong>Statut :</strong> {selectedExperience.status}</p>
            <h4>Missions :</h4>
            <ul>
              {selectedExperience.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <h4>Technologies utilisées :</h4>
            <div className="tech-container">
              {selectedExperience.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <h4>Projets associés :</h4>
            <div className="projects-container">
              {selectedExperience.projects.map((project, index) => (
                <span key={index} className="project-badge">{project}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
