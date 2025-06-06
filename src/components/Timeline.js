import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Timeline.css"; 
import CapgeminiLogo from "../img/capgemini_logo.png";
import SchoolLogo from "../img/esiea.png"; // Logo pour les formations

const experiences = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Capgemini",
    logo: CapgeminiLogo,
    date: "22 Septembre 2023 - Aujourd'hui",
    location: "Toulouse, France",
    responsibility: "Développement et implémentation de solutions pour Airbus",
    status: "Alternant",
    description: [
      "Participer à l'implémentation de processus fonctionnels.",
      "Interfaçage avec des solutions tierces via API.",
      "Développement d'applications pour Airbus.",
      "Mise en place de bonnes pratiques.",
    ],
    technologies: ["Javascript", "UnitTest"],
    projects: ["Ebrush"],
  },
  {
    id: 2,
    title: "Stage Développeur Web",
    company: "Capgemini",
    logo: CapgeminiLogo,
    date: "27 février 2023 - 28 août 2023",
    location: "Toulouse, France",
    responsibility: "Développement et maintenance d’une application web de recrutement",
    status: "Stagiaire",
    description: [
      "Développement et maintenance d'une application web.",
      "Mise en place de tests unitaires pour garantir la qualité du code.",
      "Optimisation des performances des requêtes SQL.",
    ],
    technologies: ["Angular", "C#", "SQL", "UnitTest"],
    projects: ["eRec"],
  },
];

const formations = [
  {
    id: 1,
    title: "Bachelor informatique option ingénierie du logiciel",
    school: "Esiea",
    logo: SchoolLogo,
    date: "2020 - 2022",
    location: "Agen, France",
    diploma: "Bachelor informatique option ingénierie du logiciel",
    description: "Fondée en 1958 par Maurice Lafargue, l’ESIEA (École Supérieure d’Informatique, Électronique, Automatique) est une grande école d’ingénieurs spécialisée dans les sciences et technologies du numérique. Implantée sur plusieurs campus en France (Paris/Ivry-sur-Seine, Laval, Agen et Dax), elle forme des ingénieurs généralistes et experts dans des domaines tels que la cybersécurité, l’intelligence artificielle, la data science et les systèmes embarqués. L’ESIEA se distingue par une pédagogie axée sur la pratique, l’innovation et l’engagement sociétal, avec une forte dimension humaine. Elle propose des formations en alternance, des doubles diplômes et des partenariats avec plus de 800 entreprises.​",
    schoolWebsite: "https://www.esiea.fr/",
  },
];

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
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

        {formations.map((formation) => (
          <div key={formation.id} className="timeline-item formation">
            <div className="timeline-content" onClick={() => openPopup(formation)}>
              <a href={formation.schoolWebsite} target="_blank" rel="noopener noreferrer">
                <img src={formation.logo} alt={formation.school} className="timeline-logo" />
              </a>
              <h3>{formation.title}</h3>
              <h4>{formation.school}</h4>
              <p className="timeline-date">{formation.date}</p>
              <p className="timeline-location">{formation.location}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✖</button>
            <h3>{selectedItem.title}</h3>
            <h4>{selectedItem.company || selectedItem.school}</h4>
            <p className="popup-date">{selectedItem.date}</p>
            <p><strong>Lieu :</strong> {selectedItem.location}</p>
            
            {selectedItem.responsibility && selectedItem.status && (
              <>
                <p><strong>Responsabilité :</strong> {selectedItem.responsibility}</p>
                <p><strong>Statut :</strong> {selectedItem.status}</p>
              </>
            )}
            
            {selectedItem.description && Array.isArray(selectedItem.description) && (
              <>
                <h4>Missions :</h4>
                <ul>
                  {selectedItem.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <h4>Technologies utilisées :</h4>
                <div className="tech-container">
                  {selectedItem.technologies?.map((tech, index) => (
                    <Link key={index} to={`/competences/${tech.replace(/ /g, "")}`} className="tech-badge">
                      {tech}
                    </Link>
                  ))}
                </div>
                <h4>Projets associés :</h4>
                <div className="projects-container">
                  {selectedItem.projects?.map((project, index) => (
                    <Link key={index} to={`/realisations/${project.replace(/ /g, "")}`} className="project-badge">
                      {project}
                    </Link>
                  ))}
                </div>
              </>
            )}
            
            {selectedItem.diploma && (
              <>
                <p><strong>Diplôme :</strong> {selectedItem.diploma}</p>
                <p>{selectedItem.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
