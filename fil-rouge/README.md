# Fil rouge — votre projet mobile

Tout au long du cours, vous développez **une** application complète, du storyboard aux tests.
C'est ce projet qui est évalué (voir [Évaluation](../legal/evaluation.md)).

## Choisir son projet

Plusieurs cahiers des charges sont proposés — **choisissez-en un** en début de cours et gardez-le jusqu'au bout.
Pour lire le CDC complet d'un projet, sélectionnez-le ci-dessous puis consultez le [Cahier des charges](missions/00-cdc.md).

|                  | Flashquizz                                                  | MyCoach                                  |
|------------------|-------------------------------------------------------------|------------------------------------------|
| Thème            | Cartes de révision (simili [Quizlet](https://quizlet.com/)) | Coach sportif personnel                  |
| Données gérées   | Cartes recto/verso                                          | Exercices physiques                      |
| Mode « session » | Apprentissage aléatoire des cartes                          | Séance d'entraînement chronométrée       |
| Petit plus       | Statistiques de mémorisation                                | IMC, zones cardiaques, podomètre (bonus) |

> Les deux projets ont la **même difficulté** et sont évalués avec la **même grille**.
> Choisissez celui qui vous parle le plus : un projet qu'on s'approprie est un projet qu'on termine.

### Mon choix

<FilRougeChooser />

## Missions de votre projet

<FilRougeSlot name="missions-table" />

## Mécaniques communes

Quel que soit le choix, l'application devra démontrer les mêmes compétences techniques :

1. **Collection d'éléments** : ajout / édition / suppression, champs texte limités à 255 caractères, persistance JSON
2. **Mode session** : parcours des éléments en ordre aléatoire
3. **Animation** : transition visuelle significative pendant la session (flip, glissement...)
4. **Capteur** : une action de la session déclenchée en secouant le téléphone (shake)
5. **Résumé de session** : statistiques calculées à la fin de chaque session
6. **Qualité** : logique métier testée unitairement, interface adaptée aux tailles d'écran

## Livrables finaux

Un ZIP contenant :

- **PDF maquettes** (storyboard, mission 01)
- **PDF notes de cours** personnelles
- **PDF 3 scénarios de test** manuels documentés
- **Code source complet**
- **Vidéo 30 s** de l'application sur un **vrai téléphone** (pas l'émulateur)
