import React from 'react';
import { Link } from "react-router-dom";
function Java() {
  return (
    <div className="container_components">
      <h1>Java</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>Le langage Java est un langage orienté objet utilisé dans de nombreux développements d’applications comme le développement d’applications Android, logiciels ainsi que d’applications web. Sa syntaxe claire et structurée permet la création d’applications robustes et fiables. Java offre une vaste bibliothèque de classes prêtes à l’emploi, ce qui permet un développement plus efficace et riche en fonctionnalités pour les développeurs. Java dispose d’une large communauté ainsi que de nombreux tutoriels, ce qui permet une amélioration et une meilleure compréhension du langage pour les développeurs.</p>
      <p>Java est l’un des langages informatiques les plus recherchés en entreprise. En effet, sa polyvalence en fait un atout de choix pour de nombreuses entreprises, car Java est un outil clé dans le déploiement d’applications dites critiques, telles que les systèmes bancaires, les solutions ERP (Enterprise Resource Planning) et les applications web évolutives. Sa stabilité ainsi que sa prise en charge d’une large gamme de frameworks en font un choix très prisé par les entreprises souhaitant développer des projets de grande envergure.</p>
      <p>En septembre 2023, Oracle a publié Java 21, une nouvelle version de Java avec de nouvelles fonctionnalités. Parmi les fonctionnalités notables de Java 21 figurent les collections séquencées, les threads virtuels et les modèles de chaînes, qui simplifient la manipulation des données au sein des applications.</p>
      <p>De plus, la communauté Java continue de croître avec une adoption accrue des versions LTS. Par exemple, Java 11 est utilisé par plus de 56 % des applications en production, tandis que Java 17 connaît une croissance rapide, atteignant 9,07 % d'utilisation en 2023, soit une augmentation de 430 % par rapport à l'année précédente, d’après java.developpez.com.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>Durant ma scolarité, j’ai été amené à travailler sur un projet nommé RezDrive. En effet, cette application n’était pas à jour en termes de technologies, qui étaient anciennes. L’application utilisait PHP, mais une plus-value avait été demandée par le commanditaire pour rendre l’application plus robuste en utilisant une API REST permettant l’ajout d’un planning dynamique qui n’était pas encore présent sur l’application. J’ai donc dû faire une mise à jour totale de l’application en ajoutant une API REST développée en Java. Cela a permis de réaliser le passage de PHP vers Java, facilitant ainsi l’ajout du planning dynamique que j’ai pu développer.</p>
      <p>Grâce à mes compétences en Java, j’ai réussi à développer l’ensemble des demandes du commanditaire, ce qui lui a permis de fluidifier son organisation au sein de son entreprise d’auto-école.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>Le langage Java peut en effet être considéré comme un langage complexe en raison de son grand nombre de dépendances et de bibliothèques qui lui sont attachées, ainsi que de la nécessité de comprendre et d’avoir une certaine expertise en programmation orientée objet. Dans mon cas, l’ensemble de ces bases sont acquises, ce qui me permet de comprendre et de développer de nombreuses applications en Java. Je considère que mon niveau actuel se rapproche d’un niveau autonome.</p>
      <p>Concernant ma marge de progression, ayant actuellement uniquement les bases de ce langage, je sais que j’ai encore du chemin à parcourir ainsi que de l’expérience à acquérir afin de pouvoir atteindre un bon niveau en Java.</p>
      <p>Cette compétence est cruciale en entreprise, car elle permet de développer de nombreuses API et applications côté backend.</p>
      <p>L’acquisition de cette compétence n’a pas été simple, car il y avait de nombreuses informations à retenir pour qu’une application fonctionne correctement. Néanmoins, à travers de nombreux tests et exercices, j’ai pu apprendre les bases qui m’ont permis de développer une application actuellement utilisée par une entreprise dans son quotidien.</p>
      <p>Avec mon expérience aujourd’hui, je conseillerais de bien comprendre et d’assimiler la programmation orientée objet en règle générale avant de commencer à apprendre Java. En effet, mes débuts ont été assez compliqués en raison d’un manque de compréhension de l’orienté objet. À la suite de cela, ma progression a été beaucoup plus rapide.</p>
      <p>Pour ma part, même si je n’utilise pas Java quotidiennement actuellement, je compte réellement progresser dans cette compétence, car elle sera un facteur déterminant dans ma carrière pour le futur. Pour cette raison, je souhaite acquérir une maîtrise solide sur la manière de réaliser un code optimisé ainsi qu’un code performant.</p>
      <p>Actuellement, pour améliorer mes compétences en Java, j’ai prévu d’aller sur le site officiel de Java pour apprendre et appliquer les nouveautés sorties lors de la version 21 de Java dans une application test, car rien ne vaut mieux que la pratique.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/RezDrive" className="realised_button">RezDrive</Link>
      </div>
    </div>
);
}

export default Java