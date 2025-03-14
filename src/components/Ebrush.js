import React from 'react';
import { Link } from "react-router-dom";
function Ebrush() {
  return (
    <div className="container_components">
      <h1>Ebrush</h1>
      <h3 className="subtitle">Présentation</h3>
      <p>Ebrush est une application web faisant partie d’une plus grande application nommée FTEMenu. Cette application a pour but d’aider les ingénieurs navigants chez Airbus durant leur configuration pour leurs tests en vol.</p>
      <br></br>
      <h3 className="subtitle">Lancement du projet</h3>
      <p>L’application Ebrush fait partie de FTEMenu, une application web embarquant trois applications dont Ebrush. Ebrush a vu le jour en juillet 2024, lors de mon entrée sur le projet chez l’équipe WebFTI. L’objectif de FTEMenu était de remplacer un logiciel client lourd que les ingénieurs navigants d’Airbus trouvaient peu ergonomique et peu pratique à utiliser au quotidien.</p>
      <p>En effet, ce logiciel permettait de préconfigurer des fichiers sur une clé USB qui devait être par la suite copiée manuellement sur l’avion. De plus, le service de sécurité d’Airbus considérait que ces clés USB n’étaient pas assez sécurisées, car elles pouvaient transmettre facilement des virus ou d’autres problèmes. Airbus souhaitait donc rapidement trouver une alternative avant de les interdire aux ingénieurs navigants.</p>
      <p>C’est à la suite de cela que FTEMenu a été développé dans le but de résoudre les problèmes mineurs d’ergonomie du logiciel ainsi que le problème majeur lié à l’utilisation des clés USB, qui allaient être interdites par le service de sécurité d’Airbus.</p>
      <p>FTEMenu allait permettre de gérer les copies des fichiers configurés directement à distance, supprimant ainsi le besoin d’utiliser des clés USB. L’application Ebrush, intégrée à FTEMenu, permet aux ingénieurs navigants de préparer leurs fichiers de configuration au sol pour les retrouver directement dans l’avion, ainsi que de récupérer les configurations des autres collègues navigants.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>Pour réaliser cette application, plusieurs étapes ont été nécessaires. La première consistait à concevoir une maquette graphique de l’application afin de valider avec le client si la nouvelle ergonomie convenait aux ingénieurs navigants.</p>
      <p>Ensuite, j’ai développé l’ensemble de l’application, en commençant par la partie front-end. J’ai conçu l’interface graphique, puis j’ai implémenté plusieurs fonctionnalités essentielles pour les ingénieurs navigants.</p>
      <p>L’interface se compose de 8 colonnes appelées « Tracks » (pistes en français), avec au-dessus de chacune d’elles deux lignes de paramètres utilisés quotidiennement par les ingénieurs navigants pendant leurs tests en vol. Ma première tâche a été de gérer l’interaction entre la ligne du haut et la ligne du bas, qui doivent être séparées en termes de fonctionnalités.</p>
      <p>Puis, j’ai développé l’affichage des données des paramètres lorsqu’un utilisateur entre entre 1 et 8 paramètres selon la ligne sélectionnée. J’ai utilisé une instance d’une classe nommée « ParameterSearch », une classe générique permettant de sélectionner des paramètres d’avion et de stocker ces valeurs afin de rafraîchir l’affichage lorsque des modifications sont effectuées.</p>
      <p>Une fois les paramètres affichés, j’ai ajouté la gestion des fonctionnalités telles que les valeurs « min » et « max » utilisées pour l’altitude de l’avion durant les tests de vol, la précision des données, et des flèches permettant de décaler les paramètres vers la droite ou la gauche. J’ai également intégré un clic droit permettant de supprimer un paramètre ou de créer un alias pour modifier son nom sur l’affichage.</p>
      <p>Une étape essentielle pour les ingénieurs navigants était la gestion des sessions. J’ai mis en place une liste prédéfinie de 64 slots permettant aux navigants de sauvegarder leur session actuelle et d’accéder à leur configuration dans l’avion. Une liste déroulante permet de choisir la session souhaitée, avec un nom par défaut tel que « 00_Default_Menu », dont le numéro change selon l’emplacement.</p>
      <p>Enfin, j’ai ajouté une fonctionnalité de sauvegarde avec un popup affichant les configurations de la session en cours. Ce popup offre plusieurs options : copier une configuration, coller une configuration copiée, revenir à la configuration par défaut, renommer la session, ou encore copier une configuration depuis un autre utilisateur. Les modifications sont appliquées via un bouton « Apply » ; si ce bouton n’est pas cliqué, aucun changement n’est sauvegardé. Une fois appliquées, les modifications sont directement visibles dans Ebrush.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>Je suis très fier de ce que j’ai pu accomplir. L’application a été un réel succès. J’ai appris de nombreuses techniques que je ne connaissais pas, tant au niveau du style graphique que dans la mise en place des différentes fonctionnalités de l’application.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Airbus a été très satisfait de l’application que nous avons produite. Toutes les fonctionnalités demandées ont été implémentées. Lors de la présentation, les ingénieurs navigants n’ont fait aucune remarque négative sur l’application, ce qui prouve que le travail a été correctement effectué.</p>
      <br></br>
      <h3 className="subtitle">Les acteurs</h3>
      <p>Durant le projet, trois acteurs principaux étaient impliqués :</p>
      <ul>
        <li>L’équipe WebFTI, composée de 4 développeurs et une scrum master.</li>
        <li>Le product owner.</li>
        <li>Les ingénieurs navigants.</li>
      </ul>
      <p>Tout au long du développement, j’ai maintenu une bonne communication avec le product owner afin d’assurer que chaque étape du projet corresponde aux attentes du client.</p>
      <p>Avec l’équipe WebFTI, une bonne communication et la réactivité de chaque membre ont permis de surmonter les différentes difficultés rencontrées et de toujours trouver des solutions adaptées.</p>
      <br></br>
      <h3 className="subtitle">Les lendemains du projet</h3>
      <p>Actuellement, l’application est fonctionnelle et intégrée à FTEMenu. Cependant, elle n’est pas encore déployée en production, car l’ensemble des applications de FTEMenu doit être finalisé avant un déploiement prévu pour mai 2025.</p>
      <p>Concernant l’avenir du projet, aucune demande de modification spécifique pour Ebrush n’a été faite pour le moment. Toutefois, des changements ont été demandés concernant le système d’importation de l’application globale FTEMenu, affectant toutes les applications, y compris Ebrush. Ces modifications sont actuellement en cours de développement.</p>
      <br></br>
      <h3 className="subtitle">Mon point de vue</h3>
      <p>Je suis très fier du design global de l’application Ebrush, qui est ergonomique et qui a pleinement satisfait les ingénieurs navigants lors de sa présentation finale.</p>
      <p>Les tâches que j’ai réalisées ont largement contribué au succès du projet.</p>
      <p>Ce projet m’a permis de développer de nombreuses compétences grâce aux membres expérimentés de mon équipe. J’ai appris des techniques d’optimisation et de maintenabilité du code que je ne connaissais pas auparavant, ce qui m’a énormément apporté pour mes futurs projets.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className="realised_container">
        <Link to="/competences/Autonomie" className="realised_button">Autonomie</Link>
        <Link to="/competences/Adaptabilite" className="realised_button">Adaptabilité</Link>
        <Link to="/competences/Communication" className="realised_button">Communication</Link>
        <Link to="/competences/Agile" className="realised_button">Agile</Link>
      </div>
    </div>
);
}

export default Ebrush