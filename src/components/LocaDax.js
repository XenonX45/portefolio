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
      <p>La première étape essentielle a été la récupération de la charte graphique de la ville de Dax pour créer un logiciel qui représentera correctement la ville. Grâce aux échanges effectués avec le commanditaire, nous avons pu établir une base de données conforme aux attentes. Nous avons donc conçu une structure de base de données permettant de stocker les informations relatives aux locaux, aux porteurs de projet et aux statistiques souhaitées.</p>
      <p>L'application permet d'enregistrer et de suivre les porteurs de projet. Chaque porteur de projet peut définir ses critères de recherche pour trouver un local, facilitant ainsi l'attribution des espaces commerciaux disponibles en fonction des besoins.</p>
      <p>J'ai par la suite mis en place un module de création et de gestion des locaux commerciaux. Chaque local peut être ajouté avec une description détaillée, des photos multiples et des informations essentielles telles que la superficie et la localisation. Un module a été intégré pour définir les prix des locaux vacants. Le client peut renseigner les prix en fonction de la superficie des locaux et du type de location ou de vente.</p>
      <p>J'ai intégré la possibilité d'ajouter plusieurs photos pour chaque local afin de mieux illustrer les offres disponibles. Chaque local peut également comporter un descriptif détaillé, facilitant la présentation des biens aux porteurs de projet.</p>
      <p>L'application permet d'exporter les fiches des locaux au format PDF, facilitant ainsi leur diffusion et leur archivage. De plus, les statistiques peuvent être exportées à tout moment selon les besoins. L'outil offre diverses analyses statistiques sous forme de graphiques en histogrammes, bulles et tableaux. Grâce à ces statistiques, nous pouvons obtenir des informations clés sur les tendances du marché immobilier commercial actuel de la ville.</p>
      <p>J'ai pu développé un module permettant d'analyser la vacance des locaux en fonction de différents critères : taille, rue et type d'activité. Cela permet au client d'identifier les zones où les locaux sont les plus vacants et d'en tirer des conclusions sur le dynamisme économique de la ville.</p>
      <p>Le logiciel gère également des statistiques sur la taille des locaux en trois catégories : les surfaces entre 0-50 m², celles entre 50-100 m² et celles de plus de 100 m². Une cartographie des locaux vacants a été mise en place pour permettre de visualiser plus facilement les locaux vacants de la ville.</p>
      <p>Un module permet d'analyser les activités dominantes dans les rues de la ville. L'objectif est d'obtenir une vue d'ensemble des types de commerces présents et d'adapter la stratégie de développement économique en conséquence.</p>
      <p>Le client souhaitait une analyse approfondie des prix des locaux vacants en se basant sur la médiane plutôt que sur la moyenne. Ainsi, j'ai intégré un module permettant de calculer la médiane des prix en fonction de la rue et du type de transaction.</p>
      <p>j'ai mis en place des outils pour analyser les types d'activités que les porteurs de projet souhaitent implanter en ville. L'application permet d'identifier les locaux les plus demandés et ceux qui répondent le mieux aux attentes des entrepreneurs.</p>
      <p>Enfin, une fonction bilan a été ajoutée pour suivre l'activité de la base de données. Le client peut ainsi connaître le nombre de fiches extraites et suivre l'utilisation globale du logiciel.</p>
      <p>Ce projet a permis de développer une solution robuste et adaptée aux besoins de la ville de Dax, en facilitant la gestion des locaux commerciaux et en offrant des outils d'analyse selon leurs besoins.</p>
      <br></br>
      <h3 className="subtitle">Les résultats</h3>
      <h5 className="subtitle">Pour moi</h5>
      <p>D’un point de vue personnel, ce projet m’a permis d’approfondir mes compétences en C# et en WPF. Grâce à un projet avec de nombreuses fonctionnalités, j’ai pu m’améliorer techniquement en C# et en WPF.</p>
      <p>Avec ces nombreuses fonctionnalités, cela m’a permis de développer une méthodologie efficace pour la recherche et la correction des erreurs, ainsi que la nécessité de devoir m’auto-former efficacement.</p>
      <br></br>
      <h5 className="subtitle">Pour l'entreprise</h5>
      <p>Lors de la finalisation du projet, la ville de Dax était très satisfaite de l’ensemble du logiciel que j'ai développé. Les fonctionnalités demandées au départ ainsi qu’en cours de route ont été développées et testées pour éviter de futurs problèmes.</p>
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
      <p>À la suite du projet, celui-ci a été utilisé par les membres de la ville de Dax ainsi que des potentiels investisseurs. Je n'ai pas eu de retour sur d’éventuels bugs ou erreurs que le logiciel aurait pu avoir.</p>
      <p>Actuellement, le logiciel pourrait être utilisé dans de nombreuses villes qui souhaiteraient moderniser leur organisation interne dans la gestion de leurs locaux commerciaux.</p>
      <p>Malheureusement, pour le moment, seule la ville de Dax utilise notre logiciel. J'espérais que celui-ci sera déployé dans d’autres villes françaises dans un futur proche.</p>
      <br></br>
      <h5 className="subtitle">Mon point de vue</h5>
      <p>Au départ du projet, j’ai eu quelques doutes sur la réussite du projet compte tenu de l’ensemble des fonctionnalités qui nous avaient été demandées, ainsi que des ajouts en cours de développement.</p>
      <p>De plus, pour l’ensemble de l’équipe, le langage C# et le WPF étaient nouveaux. Pour ces raisons, la réussite de ce projet a été une réelle fierté pour moi et pour l’équipe lors de la livraison de celui-ci à la ville de Dax.</p>
      <p>Avec du recul, j’aurais commencé plus tôt la mise en place d’une routine d’apprentissage du langage C# et du WPF. En effet, durant la réalisation des différentes tâches, j’ai senti un manque de connaissance de ma part de ces nouveaux langages.</p>
      <p>Cela était normal puisque j’étais en train de développer mes compétences en même temps que de développer le projet. Je pense tout de même que cela m’aura permis de développer plus rapidement certaines fonctionnalités en résolvant plus rapidement certaines erreurs rencontrées durant la phase de développement.</p>
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