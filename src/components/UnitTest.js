import React from 'react';
import { Link } from "react-router-dom";
function UnitTest() {
  return (
    <div className="container_components">
      <h1>Unit Test</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>Les tests unitaires sont une méthode importante en développement logiciel. Ils servent à vérifier que chaque petite partie du programme, qu’on appelle une unité, fonctionne comme prévu. Une unité peut être une fonction, une méthode ou un module selon le langage utilisé. Le but est de s’assurer que chaque élément fait ce qu’il doit faire avant de les regrouper pour créer des fonctionnalités plus complexes.</p>
      <p>Au sein des entreprises, l'utilisation des tests unitaires est indispensable pour que la qualité du code reste correcte. Ils permettent de détecter rapidement les erreurs et de les corriger dès qu’elles apparaissent. Cela aide aussi à rendre le code plus facile à comprendre pour les autres membres de l’équipe. Par exemple, en regardant les tests déjà écrits, un développeur peut savoir comment une fonction ou une classe est censée fonctionner. Cela permet un travail d’équipe plus optimisé et plus efficace.</p>
      <p>Aujourd’hui, beaucoup d’entreprises utilisent des outils pour exécuter les tests automatiquement à chaque modification du code. Cela fait partie de ce qu’on appelle l’intégration continue. Cette approche permet de vérifier que les nouvelles versions du code n’introduisent pas de problèmes dans des fonctionnalités qui fonctionnaient. De plus, cela encourage à écrire un code plus simple et bien organisé, ce qui est toujours un avantage dans les projets de développement.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>Durant mon projet sur RezDrive, qui est une application web dynamique utilisant Angular pour le front-end et une API REST développée en Java pour le back-end, j’ai dû réaliser une suite de tests unitaires en fin de projet pour confirmer que le code fonctionnait correctement dans son contexte actuel.</p>
      <p>Comme deuxième projet, il y a eu eRec, une application web dynamique qui devait gérer le processus de recrutement de Capgemini en interne. Elle utilise le framework Angular pour la partie front-end et C# pour la partie back-end avec une API REST. Durant ce projet, des tests unitaires m’ont été demandés pour vérifier que le code fonctionnait bien au niveau des retours API.</p>
      <p>Grâce à ma compétence sur les tests unitaires, j’ai pu développer l’ensemble des tests unitaires côté serveur. Ces tests consistaient à vérifier si tous les retours serveur pour les endpoints de l’API REST sur l’application RezDrive renvoyaient les réponses souhaitées. La même demande a été faite pour l’application eRec, où j’ai développé les tests unitaires en C# afin de tester tous les retours possibles de l’API REST.</p>
      <p>Ces tests unitaires permettent aux applications RezDrive et eRec d’avoir une liste de tests assurant une bonne maintenabilité du code existant. Ainsi, si des modifications futures sont prévues pour ces deux applications, les tests unitaires permettront de vérifier que le code fonctionne toujours correctement avant chaque déploiement. En cas de problème, ils bloqueront le déploiement des modifications pour éviter les erreurs en production.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>Je considère que j’ai une bonne maîtrise des tests unitaires, notamment pour les langages comme Python, Java et C# grâce aux outils comme pytest, JUnit et MSTest.</p>
      <p>Concernant ma marge de progression, j’ai encore de nombreuses techniques avancées à apprendre pour prétendre à un niveau confirmé ou expert dans les tests unitaires. Je pense notamment aux tests d’architectures complexes, comme ceux sur les microservices.</p>
      <p>Tout au long de ma carrière, les tests unitaires seront une compétence essentielle à maîtriser. En effet, en tant que développeur, je serai confronté à la nécessité de réaliser des tests unitaires pour chaque livrable afin d’assurer la qualité du produit livré. Cette compétence est fondamentale pour tout développeur souhaitant produire un code de qualité et garantir une meilleure maintenabilité à long terme.</p>
      <p>Ma progression a été remarquable grâce à ma compréhension des attentes des clients, qui veulent un produit de qualité et facile à maintenir dans le temps. C’est pour cette raison que je me suis énormément autoformé aux tests unitaires sur différents langages informatiques, en contribuant à leur mise en place dans plusieurs projets. Durant chaque projet, avant de livrer le produit au client, une suite de tests unitaires était obligatoire. Cela m’a motivé à monter en compétence rapidement afin de garantir la satisfaction totale des clients.</p>
      <p>Avec l’expérience que j’ai aujourd’hui, je conseille aux débutants de commencer par se former sur les bases des tests unitaires, puis de s’exercer sur des mini-projets pour mettre en pratique la théorie apprise. Avec le temps et l’expérience sur de nombreux projets, l’apprentissage se fait de manière plus naturelle, notamment grâce aux nombreuses formations disponibles sur internet.</p>
      <p>Actuellement, je souhaite atteindre un niveau d’expertise élevé en tests unitaires afin de répondre aux exigences plus poussées des futurs projets sur lesquels je travaillerai.</p>
      <p>Je prévois de suivre une formation avancée sur des outils comme Cypress pour les tests end-to-end et d’apprendre à automatiser encore davantage les processus de test.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/RezDrive" className="realised_button">RezDrive</Link>
        <Link to="/realisations/eRec" className="realised_button">eRec</Link>
      </div>
    </div>
);
}

export default UnitTest