# Mission 01 — Storyboard

**À l'issue de cette mission, vous saurez :**
- traduire un cahier des charges en écrans concrets
- représenter la navigation et les actions d'une application mobile
- produire un livrable d'analyse de qualité professionnelle

## Spec

1. Lire attentivement le [CDC Flashquizz](../cdc.md) — chaque exigence doit apparaître quelque part dans votre storyboard.
2. Maquetter **tous les écrans** de l'application : gestion des cartes (liste, ajout/édition), mode d'apprentissage (recto, verso), résumé de session.
3. Représenter la **navigation** : quelles actions mènent d'un écran à l'autre (flèches annotées).
4. Représenter les **actions** sur chaque écran : boutons, tap sur la carte, secousse du téléphone.
5. Annoter les contraintes du CDC directement sur les maquettes (ex : « max 255 caractères », « ordre aléatoire »).
6. Exporter le tout en **un PDF** nommé avec pertinence (ex : `luke-flashquizz-storyboard-v1.pdf`).

## Maquette

Un storyboard, c'est un scénario dessiné — comme au cinéma :

![coffee-storyboard.jpg](../../../activites/storyboard/coffee-storyboard.jpg)

Appliqué à une application :

![ux-storyboard.avif](../../../activites/storyboard/ux-storyboard.avif)

Papier + photo, Figma, PowerPoint... l'outil est libre : c'est le **contenu** qui compte.

## Théorie utile

- [Horizon mobile](../../../supports/01-horizon-mobile.md) — les conventions d'interface mobiles
- [Anatomie MAUI](../../../supports/02-anatomie-maui.md) — ce qu'une page peut contenir

## Indices

- Cette étape d'analyse est **primordiale** : chaque minute investie ici évite des heures de refactoring plus tard.
- Pensez aux cas « vides » : à quoi ressemble la liste sans aucune carte ?
- Le mode d'apprentissage a plusieurs états (recto affiché, verso affiché, fin de session) — un écran par état.
- Ne maquettez pas des fonctionnalités optionnelles avant d'avoir couvert tout l'obligatoire.

## Validation

- [ ] Chaque fonctionnalité obligatoire du CDC est visible sur au moins un écran
- [ ] La navigation entre tous les écrans est représentée et annotée
- [ ] Les actions utilisateur (tap, boutons, secousse) sont identifiées
- [ ] Le PDF est relu : orthographe, entêtes remplies, nom de fichier pertinent
- [ ] Vous pouvez « jouer » un scénario complet (créer une carte → l'apprendre → voir le résumé) en suivant votre storyboard du doigt
