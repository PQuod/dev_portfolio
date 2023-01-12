---
title: 'Lier un site statique à une base de données'
lang: fr
lang-ref: static-dynamic
date: 2022-10-04
categories: 'log'
---
Je sais que cela peut paraître paradoxal, contre-intuitif, ou pire, hérétique. Mais des fois – des fois –, l'utilisation d'une base de données en accompagnement d'un site statique peut se révéler utile, voire nécessaire.

## pourquoi

Je développe en ce moment le nouveau [site de la Maison de la Poésie de Rennes](https://maiporennes.fr)[^1], une association française pour laquelle je travaille à mi-temps en tant que médiatrice. Nous – mon collègue Quentin et moi – savions de puis le début que nous voulions quelque chose de rapide, de léger, essentiellement dédié au texte et qui pourrait être mis à jour très facilement, rapidement et limpidement. Nous devons ajouter de nouveaux évènements sur le site de manière hebdomadaire, nous avons de nombreux types de posts différents qui doivent être affichés de manière spécifique et nous savons que notre public peut ne pas être très à l'aise avec internet.

Toutes ces raisons nous ont dirigés vers l'élaboration d'un site statique, qui semblait être la meilleure solution pour nos besoins (il faut aussi dire que Quentin et moi sommes tombés amoureux des SSG il y a deux ans, en créant notre premier site statique ensemble, [Internet Exploreur](https://pquod.github.io/InternetExploreur/)). J'ai choisi d'utiliser Jekyll pour le construire car c'est le SSG que je connais le mieux[^2], et j'ai opté pour Netlify en tant que CMS, car ses fonctions me semblaient très larges et diversifiées.

Tout se passait très bien et notre décision de nous tourner vers le statique semblait parfaite mais je n epouvais pas m'empêcher de me demander ce que nous allions faire quand nous aurions à remettre en place la gestion de notre bibliothèque. La Maison de la Poésie possède une bibliothèque qui contient environ 5000 ouvrages et, quand Quentin et moi avons été embauchés il y a quatre ans, cette bibliothèque n'était inventoriée que grâce à un fichier texte. J'ai donc construit une base de données et son propre CMS fait maison, avec PHP et MySQL, pour pouvoir gérer cette bibliothèque, entrer les nouvelles acquisitions, garder trace des emprunts et des retours et avoir quelques chiffres concernant son activité. C'était rapide et facile à utiliser, même si c'était en PHP.

Comment allions-nous gérer cette bibliothèque maitenant ? Nous ne pouvions pas simplement le faire en modifiant des posts statiques, notre base de données précédente possédait trop de liens entre ses tables, avait des compteurs pour nous permettre d'analyser les activités de la bibliothèque, et des fonctions pour envoyer des mails lorsqu'un emprunt était en retart, par exemple.

Nous ne pouvions pas non plus avoir une application séparée pour gérer la bibliothèque ; nous aurions pu gardier l'ancienne, maais cela voulait dire que nous ne pouvions pas nous débarrasser de notre précédent hébergement web, car Netlify n'héberge que des sites statiques, et nous avions besoin d'afficher des information issues de notre base de données sur notre site statique – par exemple, l'inventaire de notre fonds, ou si chaque ouvrage est disponible ou non.

J'ai écumé les internets à la recherche d'une solution, mais je suis principalement tombée sur des réponses catégoriques, qui hurlaient poliment **JAMAIS** chaque fois que les mots statiques et dynamiques étaient mentionnés ensemble.

## Comment

Jusqau'à aujourd'hui, où enfin j'ai trouvé une lumière dans les ténèbres, en lisant l'article/guide de [mzrnsh](https://mzrn.sh/2022/04/29/using-airtable-as-a-jekyll-website-database/).

Tout d'abord, comme le dit mzrnsh, son tutoriel contient un exemple de la vraie-vie, ce qui permet de comprendre très vite où ça va, ce que ça fait, ce pour quoi c'est fait.

En moins d'une heure, j'avais importé une de nos anciennes tables dans Airtable, j'étais capable d'en afficher le contenu sur mon site statique, et j'avais créé un formulaire que mon collègue pouvait remplir sur une page dédiée afin de mettre à jour la base de données aussi rapidement et facilement qu'avant. Encore mieux, j'avais ajouté un *build hook* avec Pipedream pour un déploiement automatique sur Netlify, comme ça, mon site était mis à jour dès qu'un changement était opéré dans la base de données[^3].

Il faut encore que je remplisse les autres tables, que remette en place les liens entre elles, que j'implémente nos différents compteurs et que j'effectue plusieurs autres petits réglages nécessaires avant que notre gestionnaire de bibliothèque soit prêt à fonctionner, mais je suis assez ébahie par le fait que cette solution (et l'exemple qui l'illustre) ait été exactement ce dont j'avais besoin. Je dois admettre qu'Airtable est un peu trop surpeuplé à mon goût[^4] (des fonctions et des customisations partout, mais jamais ceux dont j'ai vraiment besoin, l'appli est constamment en train de me proposer de faire des choses qui ne me servent à rien, on dirait qu'il est littéralement possible de glisser-déposer tout le contenu du navigateur un peu partout) et j'aurais bien aimé pouvoir coder moi-même les formulaires et les requêtes, mais je commençait vraiment à perdre espoir et ce nouvel horizon m'a encore une fois convaincue que, quand il s'agit de développement web, il y a toujours une solution qui attend quelque part.

[^1]: Ce sera peut-être le sujet d'un autre post plus tard (celui qui parle du développement d'un site web au fur et à mesure, sans établir au préalable un cahier des charges et du fait de découvrir au cours du développement les spécificités et les besoins du projet)
[^2]: Mais je suis en train d'envisager activement d'essayer de nouveaux SSG. Des fois, Jekyll me fait me sentir un peu... ringarde.
[^3]: C'est vrai, c'est peut-être là où on s'éloigne un peu trop d'un site statique. Mais il est possible de rester raisonnable et de régler un timer qui ne vérifie les changements que quotidiennement, hebdomadairement ou même mensuellement.
[^4]: Allo allo, c'est le moi du futur qui parle, en éditant ce post une semaine après... et j'aurais plusieurs choses à dire à propos d'Airtable et de pourquoi, vraiment, coder les choses du début à la fin sera toujours ma solution favorite. À suivre dans le journal...
