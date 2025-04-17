import React from 'react';
import { Link } from "react-router-dom";
function C() {
  return (
    <div className="container_components">
      <h1>C#</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>Le langage C# est un langage orienté objet utilisé dans de nombreux environnements de Microsoft et dans la technologie .NET, qui est essentiel de connaître pour tout développeur. Le C# est un langage utilisé pour le développement d’applications de bureau, mobiles, de services web ainsi que de jeux vidéo avec Unity, ce qui en fait un langage puissant et recherché par les entreprises. En tant que langage orienté objet, C# offre une grande flexibilité de développement, permettant de créer des applications variées, robustes et sécurisées. De plus, C# propose un éventail de classes et de bibliothèques prêtes à l’emploi, ce qui permet au développeur de construire des applications de manière plus efficace et performante. C# représente une vaste communauté de développeurs, ce qui en fait un langage très intéressant avec la possibilité d’accèder à des tutoriels et des exemples de code plus facilement et plus rapidement.</p>
      <p>Plusieurs entreprises mettent en avant le C# car il permet une grande robustesse ainsi qu’une compatibilité avec la plateforme .NET et sa flexibilité pour divers types de projets. Microsoft recommande C# en raison de ses fonctionnalités modernes et de sa capacité à s’intégrer dans des environnements multiplateformes. Certaines grandes entreprises dans la finance et la santé trouvent que le C# est un outil adapté pour le développement d’applications sécurisées et évolutives.</p>
      <p>En 2023, C# a bénéficié d’une mise à jour significative avec le C# 12, qui introduit des fonctionnalités rendant le langage encore plus performant et polyvalent. La documentation de Microsoft met en avant les avantages de cette nouvelle version de C#: <a href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12">Documentation C# 12</a>.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>Lors de mon alternance en 2023, j’ai été confronté à un défi technique sur les projets eRec et LocaDax. En effet, le projet eRec avait déjà une grande base de développement qui avait été développée sur l’application web. Néanmoins, à la suite de retours clients, j’ai dû réaliser des modifications pour répondre aux attentes des clients de l’entreprise. Une de mes plus grandes modifications a été de créer, à partir d’une liste de candidats, un fichier CSV avec une grande base de données contenant plus de 10 000 candidats. Capgemini utilise cet outil pour faciliter le processus de recrutement de nouveaux collaborateurs. L’un des éléments qui avait été développé ne permettait pas aux recruteurs de Capgemini d’utiliser ces données de manière plus détaillée.</p>
      <p>Tout d’abord, j’ai dû, en utilisant la migration de .NET, créer une vue qui me permettrait de générer le fichier CSV avec un bon niveau de performance afin d’éviter que la création du fichier prenne trop de temps. J’ai bien entendu, avec C#, dû réaliser la partie qui permet de filtrer les informations des candidats pour que les recruteurs puissent utiliser ces informations lors de leur recrutement. Cependant, à la suite des précédents développements, je me suis rendu compte que certains codes que j’avais réutilisés n’étaient pas optimisés en termes de performance, ce qui m’a fait perdre beaucoup de temps lors du développement de cette fonctionnalité.</p>
      <p>C’est grâce à cela que j’ai compris l’importance de ne pas uniquement créer un code fonctionnel mais aussi de le rendre optimisé et maintenable, afin que de futurs développeurs puissent comprendre rapidement le code existant. À la suite de cette expérience, j’ai pris conscience de l’utilité des bonnes pratiques, en mettant régulièrement à jour le code développé, en gardant un code bien structuré, et en utilisant des commentaires explicatifs. Un code propre et à jour facilite la maintenance, les mises à jour et la résolution des problèmes, ce qui est essentiel pour assurer le bon fonctionnement des applications à long terme.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>L’utilisation du C# peut paraître complexe, car elle englobe de nombreuses techniques puissantes. Néanmoins, grâce aux formations ainsi qu’aux expériences professionnelles que j’ai pu avoir, je considère avoir atteint un niveau confirmé en C#.</p>
      <p>Concernant ma marge de progression, certains détails techniques comme la compréhension du système d’authentification pourraient être un axe d’amélioration supplémentaire, me permettant par la suite d’atteindre un niveau expert dans ce langage orienté objet.</p>
      <p>Le C# est l’un des langages les plus utilisés dans le monde, ce qui en fait une priorité majeure pour moi. Le comprendre et acquérir une expertise dans ce langage est, de mon point de vue, un facteur clé de ma réussite en tant que développeur full stack.</p>
      <p>Durant cette expérience professionnelle, j’ai pu apprendre et comprendre le code de mieux en mieux jour après jour. Ma progression a été plutôt rapide grâce aux explications de collègues plus expérimentés que moi ainsi qu’aux nombreuses informations disponibles sur internet.</p>
      <p>Avec mon expérience aujourd’hui, je conseillerais aux débutants de bien comprendre l’orientation objet, car c’est l’un des facteurs clés pour progresser par la suite. En effet, cela leur permettra de mieux comprendre d’autres concepts plus avancés.</p>
      <p>Actuellement, je ne travaille pas sur un projet en C#. Néanmoins, j’ai pour objectif de développer mes compétences pour atteindre un niveau avancé. Je souhaite être capable d’être autonome, peu importe le type de projet que je rencontrerai dans mon parcours professionnel, que ce soit une amélioration d’un code existant ou la création d’un projet de A à Z. Mon but est de réaliser des projets avec une structure optimisée et performante afin de créer des applications maintenables et sécurisées.</p>
      <p>Pour améliorer mes compétences dans ce domaine, je vais réaliser des mini-projets en utilisant C# 12 via la documentation du site officiel de Microsoft.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/eRec" className="realised_button">eRec</Link>
        <Link to="/realisations/LocaDax" className="realised_button">LocaDax</Link>
      </div>
    </div>
);
}

export default C