---
title: 'Penser un système de recherche'
date: 2025-10-26
categories: 'log'
lang: fr
lang-ref: log-research-system
---
J'ai enfin publié une version complète d'[∞-lecture](https://luciedesaubliaux.fr/inf-lecture/index.php).

Je savais déjà que j'adorerais construire sa base de données, ses formulaires et ses différentes pages, mais je n'avais jamais créé de système de recherche pour parcourir toutes ces données et je doutais de ma capacité à en fabriquer un moi-même.

J'ai repoussé cette partie du projet jusqu'à la toute fin parce que ça me terrifiait vraiment...

... et ça a été, en fin de compte, quelque chose de très amusant à faire.

D'abord, j'ai du estimer quelles données il était pertinent de parcourir. Quelles étaient les choses intéressantes à chercher au sein de ma base de données. J'ai dû me demander ce qui intéresserait d'autres humains qui exploreraient mon site. J'ai du prendre assez de recul pour regarder mon site comme si je le voyais pour la première fois. Si je venais d'arriver ici, quelles informations aimerais-je chercher ? Comment aimerais-je être guidée ? Quels mots-clefs voudrais-je taper pour trouver quelque chose dont je ne sais même pas si c'est bien là ? À quel point serais-je précise dans ma recherche ? Quel est le bon équilibre entre une liberté totale de recherche ou des champs très précisément étiquetés à remplir pour rester dans le droit chemin ?

Ensuite, il y a eu les questions de traduction de toutes ces éventuelles requêtes humaines en langage navigateur. Maintenant que je savais ce que je voulais récupérer dans ma base de données, il fallait que je demande à la machine de le faire pour moi. Il a fallu que je précise quelle requête devait être traitée exactement comme elle était énoncée, quelle requête était plus approximative et comment traiter cette approximation. Les requêtes humaines sont constituées de mots mais la machine, elle, ne comprend pas le sens de ces mots. Le mieux qu'elle puisse faire est comparer les mots les uns aux autres et les ordonner alphabétiquement ou mathématiquement. Pour la machine, les mots sont comme des images abstraites et il a fallu que je lui explique quelles étaient les limites, le début et la fin, de chacune de ces images et si ces limites étaient strictes ou souples. Il a fallu que je traduise tous ces mots en d'autres mots, ceux qui composent le PHP et le MySQL.

Enfin, un système de recherche, c'est l'endroit où tous les liens tissés entre les tables d'une base de données, entre ses rangées et ses colonnes, sont testés. C'est là qu'on peut voir si tout les tiroirs sont bien étiquetés, et si, en partant d'un petit bout d'information, on sera capable de retrouver toutes les autres données qui lui sont reliées ou qui pourrait être intéressantes à consulter à ses côtés.

Et maintenant, j'ai juste envie d'en construire d'autres.