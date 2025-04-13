import React from 'react';
import { Link } from "react-router-dom";
function SQL() {
  return (
    <div className="container_components">
      <h1>SQL</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>SQL (Structured Query Language) est un langage informatique utilisé pour la gestion des bases de données relationnelles. C’est un langage extrêmement utilisé par les développeurs et très populaire dans la gestion de bases de données. Il est reconnu pour sa puissance et sa praticité. Avec SQL, nous pouvons supprimer, modifier et créer des données ainsi que les récupérer et les trier.</p>
      <p>SQL est l’un des langages les plus utilisés en entreprise. En effet, SQL permet de gérer les données confidentielles des entreprises comme les informations personnelles de leurs clients, leurs produits et leurs employés. Grâce à la praticité de SQL, il est facilement possible de stocker, récupérer et organiser les données de manière sécurisée. De plus, SQL est extrêmement utilisé lors du développement de projets de sites web dynamiques ou d’applications. Sa polyvalence en fait un outil essentiel et utile dans le domaine de la manipulation de bases de données et du développement.</p>
      <p>En 2022, SQL a bénéficié d'une importante mise à jour qui a permis d'améliorer ses performances, sa sécurité et sa disponibilité. Lorsque l'on compare la version SQL 2022 à SQL 2019, selon les informations fournies par le site de Microsoft, on constate clairement l'ajout d'un grand nombre de nouvelles fonctionnalités et d'améliorations.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>Durant mon stage chez Capgemini Engineering, j’ai participé à l’amélioration d’une application web appelée eRec. Cette application avait pour but d’aider les recruteurs en interne de Capgemini France dans leur démarche de recrutement grâce à un planning dynamique.</p>
      <p>Étant dans une équipe de trois personnes, il fallait que je sois efficace dans la réalisation de nouvelles fonctionnalités.</p>
      <p>eRec est une application très volumineuse avec énormément de données, dont beaucoup de données confidentielles puisqu’il y avait les informations des candidats, des recruteurs, etc. Il y avait plusieurs dizaines de tables.</p>
      <p>Suite à des problèmes de gestion, les recruteurs avaient besoin de pouvoir exploiter une colonne recensant 11 000 candidats en ajoutant un système d’exportation de la colonne au format CSV. Pour réaliser cela, j’ai dû faire une mise à jour majeure de l’une des tables. J’ai ajouté une vue dans la table candidats pour permettre de faire cette exportation. Cela a permis, grâce à la nouvelle vue que j’avais développée, d’optimiser l’exportation. L’ancienne exportation prenait 2 minutes, avec la vue, elle prenait 2 millisecondes.</p>
      <p>Sur un autre projet RezDrive une application de planning dynamique utilisant du Java et du SQL. J’ai conçu une base SQL avec des relations bien normalisées un utilisateur pouvait appartenir à un lycée, avoir plusieurs rendez-vous et recevoir des notifications. J’ai utilisé des clés étrangères et créé des vues pour faciliter la gestion dans l’interface administrateur.</p>
      <p>À un moment, je devais afficher une liste de membres avec leur lycée et leurs rendez-vous à venir. J’ai créé une requête SQL avec plusieurs jointures et filtres dynamiques sur le rôle, la date et le lycée. Cela m’a permis de fournir un endpoint API optimisé et cela a rendu la recherche efficace du côté Angular.</p>
      <p>Pour sécuriser le back-end, j’ai mis en place des requêtes préparées et j’ai validé toutes les données côté serveur avant de les insérer. J’ai aussi limité les droits en base via des rôles utilisateurs avec le rôle administrateur qui était le seul à pouvoir modifier les plannings.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>Bien que j’aie encore beaucoup de choses à apprendre pour prétendre au titre d’expert en SQL, j’estime que les bases acquises ainsi que mes compétences en bases relationnelles avancées me permettent de me considérer à un niveau confirmé dans ce langage. Je compte continuer mon apprentissage dans cette compétence même si, actuellement, je l’utilise beaucoup moins au sein de mon projet actuel.</p>
      <p>SQL est le langage le plus utilisé dans les entreprises et chez les développeurs full stack pour la gestion de bases de données. C’est pour cette raison qu’il était essentiel pour moi d’avoir un bon niveau dans ce langage. SQL est l’un des langages avec le plus d’informations et de tutoriels, ce qui m’a permis de rapidement monter en compétence dessus.</p>
      <p>Avec l’expérience que j’ai accumulée, je conseillerais de commencer l’apprentissage du langage SQL par les bases via des tutoriels ou directement via la documentation de SQL. Avoir des fondations solides permettra à quiconque d’avancer correctement avec de bonnes bases. Je conseille de ne pas vouloir avancer trop vite sans avoir bien compris les bases de SQL, cela pourrait faire perdre plus de temps lorsque les tâches deviendront plus complexes.</p>
      <p>À moyen terme, je souhaite avoir un niveau expert en SQL, car c’est un langage qui est présent dans de nombreux projets. Mon but est de pouvoir réaliser des tâches complexes en toute autonomie ainsi que de développer les bonnes pratiques pour avoir une base de données bien conçue mais aussi optimisée, afin de faciliter un maximum la compréhension de mon code pour les futurs développeurs.</p>
      <p>Pour atteindre cet objectif, je vais réaliser des bases de données de test avec des techniques de développement plus poussées via des tutoriels sur SQL avec un niveau expert, ce qui me permettra d’améliorer drastiquement mon niveau sur la conception de bases de données SQL.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/eRec" className="realised_button">eRec</Link>
        <Link to="/realisations/RezDrive" className="realised_button">RezDrive</Link>
        <Link to="/realisations/LocaDax" className="realised_button">LocaDax</Link>
      </div>
    </div>
);
}

export default SQL