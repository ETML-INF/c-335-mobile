# CDC ICT-335 — FlashQuizz (résumé)

## Fonctionnalités OBLIGATOIRES (7.2)

### 7.2.2 CRUD
- Ajouter / éditer / supprimer des cartes
- Carte = recto + verso, texte max 255 caractères

### 7.2.3 Mode d'apprentissage
- Cartes présentées en ordre aléatoire
- Affiche le recto -> tap pour voir le verso (avec animation)
- S'il connaît -> bouton "Juste"
- S'il ne connaît pas -> secouer le smartphone (= "Faux")
- Mode loop : carte fausse remise dans la file jusqu'à ce qu'elle soit connue
- Résumé de fin de session (4 items obligatoires) :
  1. Temps passé
  2. Carte la plus difficile (la plus ratée)
  3. Nombre de cartes connues à 100% (zéro erreur)
  4. % mémorisation = cartes 100% / total

### 7.2.4 Tests
- 3 scénarios de tests manuels documentés (PDF)

## Fonctionnalités OPTIONNELLES (7.3)
- Plusieurs listes de cartes (decks)
- Statistiques avancées
- Synthèse vocale
- Images

## Livrables (7.4)
- ZIP contenant :
  - PDF maquettes
  - PDF notes de cours
  - PDF 3 scénarios de test
  - Code source complet
  - Vidéo 30s sur vrai téléphone (pas simulateur)

## Grille d'évaluation (7.6)

| Critère | Points max |
|---|---|
| Prise de note (notes cours) | 3 |
| Livraison (archive + vidéo) | 6 |
| Maquette (écrans + navigation + qualité) | 12 |
| Fonctionnalités (CRUD + apprentissage) | 18 |
| Tests (3 scénarios) | 3 |
| Entretien | 6 |

## Checklist analyse projet étudiant

### Features CDC
- [ ] CRUD cartes (add/edit/delete)
- [ ] CRUD decks (optionnel mais fréquent)
- [ ] MaxLength 255 sur les champs
- [ ] Ordre aléatoire
- [ ] Animation flip recto/verso
- [ ] Boutons Juste/Faux
- [ ] Shake = Faux
- [ ] Loop cartes fausses
- [ ] Résumé : temps passé
- [ ] Résumé : carte la plus difficile
- [ ] Résumé : cartes connues à 100%
- [ ] Résumé : % mémorisation

### Indicateurs IA vs Humain

**Signaux IA :**
- Architecture trop avancée pour le niveau (MVVM, Lazy singleton, soft delete)
- Commentaires tutoratifs ("// Vérifier si...", "// Supprimer le deck")
- Seed data générique sans contenu personnel
- Style ultra-cohérent entre tous les fichiers
- Même JsonDataService / commentaire EN identique entre étudiants
- CardCount redondant avec Cards.Count
- Code mort généré "au cas où"

**Traces humaines :**
- Typos dans commentaires FR (accents manquants, ex: "Rafréchir")
- Encoding cassé sur caractères accentués dans le code source
- Namespace style incohérent entre fichiers (block vs file-scoped)
- Commit messages avec tâtonnements ("tentative", "WIP", "pas opérationnel")
- Commit "traduis tout les labels en français" = preuve traduction post-IA
- Contenu seed = notes de cours personnelles avec fautes
- Feature planifiée non implémentée (champ inutilisé, ex: Deck.Color)
- Page template non modifiée (MainPage MAUI défaut laissée intacte)
- Méthode morte fossile d'une version antérieure
- Nom d'application personnalisé (ex: "Ozzlet")
- Fonctionnalité CDC manquante = manque de temps, pas de l'IA
