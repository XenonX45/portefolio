import React from 'react';
import { Link } from "react-router-dom";
function Angular() {
  return (
    <div className='container_components'>
      <h1>Angular</h1>
      <h3 class="subtitle">Introduction</h3>
      <p>Angular est un framework (outil pour les développeurs) open-source apparu en septembre 2016, développé et maintenu par Google. Il est utilisé pour développer des applications web dynamiques, interactives et performantes, en particulier des SPA (Single Page Applications). Angular utilise TypeScript, un langage typé basé sur JavaScript. TypeScript permet de nombreuses fonctionnalités comme les types statiques, les interfaces et les classes avancées, ce qui rend le code plus robuste et plus facile à maintenir. Angular est caractérisé par de nombreuses fonctionnalités comme les composants, les directives, les templates, les routes, les modules et bien plus encore.</p>
      <p>Toutes ces caractéristiques font d'Angular une compétence indispensable à maîtriser au sein d’une entreprise. En effet, Angular fait partie des meilleurs frameworks front-end qui existent sur le marché, ce qui en fait une compétence activement recherchée par les entreprises.</p>
      <p>Selon des statistiques récentes, Angular est utilisé par environ 0,4 % des sites web connus, couvrant 8,4 % des 1 million de pages web les plus performantes au monde. Aux États-Unis, plus de 1,5 million de sites web utilisent Angular. Les plus grands leaders du marché tels que Google, Microsoft, IBM, PayPal et Upwork intègrent Angular dans leurs projets, ce qui prouve sa fiabilité et sa robustesse.</p>
      <br></br>
      <h3 class="subtitle">Mon expérience vécue</h3>
      <p>Durant ma première expérience sur eRec, j’ai pu réaliser de nombreuses fonctionnalités utiles pour les utilisateurs de l’application web grâce à Angular. L’une des tâches qui a nécessité le plus l’utilisation du framework Angular était l’ajout de KPI (Key Performance Indicator) pour les personnes sous RQTH (Reconnaissance de la Qualité de Travailleur Handicapé). À la suite de demandes de mon entreprise sur la nécessité d’ajouter des KPI pour les personnes en situation de RQTH, j’ai développé plusieurs graphiques permettant d’avoir un aperçu des statistiques des collaborateurs de Capgemini en situation de RQTH. L’utilisation d’Angular a permis la réalisation de ces graphiques.</p>
      <p>En effet, pour réaliser ces graphiques, de nombreux outils qu’Angular propose ont été utiles, comme les composants, qui m’ont permis de créer le composant RQTH via l’utilisation de TypeScript. De plus, grâce aux services Angular, j’ai également mis en place une communication efficace avec une API REST qui gérait la base de données de l’application. Avec l’utilisation d’Angular Material, j’ai pu concevoir une interface moderne pour l’affichage des KPI tout en gérant efficacement des données volumineuses grâce aux observables RxJS intégrés à Angular.</p>
      <br></br>
      <h3 class="subtitle">Mon niveau de compétence</h3>
      <p>Je considère que mon niveau de compétence dans le développement Angular est confirmé. En effet, durant l’ensemble de mon stage de six mois, j’ai pu approfondir mes connaissances dans cette technologie. Cependant, je pense qu’il me manque encore certains aspects à approfondir, tels que l’utilisation avancée de RxJS ou l’optimisation des performances pour des applications complexes. Je dois également travailler sur ma compréhension des tests unitaires et d’intégration spécifiques à Angular, ainsi que sur des approches comme NgRx pour la gestion d’état global dans des applications plus volumineuses.</p>
      <p>Angular est une compétence cruciale dans mon profil d’expert en ingénierie du logiciel, car elle me permet de contribuer activement à la création d’applications web performantes et modulaires, répondant ainsi aux besoins des utilisateurs. Cela contribue également à approfondir mes connaissances en front-end de manière plus globale.</p>
      <p>Ma vitesse d’acquisition de cette compétence a été assez rapide durant ma période en tant que stagiaire, car j’ai énormément progressé sur des techniques plus avancées que je ne connaissais pas encore à mes débuts avec Angular.</p>
      <p>Pour progresser, je recommande de toujours rester à jour avec les meilleures pratiques et les dernières mises à jour d’Angular, ainsi que de travailler sur des projets concrets pour solidifier ses compétences, comme cela a été le cas pour moi.</p>
      <p>Mon objectif est d’atteindre un niveau d’expertise avancé en Angular, où je serai capable de concevoir des architectures front-end complexes et d’intégrer Angular avec d’autres technologies comme Docker ou Firebase.</p>
      <p>Pour atteindre cet objectif, je vais suivre la formation complète nommée « Advanced Angular » sur le site de formation Pluralsight. Grâce à cette formation, j’espère atteindre un niveau d’expertise avancé en Angular pour réaliser des applications front-end les plus complexes, performantes et optimisées. Je prévois également de contribuer à des projets open-source Angular pour appliquer les conseils et les connaissances que ma formation Pluralsight m’aura apportés.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/RezDrive" className="realised_button">RezDrive</Link>
        <Link to="/realisations/Erec" className="realised_button">eRec</Link>
      </div>
    </div>
  );
}

export default Angular

