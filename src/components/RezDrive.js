import React from 'react';
import { Link } from "react-router-dom";
function RezDrive() {
  return (
    <div className="container_components">
      <h1>Rez Drive</h1>
      <h3 className="subtitle">Présentation</h3>
      <p>Le but de l’équipe Rez Drive était de développer une application web pour l'école de conduite Michelet, située à Montauban. L’objectif de cette application web était de moderniser l’organisation interne via des plannings dynamiques spécifiques à chaque membre présent dans l’établissement de l’auto-école.</p>
      <br></br>
      <h3 className="subtitle">Lancement du projet</h3>
      <p>Ce projet avait pour but de créer un planning flexible et dynamique pour une auto-école. L'idée était de développer une application web qui faciliterait l'organisation des cours de conduite, l'attribution des moniteurs et la gestion des disponibilités grâce à une API en Java et un front-end en Angular.</p>
      <p>L’objectif principal de cette application était de rendre la planification et l'organisation des cours plus intuitive. Les élèves devaient pouvoir réserver et modifier leurs leçons facilement en fonction des créneaux disponibles, tandis que les moniteurs avaient accès à un outil pour organiser leur emploi du temps. Un système de notifications et un module de communication ont aussi été intégrés pour simplifier les échanges entre l’auto-école et ses utilisateurs.</p>
      <p>L’un des plus gros défis était d’assurer une bonne synchronisation des données pour que tout le monde ait les informations les plus à jour. Avec des disponibilités qui changent souvent, il fallait éviter les conflits d’horaires et permettre aux moniteurs comme aux élèves de toujours voir les créneaux les plus récents sans avoir à rafraîchir manuellement leur page.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>La première chose que j’ai faite a été de développer l’API en Java. J’ai structuré plusieurs routes pour optimiser le traitement des requêtes et améliorer les performances. Cela m’a obligé à développer certaines requêtes SQL afin de réduire les temps de réponse et éviter les ralentissements.</p>
      <p>Ensuite, je me suis attaqué au front-end en Angular. En effet, une version en PHP du front-end existait déjà. J'ai dû faire une refonte du design de l'application web. Cela a demandé de mettre à jour les composants, d’adapter certaines fonctionnalités pour assurer la compatibilité avec les nouvelles versions et d’améliorer l'affichage dynamique pour que l’expérience utilisateur soit plus fluide.</p>
      <p>Pour éviter les conflits et s’assurer que les disponibilités des moniteurs et des élèves soient toujours à jour, j’ai intégré les WebSockets. Grâce à cette technologie, les informations sont mises à jour en temps réel, ce qui évite les doublons et les erreurs de réservation. Avant, il fallait actualiser la page pour voir les nouvelles disponibilités, maintenant tout est instantané.</p>
      <p>Un autre point important a été l’ajout d’un système de notifications, qui permet d’alerter les élèves quand un cours approche et d’envoyer des rappels aux moniteurs en cas de changements dans leur planning. Ces notifications fonctionnent à la fois par email et via des alertes push, ce qui garantit que tout le monde reçoit les informations à temps.</p>
      <p>L’un des gros défis du projet a été de s’assurer que tout fonctionne bien ensemble, car avec des plannings qui changent souvent, il fallait que les mises à jour soient visibles immédiatement et que tout reste bien synchronisé.</p>
      <p>Pour être sûr que l’application réponde bien aux besoins des utilisateurs, j’ai mis en place des tests avec des élèves et des moniteurs. Grâce à leurs retours, j’ai pu corriger certains problèmes et ajuster l’interface pour la rendre plus intuitive.</p>
      <p>Avec toutes ces améliorations, l’auto-école dispose maintenant d’un outil performant et moderne qui facilite la planification des sessions et améliore la communication entre les élèves et les moniteurs. Les élèves peuvent réserver leurs créneaux en toute simplicité, tandis que les moniteurs ont une vision claire de leur emploi du temps, le tout sans prise de tête.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>D’un point de vue personnel, ce projet m’a permis d’acquérir une première expérience avec le framework spécialisé en front-end, Angular. C'était une expérience enrichissante de mettre à jour un site web vers une application web avec une base de données ainsi qu’une API REST, même si cela pouvait parfois être complexe de trouver l'origine de certaines erreurs. Cela m'a également permis de développer une méthodologie plus efficace pour la recherche et la correction d'erreurs.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>L’école de conduite Michelet a été très satisfaite du résultat. La modification de leur site web statique vers une application web dynamique leur permet maintenant de gagner beaucoup de temps grâce à une organisation numérique plus précise et plus facile qu’avec leur ancien fonctionnement.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Ce projet avait deux acteurs :</p>
      <ul>
        <li>L’équipe de développement constituée de cinq développeurs.</li>
        <li>La directrice de l’école de conduite.</li>
      </ul>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>Bien que l’ensemble des demandes du commanditaire ait été réalisé, l’application web n’a pas encore été mise en ligne. La directrice de l’école de conduite Michelet avait fait appel à des développeurs pour l’hébergement du site web statique, mais pas pour la mise en place de notre application web.</p>
      <p>De plus, aucune mise à jour spécifique n’a été demandée de leur part.</p>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Ce projet complet a été une réelle première expérience dans le développement d’application web avec l’utilisation de mon premier framework Angular pour la partie front-end. Le développement d’un planning dynamique ainsi que d’une API REST est un vrai plus pour mon profil d’expert en ingénierie du logiciel et ma future carrière en tant que développeur Full Stack.</p>
      <p>Néanmoins, il est dommage que la commanditaire n’ait pas pu mettre en place l’hébergement de l’application web, qui aurait été une réelle plus-value pour l’organisation de son entreprise.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className='realised_button'></div>
    </div>
);
}

export default RezDrive