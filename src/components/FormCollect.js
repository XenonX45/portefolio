import React from 'react';
import { Link } from "react-router-dom";
function FormCollect() {
  return (
    <div className="container_components">
      <h1>FormCollect</h1>
      <h3 className="subtitle">Présentation</h3>
      <p>L’association AFDAS souhaitait moderniser le fonctionnement de collection dans les points relais qu’il devait gérer dans l’agglomération d’Agen. Pour faire cela, il souhaitait que nous développions une application Android qu’il pourrait utiliser plutôt que d’utiliser du papier.</p>
      <br></br>
      <h3 className="subtitle">Lancement du projet</h3>
      <p>Pour réaliser cette application mobile, il fallait dans un premier temps avoir une bonne organisation du projet et le réaliser par étapes, car durant la collecte d’informations, il y avait tout un processus à suivre.</p>
      <p>Leur premier objectif, via cette application, était d’éviter de devoir connaître les trajets qu’ils devaient réaliser pour leur collecte grâce à l’application, et d’éviter aussi tout oubli potentiel du papier avec les données sur les collections, puisque les données seraient directement sauvegardées. Il y avait aussi une demande d’application mobile, car la ville d’Agen demandait à l’association de faire une prise de photo avant et après le passage pour voir si tout avait bien été nettoyé, ainsi que de réaliser un Excel qui recenserait l’ensemble des données des collectes et les photos d’avant/après.</p>
      <p>L’enjeu du projet était de taille, en effet, l’association perdait beaucoup de temps durant les collections avec des trajets pour les récupérations qui pouvaient ne pas être optimisés par rapport à la circulation actuelle. L’ensemble des informations des collections devait être renseigné dans un Excel, ce qui générait beaucoup de perte de temps pour chaque employé de l’association. Cette application mobile allait permettre à l’association de gagner beaucoup de temps dans l’ensemble de leurs tâches quotidiennes.</p>
      <p>De nombreux risques étaient présents, comme le fait que c’était pour l’équipe de développement la première fois que l’on développait une application mobile Android. Cela était un réel challenge pour l’ensemble de l’équipe de développement.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>Pour commencer, nous devions dans un premier temps nous organiser avec les membres de l’équipe pour réussir à faire chacun une partie de l’application qui nous avait été demandée.</p>
      <p>La première étape consistait à faire une page d’accueil qui permettrait aux employés de l’AFDAS de pouvoir rentrer leur nom et prénom pour qu’ils puissent être enregistrés en tant qu’un tel. Il fallait aussi mettre en place des circuits prédéfinis par la ville d’Agen selon les horaires de passage des salariés. On a dû développer un GPS qui permettait, selon le circuit sélectionné, de faire l’ensemble de l’itinéraire le plus optimisé.</p>
      <p>Par la suite, il fallait mettre en place le système d’appareil photo pour que l’application puisse sauvegarder les photos d’avant et d’après le passage des salariés avec un nom de photo qui serait modifié automatiquement après la prise des photos pour une meilleure gestion des photos qui seront sauvegardées dans un drive à leur retour de collecte.</p>
      <p>Pour finir, à la fin de la collection, un aperçu de leur entrée dans le formulaire leur était présenté pour qu’ils puissent vérifier qu’il n’y ait pas eu de faute de frappe. Si cela se produisait, ils pouvaient modifier sans problème les entrées du formulaire. Puis, les informations étaient sauvegardées dans l’appareil.</p>
      <p>La dernière étape de cette application était de transmettre l’ensemble des données récoltées. Pour ce faire, nous avons ajouté pour les photos un Google Drive qui nommait les photos automatiquement puis les transmettait directement dans celui-ci. Pour les informations des collections, nous générions automatiquement un Excel avec l’ensemble des données renseignées avec le nom et prénom de la personne qui avait fait cette collecte.</p>
      <p>Une fois l’application terminée, nous avons réalisé une version .apk de celle-ci avec un manuel d’installation pour que l’AFDAS puisse faire l’installation de notre application sur l’ensemble de leurs appareils.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>Ce projet m’a permis de m’impliquer dans l’ensemble du processus de développement d’une application Android. De plus, ce projet a été ma première expérience de développement d’une application Android en plus d’aider une association dans leur travail au quotidien. Auparavant, je n’avais jamais eu l’occasion de gérer la partie de l’installation ou l’hébergement d’une application. Grâce à ce projet, j’ai pu réaliser cela.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Actuellement, l’outil remplit l’ensemble des fonctionnalités qu’il devait remplir en optimisant le processus de collecte de l’association AFDAS. Grâce au développement de l’application, l’ensemble des fonctionnalités permet aux salariés de l’association AFDAS d’avoir un travail quotidien moins important.</p>
      <p>L’application leur permet aussi d’éviter des erreurs de saisie qui pourraient fausser leurs statistiques. Auparavant, les nouveaux salariés étaient contraints d’apprendre les circuits puis de saisir toutes les données des collectes sur un Excel avec des consignes et des potentielles erreurs. Maintenant, ils peuvent être opérationnels immédiatement.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Tout au long du projet, j'ai maintenu un contact étroit avec la direction d’AFDAS afin de discuter des orientations futures de leur application Android.</p>
      <p>Grâce à ces échanges réguliers, cela m’a permis de mieux comprendre les attentes du commanditaire pour que je puisse développer correctement chaque besoin spécifique qu’il avait.</p>
      <p>La communication régulière avec le directeur et les salariés de l’association a été cruciale pour le succès du projet.</p>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>Aujourd’hui, le projet a atteint son objectif initial en offrant la possibilité de suivre complètement la phase de collection à la transmission des données.</p>
      <p>Demain, plusieurs nouvelles fonctionnalités pourraient être ajoutées à l'outil existant, visant à améliorer davantage l'efficacité et la productivité des salariés d'AFDAS. Voici quelques-unes de ces fonctionnalités potentielles :</p>
      <ul>
        <li>Un système de GPS plus avancé.</li>
        <li>Une application Web pour le suivi en temps réel.</li>
      </ul>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Ce projet représente une expérience unique pour moi.</p>
      <p>Cette expérience m'a permis de développer mes compétences en communication.</p>
      <p>Ce projet a été une véritable révélation pour moi quant à l'importance de la perspective utilisateur.</p>
      <p>Avec du recul, je me rends compte que la réalisation de ce projet aurait gagné en efficacité.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className='realised_button'></div>
    </div>
);
}

export default FormCollect