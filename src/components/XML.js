import React from 'react';
import { Link } from "react-router-dom";
function XML() {
  return (
    <div className="container_components">
      <h1>XML</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>Le XML (eXtensible Markup Language) est un langage permettant la structuration et l’organisation des données sous forme de balisage. Contrairement aux langages très répandus comme le HTML, qui mise sur l’affichage de données, le XML est plus utilisé pour rendre des balises plus personnalisables avec une meilleure description des données en elles-mêmes. La personnalisation des balises permet une meilleure flexibilité et adaptabilité pour les développeurs selon leurs besoins.</p>
      <p>Le XML joue un rôle crucial au sein des entreprises. En effet, il permet de faciliter les échanges d’informations entre des systèmes informatiques. Il peut être utilisé lors de transferts de données entre une application web et une base de données ou pour la configuration de logiciels via des fichiers. Le XML est aussi utilisé dans le cadre de traitements automatisés avec une synchronisation des données.</p>
      <p>Actuellement, XML reste une compétence importante même si de nouveaux formats comme le JSON sont devenus populaires. Le XML est très utilisé dans des domaines qui demandent des standards fiables comme les banques ou les partages de données médicales. De plus, dans des systèmes techniques plus anciens ou complexes, le XML reste essentiel pour assurer le bon fonctionnent des données. La capacité du XML à rester utile à travers le temps malgré les changements technologiques prouve que c’est une compétence précieuse au sein des entreprises.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>En travaillant sur FormCollect, j’ai conçu l’interface utilisateur via le XML en exploitant au maximum les layouts. Par exemple, j’ai utilisé des ConstraintLayout pour rendre l'application responsive ce qui permet un bon rendu visuel pour l'utilisateur peu importe la taille de l'écran et le type d'appareil utilisés.</p>
      <p>Pour donner une bonne identité visuelle à FormCollect, j’ai créé mes propres drawable XML pour les boutons, les icônes, et les fonds. J’ai aussi défini des thèmes personnalisés en XML cela a facilité la gestion du dark mode.</p>
      <p>J’ai mis en place la navigation dans l’application grâce au fichier mobile_navigation.xml cela m’a permis de gérer tous les déplacements entre les différents fragments de l'application. C’était beaucoup plus clair à maintenir qu’une gestion manuelle.</p>
      <p>Le fichier AndroidManifest.xml m’a permis de gérer les autorisations nécessaires à l’utilisation de la caméra et du stockage. J’ai aussi configuré les activités et le point d’entrée de l’application.</p>
      <p>Pour rendre l’application utilisable aussi bien sur téléphone que sur tablette, j’ai créé des versions alternatives de certains layouts comme le layout-land et le sw600dp. Le tout est géré automatiquement grâce au système de ressources XML Android.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>Ayant travaillé uniquement sur deux projets sans avoir monté en compétence de manière très significative en XML, je considère avoir un niveau initié. J’ai les bases du XML sans maîtriser les techniques les plus avancées, mais cela m’a tout de même permis de développer des interfaces fonctionnelles et ergonomiques.</p>
      <p>Au vu de mon niveau actuel, je ne peux que progresser et apprendre, avec de l’expérience, des techniques plus avancées et plus complexes que celles que je connais actuellement.</p>
      <p>Avec mes responsabilités actuelles, je ne développe pas d’applications utilisant du XML. Néanmoins, je pense que dans mon cursus d’expert en ingénierie du logiciel, je pourrais être amené à devoir utiliser cette compétence de manière plus quotidienne. C’est pour cette raison qu’elle garde une place importante dans mon cursus et mon futur.</p>
      <p>Dans mon cursus, j’ai pu apprendre les fondamentaux du XML. Cela a développé mes connaissances et m’a permis de maîtriser rapidement les bases à l’aide d’exercices et de projets.</p>
      <p>Avec l’expérience que j’ai aujourd’hui, je conseillerais de commencer par comprendre les bases du XML, le principe des balises personnalisées ainsi que le principe de transfert de données.</p>
      <p>À moyen terme, je ne compte pas réellement développer davantage mes connaissances dans cette compétence. Je préfère me focaliser sur des compétences plus utiles dans mes responsabilités actuelles et futures. J’apprendrai avec l’expérience si un projet me demande de monter en compétence en XML, mais pour le moment, ce n’est pas une priorité.</p>
      <p>Je ne prévois pas de me former en XML pour le moment, compte tenu du fait que je n’ai pas encore été amené à travailler sur un projet professionnel nécessitant une compétence plus poussée que celle que j’ai actuellement.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/FormCollect" className="realised_button">FormCollect</Link>
        <Link to="/realisations/eRec" className="realised_button">eRec</Link>
      </div>
    </div>
);
}

export default XML