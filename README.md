# MPG Challenge

Challenge technique React-Native pour l'application MPG

# Apercu

<p align="center" >
  <kbd>
    <img src="docs/example-ios.gif" title="Scroll Demo" float="left">
  </kbd>
  <br>
  <em>MPG Challenge App</em>
</p>

# Objectifs

- Interroger 2 APIs distinctes afin de récupérer une liste de joueurs, et les détails d'un joueur
- Afficher la liste des joueurs dans une première vue
- Pouvoir filtrer les joueurs par leur nom, ou leur poste (attaquant, défenseur...)
- Lors d'un clic sur un joueur, afficher le détail de ce joueur dans une nouvelle vue
- L'ensemble du code devra être écrit en TypeScript
- Pas de tests demandés

## Inspiration

Ce challenge technique s'inspire fortement de l'application MPG actuellement sur les stores (développée en Cordova) pour son design général.

L'objectif était de réaliser une sorte de portage (simplifié) des vues de l'application, en supprimant quelques fonctionnalités (certains filtres, statistiques...)

# Réalisation

## Choix des librairies

- Network
  - [Axios]([https://github.com/axios/axios]) pour les requêtes http à l'API
  - [React Query]([https://link](https://github.com/tannerlinsley/react-query)) pour la mise en cache des requêtes
- Navigation
  - [React Navigation]([https://github.com/react-navigation]) pour la navigation entre les vues
- UI
  - [React Native Elements]([https://github.com/react-native-elements/react-native-elements]) pour quelques éléments graphiques de base (Searchbar...)
  - Components React de base
- Utilitaires
  - [lodash]([https://github.com/lodash/lodash]) pour faciliter quelques traitements

## Structure du code

Le code est structuré de manière hiérarchique, dans une arborescence de fichiers que j'utilise de manière habituelle
```
|-- android
|-- ios
|-- src
    |-- apis
    |-- common
    |-- configs
    |-- navigation
    |-- ui
    |   |-- components
    |   |-- screens
    |-- App.tsx
```

Petit tour d'horizon
- apis: contient tous les fichiers d'API
- common: contient l'ensemble des éléments communs de l'application (déclarations, utilitaires...)
- configs: contient tous les fichiers de configuration généraux
- navigation: contient tous les fichiers liés à la navigation (Navigators, Routes...)
- ui/components: contient l'ensemble des composants développés pour l'application
- ui/screens: contient toutes les écrans navigables (composés avec les ui/components)
- App.tsx: Point d'entrée de l'application

# Suppléments

Au delà des objectifs demandés, quelques options ont été ajoutées:
- Filtrage sur plusieurs catégories de joueurs
- Changement de saison à la volée (avec conservation du contexte de recherche)

# TODOs

Lors du développement de ce challenge, quelques défauts ont fait leur apparition, et non pas été traités par manque de temps, impossibilité technique ou éloignement trop important des objectifs.

Voici les principaux et quelques solutions pour y remédier: 

- L'animation de fermeture des modals n'est pas correcte pour cause de setState -> rendering dans le callback
  - Solution 1: Ne pas passer par une modal pour la sélection (refonte UI)
  - Solution 2: Sauvegarder le résultat de la sélection le temps de la fermeture, et déclencher le rerendering à ce moment
- Déclaration probablement inexacte des types en retour de l'API (pouvant provoquer des erreurs)
  - Solution 1: Connaître entièrement l'API et déclarer correctement à la main
  - Solution 2: Utiliser une déclaration OpenAPI, et générer l'API Axios+TypeScript automatiquement
- Temps de filtrage parfois long (bloquant l'UI quelques ms)
  - Solution 1: Utiliser une solution de filtrage basée sur des selectors memoized (comme reselect)
  - Solution 2: Utiliser le hook 'useMemo'
- Chaînes de caractère directement écrites dans les components/screens (mauvaise pratique)
  - Solution: Utiliser une librairie i18n pour externaliser les chaînes de caractère, et prendre facilement en charge l'internationalisation
- Mauvaise gestion du thème de l'application (chaque component défini son propre style)
  - Solution: Externaliser le thème principal, et faire hériter chaque style de ce thème principal pour mieux uniformiser le style de l'application
- Affichage des erreurs techniques directement dans le Screen (mauvaise pratique)
  - Solution 1: Globaliser la gestion des erreurs via un callback générique, et générer des messages d'erreur "standardisés" pour l'utilisateur
  
