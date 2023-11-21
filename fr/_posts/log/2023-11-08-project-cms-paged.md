---
title: "[Projet] Un CMS pour Paged.js &middot; Cahier des charges"
date: 2023-11-08
categories: 'log'
lang: fr
lang-ref: cms-pagedjs-1
---
### Le projet
Je travaille à mi-temps dans une association culturelle basée à Rennes. Nous avons très souvent besoin de produire des documents adressés soit aux différentes institutions qui nous subventionnent, soit à nos adhérent·es et bénévoles. Ces documents ne sont pas des moyens de promotion ou de communication autour de nos évènements, mais plutôt des documents administratifs qui décrivent notre contenu culturel, nos axes politiques, nos budgets ou nos territoires d'action. Ils sont assez descriptifs, composés principament de grandes portions de texte, mais ils doivent rester attrayants et jolis, c'est pourquoi on soigne beaucoup leur design graphique.

Je suis en charge de leur mise en page et les premières années, j'ai choisi l'outil qui me paraissait alors le plus évident, c'est à dire ce <s>bon</s> vieux Indesign. Mais au cours de ces années, j'ai aussi découvert le web2print et ses acteurices, j'ai compris qu'il y avait d'autre façon de mettre en page, d'éviter la suite Adobe et les logiciels propriétaire et de rester complètement indépendante et libre.

J'ai alors commencé à mettre en page ces documents avec du html et du css, et à utiliser l'incroyable [Paged.js](https://pagedjs.org/) pour les compiler en pdf imprimables. Après ça, je n'ai pas pu revenir en arrière.

C'est super pour la mise en page, mais je suis toujours la seule dans l'équipe qui peut fabriquer ces documents et qui peut les modifier. C'est mon collègue qui rédige la majeure partie du contenu de ces documents, et il doit encore m'envoyer ses textes pour que je les insère dans le document concerné.

Je me suis donc dit qu'on avait besoin d'un outil, un genre de CMS local, qui permettrait à mon collègue d'écrire du contenu dans ces documents produits par Paged.js, qui lui permettrait aussi d'écrire ce contenu en texte simple et non pas en html, et de le publier en .pdf lui-même. Il pourrait choisir le modèle de chaque page, en fonction du genre d'organisation qu'il désire pour son contenu, parmi un ensemble de modèles que j'aurais préalablement conçu en css.

### Les étapes
J'ai déjà plusieurs types documents mis en page avec du html et du css, et je ne vais pas parler de ce processus ici. Je vais me concentrer uniquement sur l'outil qui permettra à une tierce personne de créer, modifier ou supprimer un document et son contenu, en partant du principe que différents modèles css ont déjà été conçus pour mettre en page les différentes pages des documents. Nous n'aurons pas besoin ici de modifier ou d'adapter ces modèles. Il faut aussi savoir que nous savons déjà quels types de documents nous avons besoin de produire et quel type de contenu les remplira. Nos modèles peuvent donc être assez statiques et s'adapter seulement à la longueur de leur contenu.

Tous nos documents sont composés de pages format A4, qui ne sont pas reliées en livret, ce qui nous épargne pas mal de paramètres à mettre en place.

Donc, en bref, il nous faut un outil qui permette à quiconque dans l'association de :

**Créer**
- [x] Créer un nouveau document A4
- [x] Créer une nouvelle page à ajouter à ce document, en lui associant un modèle de mise en page qui convient au type de contenu ou à l'aspect qu'iels désirent.
- [x] Remplir cette nouvelle page de nouveau contenu, en choisissant parmi les sections disponibles dans la page où mettre chaque morceau de contenu (les titres, le corps du texte, les légendes, les images...)
  
**Modifier**
- [x] Modifier le contenu d'une page existante
- [ ] Modifier l'ordre des pages du document

**Supprimer**
- [x] Supprimer une ou plusieurs pages existantes
- [x] Supprimer un document existant

**Voir ce qu'iels font**
- [x] Parcourir une liste des documents existants
- [x] Parcourir un aperçu de l'intégralité des pages du document
- [x] Avoir un aperçu des pages qu'iels créent ou modifient pendant qu'iels sont en train de le faire


J'ai décidé de coder cet outil principalement en php. C'est un langage avec lequel je suis assez familière, car j'ai déjà travaillé sur des projets de bases de données et codé les CMS qui permettent à d'autres de les manipuler. C'est donc ce que je vais utiliser pour agir côté serveur, pour parcourir, modifier, enregistrer ou supprimer différents fichiers. J'utiliserai aussi quelques scripts js, surtout pour m'occuper des aperçu des documents et de leurs pages.

Voilà donc les grands axes du cahier des charges de ce projet. J'ai déjà réalisé une grande partie des aspects compris sous **Créer**, il faut maintenant que je m'attaque aux fonctionnalités liées à **Modifier**. Peut-être que je détaillerai ces parties dans de futures notes de ce journal, peut-être que je rédigerai un genre de devlog à propos de ce projet. En tout cas, je mettrai tout ça dans un répertoire Github si j'ai l'impression que ça peut être utile pour d'autres...

Il reste encore pas mal de zones d'ombre à propos de ce projet, beaucoup de choses à ajuster ou juste à imaginer autour de l'outil. Si vous avez des suggestions, des idées d'amélioration ou de choses à implémenter, ou si vous êtes juste intéressé·es par ce à quoi cet outil peut ressembler, même en l'état, n'hésitez pas à me contacter, je serai ravie d'en discuter avec quiconque !
