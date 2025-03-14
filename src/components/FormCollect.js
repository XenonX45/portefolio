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
      <p>Actuellement, l’outil remplit l’ensemble des fonctionnalités qu’il devait remplir en optimisant le processus de collecte de l’association AFDAS. Grâce au développement de l’application l’ensemble des fonctionnalités les salariés de l’association AFDAS ont un travail au quotidien moins important en effet l’automatisation de certaine tâche comme le transfert des photos ou l’ajout de chaque ligne dans un Excel à la suite d’une collection se fait automatiquement ce qui est un réel soulagement pour l’association. L’application leur permet aussi j’éviter des erreurs de saisit qui pourrait fausser leur statistique.</p>
      <p>Auparavant, les nouveaux salariés était contraint de devoir apprendre les circuits puis de saisir toutes les données des collectes sur un Excel avec des consignes et des potentiels erreurs au départ. Maintenant, ils peuvent être opérationnel directement après la signature de leur contrat puisse que l’ensemble des itinéraires ainsi que les informations demandées soient affichés sur l’application avec l’automatisation de leur saisit sur l’application qui est directement envoyer dans un dossier prédéfinie avec les photos envoyer sur un Google Drive. Le suivi des passages des salariés est donc plus simple à traiter.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Tout au long du projet, j'ai maintenu un contact étroit avec la direction d’AFDAS afin de discuter des orientations futures de leur application Android. Leurs retours et leurs directives étaient essentiels pour m'assurer que l'outil réponde aux attentes et aux besoins de l’association.</p>
      <p>Grâce à ces échanges réguliers, cela m’a permis de mieux comprendre les attentes du commanditaire pour que je puisse développer correctement chaque besoin spécifique qu’il avait.</p>
      <p>La communication régulière avec le directeur et les salariés de l’association a été cruciale pour le succès du projet, en m'assurant que toutes les parties étaient alignées sur les objectifs et en permettant une prise de décision éclairée tout au long du processus de développement.</p>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>Aujourd’hui, le projet a atteint son objectif initial en offrant la possibilité de suivre complètement la phase de collecte jusqu'à la transmission des données.</p>
      <p>Demain, plusieurs nouvelles fonctionnalités pourraient être ajoutées à l'outil existant, visant à améliorer davantage l'efficacité et la productivité des salariés d'AFDAS. Voici quelques-unes de ces fonctionnalités potentielles :</p>
      <ul>
        <li>Un système de GPS plus avancé : Actuellement, nous avons développé un GPS via Google Maps. Une amélioration future serait le développement d’un GPS indépendant, ce qui permettrait d’éviter les dépendances envers Google Maps ainsi que les mises à jour futures pouvant altérer la productivité des employés.</li>
        <br></br>
        <li>Une application Web : Un suivi en temps réel sur une carte interactive via une application Web pourrait permettre un meilleur suivi de chaque salarié, ainsi qu’un potentiel ajout leur permettant de modifier directement les circuits prédéfinis depuis cette application Web. Un fichier de configuration pourrait être utilisé pour modifier le dossier où l’ensemble des fichiers Excel pourrait être placé.</li>
      </ul>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Ce projet représente une expérience unique pour moi, car il s'agit de mon premier projet de développement d’une application mobile. J'ai été entièrement responsable avec l’équipe. Tout au long du processus de développement, j'ai eu l'opportunité d'interagir directement avec le directeur de l’association AFDAS. Une communication claire et efficace était essentielle pour assurer une compréhension mutuelle avec le commanditaire.</p>
      <p>Cette expérience m'a permis de développer mes compétences en communication, tant sur le plan technique que non technique. J'ai appris à adapter mon discours en fonction de mon interlocuteur, à identifier les besoins spécifiques de chaque partie prenante et à expliquer les aspects techniques de manière compréhensible pour tous. Cette capacité de vulgarisation a été essentielle pour maintenir une collaboration harmonieuse et obtenir le soutien nécessaire tout au long du projet.</p>
      <p>Ce projet a été une véritable révélation pour moi quant à l'importance de la perspective utilisateur. J'ai réalisé que la vision que nous avons en tant que développeurs d'une fonctionnalité peut différer de celle de l'utilisateur final. Il est donc crucial de guider et d'accompagner les utilisateurs tout au long de leur expérience avec l'outil.</p>
      <p>Avec du recul, je me rends compte que la réalisation de ce projet aurait gagné en efficacité si nous avions eu plus de connaissances en développement d’applications Android.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className="realised_container">
        <Link to="/competences/Java" className="realised_button">Java</Link>
        <Link to="/competences/XML" className="realised_button">XML</Link>
        <Link to="/competences/Communication" className="realised_button">Communication</Link>
        <Link to="/competences/Agile" className="realised_button">Agile</Link>
      </div>
    </div>
);
}

export default FormCollect