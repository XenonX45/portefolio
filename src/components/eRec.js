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
      <p>Le projet a vu le jour suite à l’initiative de Cédric Galey en 2017. L’objectif de cette application web était de permettre aux recruteurs d’avoir un planning dynamique qui leur permettrait d’avoir une gestion du recrutement et un suivi plus minutieux dans leur recrutement, ce qui permettrait de recruter de manière plus efficace de nouveaux collaborateurs selon le besoin actuel de l’entreprise. En plus de cela, cette application serait le pilier des nouveaux stagiaires qui rentreraient dans l’entreprise en commençant par une application web bien solide pour débuter leur apprentissage dans de bonnes conditions.</p>
      <p>L’objectif de cette application était de réaliser une application web qui aurait de nouvelles fonctionnalités ajoutées au fil du temps grâce aux nouveaux stagiaires et qui aurait un planning dynamique faisant office de suivi des candidats dans l’ensemble de leur recrutement. L’application serait structurée avec des colonnes représentant l’état des candidats dans leur processus de recrutement. Il y aurait aussi la possibilité d’avoir des thèmes d’email dynamiques permettant l’envoi automatique des emails aux candidats.</p>
      <p>L’enjeu du projet était de taille avec de nombreuses idées de fonctionnalités qui devraient être mises en œuvre pour tendre vers une application exploitable par les recruteurs, qui utilisaient d’autres applications avec beaucoup moins de fonctionnalités, ce qui était une grande perte pour l’entreprise.</p>
      <p>Les risques de cette application étaient les nombreuses fonctionnalités attendues. Réussir à développer ces fonctionnalités prendrait du temps.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>Pour la réalisation de mes différentes tâches, j’ai commencé par une tâche assez simple : résoudre un problème de doublon de candidats. Il pouvait arriver que deux recruteurs rencontrent en même temps un CV intéressant et qu’ils l’ajoutent dans l’application, ce qui créait un doublon de candidat dans la base de données. Pour résoudre ce problème, il fallait que j’ajoute une fonctionnalité qui vérifiait si le nom et le prénom existaient déjà dans la base de données. En cas de doublon, un message s’affichait pour alerter les recruteurs afin qu’ils puissent vérifier s’il s’agissait du même candidat ou non avant de l’ajouter sur l’application.</p>
      <p>Un deuxième ajout que j’ai développé était la dernière date de connexion des recruteurs. Lorsqu’un recruteur quitte Capgemini, celui-ci reste présent dans la base de données, ce qui peut créer à long terme des problèmes de surcharge. J’ai donc ajouté une page dans la partie administrateur pour que les administrateurs puissent supprimer les recruteurs qui ne se sont pas connectés depuis un bon moment.</p>
      <p>Par la suite, j’ai réalisé la montée de version d’Angular de l’application, de la version 7 à la version 15. Cette mise à jour majeure permettrait d’améliorer l’ensemble du front-end de l’application.</p>
      <p>Ma plus grande fonctionnalité que j’ai pu développer était l’exportation d’une colonne recensant l’ensemble des candidats qui n’ont pas accepté l’offre d’emploi de Capgemini. Les recruteurs souhaitaient pouvoir exploiter cette colonne qui recensait 11 000 candidats. J’ai utilisé une vue dans la base de données pour optimiser l’exportation : ma première exportation prenait 2 minutes, la seconde 2 millisecondes.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>Ce projet m’a permis de développer mes compétences de développeur full stack dans un projet volumineux avec des tâches réalisables uniquement sur des bases de données de cette envergure. Cela m’a permis de développer mes compétences ainsi que de monter en compétence sur des aspects où j’avais déjà les bases. En bref, ce projet m’a beaucoup apporté en termes de compréhension du code, d’optimisation du code, de résolution de problématiques ainsi que le développement de mes connaissances annexes comme l’autonomie.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Pour Capgemini, actuellement, l’outil répond à tous les besoins que les recruteurs avaient demandés. L’application permet de réaliser l’ensemble du processus de recrutement, de la création du CV du candidat jusqu’à la création du contrat de fin pour celui-ci avec l’ensemble des entretiens, des notes pendant les entretiens, et des votes pour savoir si le candidat est accepté ou non par l’entreprise. En bref, Capgemini était très satisfait du travail que j’ai pu accomplir durant ma présence sur le projet.</p>
      <p>Aujourd’hui, grâce à mes nouvelles fonctionnalités ajoutées, l’ensemble des recruteurs utilise cette application dans leur quotidien de manière plus efficace.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Tout au long du projet, j’ai maintenu le contact avec la direction de Capgemini afin de développer les mises à jour de l’application pour qu’elles répondent aux attentes de Capgemini.</p>
      <p>De plus, suite à une bonne communication avec les recruteurs qui utilisent au quotidien cette application, j’ai contribué au mieux à la réalisation et aux modifications en adéquation avec leurs attentes.</p>
      <p>Les architectes m’ont permis de mieux discerner les différents tests à réaliser avant de mettre les nouvelles fonctionnalités en production.</p>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>Aujourd’hui, le projet a dépassé l’ensemble des éléments qui étaient attendus dans son objectif initial. Les recruteurs utilisent l’application dans leur quotidien, ils gagnent en rapidité et en efficacité.</p>
      <p>Demain, une fonctionnalité essentielle pourrait être ajoutée, visant à pouvoir donner des accès à la plateforme directement à des invités via un lien par e-mail.</p>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Ce projet représente une expérience unique pour moi, car il s’agit de mon premier projet en entreprise où j’ai dû faire preuve d’autonomie et être responsable des modifications que je réalisais. J’ai eu l’opportunité de rencontrer des collaborateurs qui m’ont énormément appris. J’ai pu avoir une vision interne de la méthodologie d’un projet en entreprise avec toute l’organisation que cela demande.</p>
      <p>Cette expérience m’a permis de développer de nombreuses compétences que je pourrais mettre à profit tout au long de ma carrière de développeur full stack. J’ai aussi dû apprendre à vulgariser mon discours en fonction de mon interlocuteur, à identifier les besoins de chaque partie prenante et à expliquer de manière simple les aspects techniques. De plus, cette première expérience en entreprise m’a consolidé dans mon choix de continuer dans le développement full stack.</p>
      <br></br>
      <br></br>
      <h3>Compétences associées</h3>
      <div className="realised_container">
        <Link to="/competences/Autonomie" className="realised_button">Autonomie</Link>
        <Link to="/competences/Adaptabilite" className="realised_button">Adaptabilité</Link>
        <Link to="/competences/Communication" className="realised_button">Communication</Link>
        <Link to="/competences/Agile" className="realised_button">Agile</Link>
        <Link to="/competences/Angular" className="realised_button">Angular</Link>
        <Link to="/competences/C" className="realised_button">C#</Link>
        <Link to="/competences/SQL" className="realised_button">SQL</Link>
        <Link to="/competences/UnitTest" className="realised_button">UnitTest</Link>
        <Link to="/competences/XML" className="realised_button">XML</Link>
      </div>
    </div>
);
}

export default eRec