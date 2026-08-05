# CDC — MyCoach

## 1. Contexte

Les applications de fitness sont un marché colossal : abonnements, publicités, revente de données de santé... Votre cliente, une coach sportive indépendante, veut offrir à ses client·e·s une application **simple, sans compte et sans pub** : un catalogue d'exercices personnalisé et un mode séance motivant.

## 2. Fonctionnalités obligatoires

### 2.1 Gestion des exercices (CRUD)

1. Un **exercice** comporte au minimum : identifiant, **nom**, **consigne** (description de l'exécution) — chacun limité à **255 caractères** et non vide (validation avec message d'erreur). Votre analyse peut ajouter des champs utiles (groupe musculaire, durée ou répétitions...).
2. **Liste** des exercices (nom visible au minimum), y compris l'état « aucun exercice ».
3. **Ajout** et **édition** via un formulaire ; **suppression avec confirmation**.
4. **Persistance** : les exercices survivent au redémarrage complet de l'app (JSON dans le stockage de l'application).
5. **Filtre** : un champ de recherche réduit la liste aux exercices dont le nom ou la consigne contient le texte saisi (insensible à la casse).

### 2.2 Mode séance

1. Depuis la liste, démarrer une **séance** : les exercices sont proposés en **ordre aléatoire**.
2. L'écran affiche le **nom** de l'exercice ; un tap révèle la **consigne** avec une **animation de retournement** (flip).
3. Exercice accompli → bouton **« Fait »** : exercice suivant.
4. Exercice trop dur → **secouer le téléphone** (= « Passé ») : l'exercice est **remis en fin de file** jusqu'à être accompli.
5. La séance se termine quand tous les exercices ont été « faits » ; afficher alors le **résumé** :
   1. temps total de la séance,
   2. exercice le plus difficile (le plus passé),
   3. nombre d'exercices réussis du premier coup,
   4. % de réussite (exercices réussis du premier coup / total).
6. L'accéléromètre est **arrêté** dès qu'on quitte l'écran de séance.

### 2.3 IMC & zones d'effort

1. Un écran permet de saisir **poids**, **taille** et **âge** (validation : valeurs numériques plausibles).
2. L'app calcule et affiche l'**IMC** (poids / taille²) avec sa **catégorie colorée** (maigreur, normal, surpoids, obésité).
3. L'app calcule la **fréquence cardiaque maximale** (220 − âge) et affiche les **zones d'effort** (échauffement 50-60 %, endurance 60-70 %, aérobie 70-80 %, intensif 80-90 %) avec des couleurs distinctes.

### 2.4 Qualité

1. La logique de séance et les calculs IMC/zones sont **testables sans UI** ; au minimum **3 tests unitaires** automatisés.
2. **3 scénarios de test manuels** documentés (précondition, étapes, résultat attendu/obtenu).
3. Au moins un écran est **responsive** (agréable sur petit téléphone ET tablette/paysage) ; aucun écran cassé en rotation.

## 3. Fonctionnalités optionnelles

- **Podomètre** : un écran affiche le nombre de pas via le capteur du téléphone.
- Plusieurs **programmes** (groupes d'exercices) au lieu d'une liste unique.
- Recherche multi-termes ET/OU, autocomplétion.
- **Chronomètre** intégré à l'écran de séance (temps par exercice).

## 4. Sensibilisation — économie des apps fitness

Dans vos notes personnelles (mission 01) : une demi-page sur le **modèle économique** des grandes apps fitness (freemium, abonnements, données de santé) et en quoi MyCoach s'en distingue.

## 5. Livrables et évaluation

- Storyboard PDF, code source, PDF des 3 scénarios de test, notes personnelles, vidéo de 30 s sur téléphone réel — voir [les livrables communs](../../README.md).
- Évaluation selon la [grille commune](../../../legal/evaluation.md).
