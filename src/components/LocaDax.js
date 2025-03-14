import React from 'react';
import { Link } from "react-router-dom";
function LocaDax() {
  return (
    <div className="container_components">
      <h1>LocaDax</h1>
      <h3 className="subtitle">Présentation</h3>
      <p>La ville de Dax souhaitait moderniser leur manière de gérer les archives des entreprises présentes à Dax. Pour ce faire, elle souhaitait avoir un logiciel qui leur permettrait de remplacer ces archives, qui commencent à compliquer la gestion des données d’une entreprise.</p>
      <br></br>
      <h3 className="subtitle">Lancement du projet</h3>
      <p>Ce logiciel devait permettre de remplacer les archives de l’ensemble des locaux commerciaux de toutes les entreprises de la ville de Dax. Le but de ce logiciel serait de pouvoir ajouter, modifier et supprimer des locaux commerciaux par rapport à leur emplacement, avec le nom de la rue en question. Le même fonctionnement devait être présent pour les propriétaires des locaux commerciaux. Il fallait qu’ils puissent avoir accès au profil des propriétaires et qu’ils puissent les ajouter aux locaux qu’ils possèdent.</p>
      <p>De plus, ils souhaitaient pouvoir accéder à un tableau de statistiques sur le nombre de types de commerce présents par rapport aux rues, ainsi que le pourcentage de types de commerce dans l’ensemble de la ville, avec un système d’exportation automatique qui leur enverrait les données chaque année. Un système de filtres permettrait d’accéder rapidement aux locaux ainsi qu’à un propriétaire, ce qui permettrait d’avoir de meilleures informations sur les locaux disponibles dans une rue spécifique, un prix spécifique ou une superficie spécifique, par exemple, pour que de nouveaux acheteurs potentiels puissent en acquérir, ce qui n’était pas possible avant que le logiciel soit développé.</p>
      <br></br>
      <h3 className="subtitle">Les étapes</h3>
      <p>La première étape essentielle a été la récupération de la charte graphique de la ville de Dax pour créer un logiciel qui représenterait correctement la ville.</p>
      <p>Grâce aux échanges effectués avec le commanditaire, nous avons pu établir une base de données conforme aux attentes.</p>
      <p>Nous avons conçu une structure de base de données permettant de stocker les informations relatives aux locaux, aux porteurs de projet et aux statistiques souhaitées.</p>
      <p>L'application permet d'enregistrer et de suivre les porteurs de projet.</p>
      <p>Chaque porteur de projet peut définir ses critères de recherche pour trouver un local, facilitant ainsi l'attribution des espaces commerciaux disponibles en fonction des besoins.</p>
      <p>Nous avons par la suite mis en place un module de création et de gestion des locaux commerciaux.</p>
      <p>Chaque local peut être ajouté avec une description détaillée, des photos multiples et des informations essentielles telles que la superficie et la localisation.</p>
      <p>Un module a été intégré pour définir les prix des locaux vacants.</p>
      <p>Nous avons développé un module permettant d'analyser la vacance des locaux en fonction de différents critères : taille, rue et type d'activité.</p>
      <p>Cela permet au client d'identifier les zones où les locaux sont les plus vacants et d'en tirer des conclusions sur le dynamisme économique de la ville.</p>
      <p>Nous avons également mis en place une cartographie interactive pour visualiser ces locaux sur une carte dynamique.</p>
      <p>Enfin, nous avons ajouté un système d’exportation de données sous divers formats pour assurer un suivi optimal.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>D’un point de vue personnel, ce projet m’a permis d’approfondir mes compétences en C# et en WPF. Grâce à un projet avec de nombreuses fonctionnalités, j’ai pu m’améliorer techniquement en C# et en WPF.</p>
      <p>Avec ces nombreuses fonctionnalités, cela m’a permis de développer une méthodologie efficace pour la recherche et la correction des erreurs, ainsi que la nécessité de devoir m’auto-former efficacement.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Lors de la finalisation du projet, la ville de Dax était très satisfaite de l’ensemble du logiciel que nous avons développé. L’ensemble des fonctionnalités demandées au départ ainsi qu’en cours de route ont été développées et testées pour éviter de futurs problèmes.</p>
      <br></br>
      <h5 className="subtitle">Les acteurs</h5>
      <p>Ce projet a impliqué de nombreux acteurs :</p>
      <ul>
        <li>L'équipe de développement avec qui nous faisions des micro-réunions de 10-15 minutes en début de journée pour faire le point sur les avancées.</li>
        <li>Les salariés de la ville de Dax.</li>
        <li>Les potentiels entrepreneurs qui souhaiteraient investir dans un commerce à Dax.</li>
      </ul>
      <br></br>
      <h5 className="subtitle">Les lendemains du projet</h5>
      <p>À la suite du projet, celui-ci a été utilisé par les membres de la ville de Dax ainsi que des potentiels investisseurs. Nous n’avons pas eu de retour sur d’éventuels bugs ou erreurs que le logiciel aurait pu avoir.</p>
      <p>Actuellement, le logiciel pourrait être utilisé dans de nombreuses villes qui souhaiteraient moderniser leur organisation interne dans la gestion de leurs locaux commerciaux.</p>
      <p>Malheureusement, pour le moment, seule la ville de Dax utilise notre logiciel. Nous espérons que celui-ci sera déployé dans d’autres villes françaises dans un futur proche.</p>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Au départ du projet, j’ai eu quelques doutes sur la réussite du projet compte tenu de l’ensemble des fonctionnalités qui nous avaient été demandées, ainsi que des ajouts en cours de développement.</p>
      <p>De plus, pour l’ensemble de l’équipe, le langage C# et le WPF étaient nouveaux. Pour ces raisons, la réussite de ce projet a été une réelle fierté pour moi et pour l’équipe lors de la livraison de celui-ci à la ville de Dax.</p>
      <p>Avec du recul, j’aurais commencé plus tôt la mise en place d’une routine d’apprentissage du langage C# et du WPF. En effet, durant la réalisation des différentes tâches, j’ai senti un manque de connaissance de ma part de ces nouveaux langages.</p>
      <p>Cela était normal puisque j’étais en train de développer mes compétences en même temps que de développer le projet. Je pense tout de même que cela m’aurait permis de développer plus rapidement certaines fonctionnalités en résolvant plus rapidement certaines erreurs rencontrées durant la phase de développement.</p>
      <br></br>
      <h3>Compétences associées</h3>
      <div className="realised_container">
        <Link to="/competences/C" className="realised_button">C#</Link>
        <Link to="/competences/SQL" className="realised_button">SQL</Link>
        <Link to="/competences/Communication" className="realised_button">Communication</Link>
        <Link to="/competences/Agile" className="realised_button">Agile</Link>
      </div>
    </div>
);
}

export default LocaDax