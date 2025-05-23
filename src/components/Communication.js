import React from 'react';
import { Link } from "react-router-dom";
function Communication() {
  return (
    <div className="container_components">
      <h1>Communication</h1>
      <h3 className="subtitle">Introduction</h3>
      <p>La communication est un élément essentiel dans la vie, autant du côté professionnel que du côté personnel. Elle peut être exprimée de différentes manières comme le langage verbal, les sons, les gestes, les images, l’écriture et bien d’autres formes. La communication est l’une des compétences les plus importantes à acquérir, car elle est utile dans tous les aspects de la vie, que ce soit au travail, dans les relations professionnelles et dans la vie quotidienne. Elle englobe de nombreuses aptitudes comme l’écoute active, la prise de parole en public, la négociation, la sociabilisation et d’autres compétences sociales.</p>
      <p>Dans la vie professionnelle, la communication est une compétence clé. Elle permet aux employés de collaborer efficacement et de transmettre des informations de manière concise et claire. La communication joue un rôle important dans les interactions interpersonnelles au sein d’une équipe. Elle contribue à un cadre de travail agréable, propice à une meilleure productivité et à un meilleur épanouissement au travail. Côté client, une communication fluide permet de mieux comprendre les besoins et préoccupations des clients. Une communication claire et efficace permet d’établir une relation de confiance entre le client et le professionnel, ce qui contribue à assurer la satisfaction du client tout au long du projet.</p>
      <p>Une bonne communication peut complètement faire pivoter une entreprise peu connue vers un leader mondial dans son domaine, comme le prouve Apple. En effet, durant la présentation du tout premier iPhone, Steve Jobs a fait preuve d’une grande éloquence avec une communication si puissante sur son nouveau produit qu’il a su capter l’attention du public tout en mettant en avant les caractéristiques et les innovations technologiques utilisées. Grâce à sa grande qualité d’orateur et à sa communication impactante, il a largement contribué à l’ascension d’Apple en tant que leader mondial du marché des téléphones mobiles.</p>
      <br></br>
      <h3 className="subtitle">Mon expérience vécue</h3>
      <p>Depuis septembre 2024, je travaille sur un projet Airbus, WebFTI. Ce projet a pour but de créer une bibliothèque de widgets pour aider les développeurs React à développer des applications web pour Airbus. Dans mon projet, nous communiquons quotidiennement avec l’équipe sur nos avancées. Cela permet de résoudre certains blocages que nous pourrions rencontrer ainsi que de partager nos idées sur les différentes manières d’avancer correctement sur le projet. Grâce à une bonne communication, notre équipe est plus soudée, plus efficace et plus productive.</p>
      <p>Une communication fluide nous a permis de mettre en place de bonnes mesures lorsque le client nous a demandé une modification en cours de développement de manière spontanée durant une réunion. Cette modification a exigé une excellente communication au sein de l’équipe ainsi qu’une bonne compréhension des nouvelles exigences du client. Nous devions donc être réactifs dans la mise en place de ces nouvelles fonctionnalités et, grâce à notre excellente communication, nous avons réussi à réaliser les ajouts demandés.</p>
      <br></br>
      <h3 className="subtitle">Mon niveau de compétence</h3>
      <p>Avec l’ensemble des projets que j’ai pu réaliser, j’ai acquis un bon niveau de communication, ce qui me permet d’avoir une excellente compréhension des besoins clients et d’améliorer ma productivité dans le travail collaboratif.</p>
      <p>La communication est une compétence qui s’apprend avec l’expérience, c’est pour cette raison qu’il me reste encore beaucoup à apprendre pour me considérer comme excellent en communication. Selon le projet, la difficulté de la compréhension des attentes du client peut varier. Souvent, une connaissance métier est nécessaire pour bien saisir les attentes des clients.</p>
      <p>Grâce à ma formation d’Expert en Ingénierie du Logiciel, j’ai été amené à gagner en expérience à travers différents projets. Ces premières expériences m’ont permis d’améliorer ma communication, notamment avec la relation client et m’ont poussé à développer mes compétences afin de garantir le succès des projets. De plus, dans mon projet actuel en alternance, je pratique régulièrement ma communication puisque je dois échanger avec les membres de mon équipe ainsi qu’avec les clients.</p>
      <p>Cette compétence a été l’une des plus difficiles à acquérir pour moi, sûrement en raison de ma timidité. Cependant, avec le temps, l’expérience et la maturité, j’ai atteint un niveau correct.</p>
      <p>Avec l’expérience, je conseille de ne pas avoir peur de communiquer, que ce soit dans une conférence, en public ou pendant une réunion importante. C’est avec l’échec et la difficulté que l’on apprend à mieux s’exprimer. La pratique permet également de se sentir de plus en plus à l’aise lorsqu’il s’agit de prendre la parole. La théorie est aussi très importante, comme apprendre à parler plus lentement pour que notre interlocuteur assimile mieux ce que nous exprimons. Pour approfondir ce sujet, je recommande de regarder des vidéos et de suivre des formations sur la communication.</p>
      <p>Dans mon quotidien, je suis constamment amené à communiquer de la manière la plus efficace possible, ce qui fait de cette compétence l’une des plus importantes à développer à mes yeux. Cela implique d’améliorer mon discours, d’affiner ma capacité à vulgariser des informations complexes ou techniques et de maîtriser des outils de présentation adaptés. En m’améliorant en communication, je souhaite être en mesure de transmettre mes idées de manière concise, claire, compréhensible et convaincante, que ce soit dans mon travail, auprès des clients ou même dans ma vie personnelle.</p>
      <p>À l’avenir, je me formerai de manière autonome en lisant <i>L’Art du Storytelling</i>. Ce livre me permettra de m’améliorer en communication auprès d’un auditoire. Je suis convaincu que le storytelling est un excellent moyen d’atteindre mon objectif. En apprenant les meilleures techniques et principes du storytelling, je pourrai exprimer mes messages de manière narrative, en utilisant l’émotion et la tension pour captiver mon public et renforcer leur engagement. Ce sera un premier pas vers une communication plus impactante et efficace.</p>
      <br></br>
      <h3>Réalisations associées</h3>
      <div className="realised_container">
        <Link to="/realisations/Ebrush" className="realised_button">Ebrush</Link>
        <Link to="/realisations/eRec" className="realised_button">eRec</Link>
        <Link to="/realisations/FormCollect" className="realised_button">FormCollect</Link>
        <Link to="/realisations/LocaDax" className="realised_button">LocaDax</Link>
        <Link to="/realisations/RezDrive" className="realised_button">RezDrive</Link>
      </div>
    </div>
);
}

export default Communication