import React from 'react';
import { Link } from "react-router-dom";
function eRec() {
  return (
    <div className="container_components">
      <h1>Erec</h1>
      <h3 className="subtitle">Présentation</h3>
      <p>Erec est un outil de gestion du recrutement uniquement utilisé par Capgemini Engineering en interne. Cet outil est utilisé par plus de 500 recruteurs de Capgemini France, ce qui leur permet d’optimiser le processus métier lors de leur recrutement.</p>
      <br></br>
      <h3 className="subtitle">Lancement du projet</h3>
      <p>Le projet a vu le jour suite à l’initiative de Cédric Galey en 2017. L’objectif de cette application web était de permettre aux recruteurs d’avoir un planning dynamique qui leur permettrait une gestion du recrutement et un suivi plus minutieux, ce qui aiderait à recruter de manière plus efficace de nouveaux collaborateurs selon le besoin actuel de l’entreprise.</p>
      <p>En plus de cela, cette application serait le pilier des nouveaux stagiaires qui rentreraient dans l’entreprise, leur offrant une base solide pour débuter leur apprentissage.</p>
      <p>L’objectif de cette application était d’intégrer de nouvelles fonctionnalités au fil du temps grâce aux nouveaux stagiaires et de proposer un planning dynamique pour suivre les candidats tout au long de leur processus de recrutement.</p>
      <p>L’application serait structurée en colonnes représentant l’état des candidats dans leur processus de recrutement. Elle inclurait également des modèles d’emails dynamiques permettant l’envoi automatique d’emails aux candidats.</p>
      <p>L’enjeu du projet était de taille, avec de nombreuses idées de fonctionnalités à implémenter pour offrir une application exploitable par les recruteurs, qui utilisaient auparavant des outils moins performants.</p>
      <p>Le principal risque de ce projet résidait dans l’ampleur des fonctionnalités attendues et le temps nécessaire pour les développer.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>Pour la réalisation de mes différentes tâches, j’ai commencé par une tâche relativement simple : résoudre un problème de doublon de candidats.</p>
      <p>Il pouvait arriver que deux recruteurs ajoutent simultanément un même CV dans l’application, ce qui créait des doublons dans la base de données. Pour résoudre ce problème, j’ai ajouté une fonctionnalité qui vérifiait si le nom et le prénom existaient déjà dans la base de données. En cas de doublon, un message d’alerte s’affichait pour inviter les recruteurs à vérifier avant d’ajouter un candidat.</p>
      <p>Une autre amélioration que j’ai développée concernait la gestion des recruteurs. Lorsqu’un recruteur quittait Capgemini, son compte restait actif, ce qui pouvait entraîner une surcharge de la base de données à long terme. J’ai donc ajouté une page dans la section administrateur pour permettre la suppression des recruteurs inactifs.</p>
      <p>Ensuite, j’ai réalisé la montée de version d’Angular de l’application, passant de la version 7 à la version 15. Cette mise à jour a permis une modernisation majeure du front-end.</p>
      <p>La plus grande fonctionnalité que j’ai développée concernait l’exportation d’une colonne recensant les candidats ayant refusé une offre d’emploi de Capgemini. Les recruteurs souhaitaient exploiter ces données, qui concernaient 11 000 candidats. J’ai utilisé une vue dans la base de données pour optimiser cette exportation : la première tentative prenait 2 minutes, tandis que l’optimisation réduisait le temps à seulement 2 millisecondes.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>Ce projet m’a permis de développer mes compétences en tant que développeur full stack dans un projet de grande envergure. J’ai appris à travailler sur des bases de données volumineuses et à optimiser du code pour améliorer les performances.</p>
      <p>En bref, ce projet m’a énormément apporté en termes de compréhension du code, d’optimisation, de résolution de problèmes et d’autonomie.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Pour Capgemini, l’outil répond aujourd’hui à tous les besoins exprimés par les recruteurs. Il permet de gérer l’ensemble du processus de recrutement, depuis la réception du CV d’un candidat jusqu’à la finalisation du contrat.</p>
      <p>Grâce aux nouvelles fonctionnalités que j’ai ajoutées, les recruteurs utilisent désormais l’application quotidiennement et de manière plus efficace.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Tout au long du projet, j’ai maintenu un contact régulier avec la direction de Capgemini pour m’assurer que les mises à jour de l’application répondaient aux attentes de l’entreprise.</p>
      <p>Une bonne communication avec les recruteurs utilisant l’application au quotidien m’a permis de mieux adapter mes développements en fonction de leurs besoins réels.</p>
      <p>Les architectes m’ont également aidé à identifier les tests nécessaires avant la mise en production des nouvelles fonctionnalités.</p>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>Aujourd’hui, le projet a dépassé les attentes initiales et est devenu un outil essentiel dans le quotidien des recruteurs.</p>
      <p>Une future amélioration envisagée serait de permettre l’accès à la plateforme aux invités via un lien envoyé par email.</p>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Ce projet a représenté une expérience unique pour moi, car il s’agissait de mon premier projet en entreprise où j’ai dû faire preuve d’autonomie et être responsable de mes développements.</p>
      <p>J’ai eu l’opportunité de travailler avec des collaborateurs expérimentés qui m’ont beaucoup appris sur la méthodologie de gestion de projet en entreprise.</p>
      <p>Cette expérience m’a permis d’acquérir de nombreuses compétences que je pourrai réutiliser tout au long de ma carrière de développeur full stack.</p>
      <p>Elle m’a aussi appris à vulgariser mon discours selon mes interlocuteurs et à mieux comprendre les attentes des différentes parties prenantes.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className='realised_button'></div>
    </div>
);
}

export default eRec