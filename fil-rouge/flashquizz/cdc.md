# CDC Flashquizz

## Contexte

La société **DeepLearnix** souhaite concurrencer Quizlet en offrant une application mobile bon marché pour aider l'apprentissage par cartes de révision (flashcards).

Pour s'inspirer du concurrent : [quizlet.com/fr](https://quizlet.com/fr).

> L'apprentissage par flashcard implique un travail de récupération active de l'information, ce qui contribue à une meilleure mémorisation.

## Fonctionnalités obligatoires

### Maquette de l'application

Tout commence par une phase créative — papier et crayon autorisés, voire recommandés, mais remplaçables par un outil numérique (Figma, Excalidraw, Visio, PowerPoint…).

Le but : avoir chaque écran ainsi qu'une information de navigation entre ceux-ci.

Le document final est livré en **PDF** (voir Livrables).

### CRUD

- Ajouter / éditer / supprimer des cartes
- Carte = recto + verso, texte de **255 caractères maximum** par face

### Mode d'apprentissage

- Cartes présentées en **ordre aléatoire**
- Affiche le recto → tap pour voir le verso (**avec animation**)
- L'utilisateur connaît la réponse → bouton **« Juste »**
- L'utilisateur ne connaît pas → **secouer le smartphone** (= « Faux »)
- Le mode continue tant qu'une carte n'est pas connue ou jusqu'à ce que l'utilisateur choisisse de stopper l'apprentissage
- **Résumé de fin de session** (4 éléments obligatoires) :
  1. Temps passé
  2. Carte la plus difficile (la plus ratée)
  3. Nombre de cartes connues à 100 % (zéro erreur)
  4. % de mémorisation = cartes 100 % / total

### Tests

- 3 scénarios de tests manuels documentés (PDF)

## Fonctionnalités optionnelles

- Plusieurs listes de cartes (decks)
- Statistiques avancées
- Synthèse vocale
- Images sur les cartes

## Livrables

Un ZIP contenant :

- PDF maquettes (storyboard)
- PDF notes de cours (prises pendant les cours)
- PDF des 3 scénarios de test
- Code source complet, **respectant les normes de codage**
- Vidéo 30 s sur un vrai téléphone (pas l'émulateur)

## Évaluation

Voir la [grille d'évaluation](../../legal/evaluation.md), commune aux deux fils rouges.

> **Recours à l'IA** : tout usage d'outil d'intelligence artificielle (ex. ChatGPT) doit être mentionné et ne peut servir que d'inspiration. En cas d'abus, l'évaluation en tiendra compte.
