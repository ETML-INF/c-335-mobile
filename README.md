---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "C-335"
  text: "Programmation mobile"
  tagline: Découvrir la programmation mobile avec MAUI
  actions:
    - theme: brand
      text: Parcours du module
      link: /thematiques/README.html
    - theme: alt
      text: Évaluation
      link: /legal/evaluation.html

features:
  - title: Projets
    details: L’apprentissage au travers d’un projet fil rouge à choix — Flashquizz ou MyCoach
  - title: Langages
    details: C# (.NET)
  - title: Outils
    details: VSCommunity, Figma, Git
---

## Carte du module

```mermaid
flowchart TD
    classDef mission fill:#66CCAA,stroke:#009966,color:#000,font-weight:bold
    classDef eval fill:#FFB3BA,stroke:#DD8888,color:#000
    classDef activity fill:#e8f8f0,stroke:#66CCAA,color:#000
    classDef skill fill:#FFFDE7,stroke:#CCA000,color:#555

    subgraph SG1["01 · Découverte"]
        direction LR
        S1a["Écosystème mobile"]:::skill
        S1b["MAUI + émulateur"]:::skill
        S1c["XAML"]:::skill
    end

    A0["Hello MAUI"]:::activity
    M1["Storyboard"]:::mission

    subgraph SG2["02 · Pages & navigation"]
        direction LR
        S2a["Layouts"]:::skill
        S2b["Évènements"]:::skill
        S2c["Shell"]:::skill
        S2d["Navigation + paramètres"]:::skill
    end

    M2["Pages"]:::mission

    subgraph SG3["03 · Interaction CRUD"]
        direction LR
        S3a["Entité + services"]:::skill
        S3b["CollectionView"]:::skill
        S3c["CRUD + formulaire"]:::skill
        S3d["Persistance JSON"]:::skill
        S3e["Filtrer LINQ"]:::skill
    end

    M3["CRUD"]:::mission

    subgraph SG4["04 · Interaction avancée"]
        direction LR
        S4a["Animations"]:::skill
        S4b["Accéléromètre / shake"]:::skill
        S4c["Cycle de vie capteur"]:::skill
    end

    M4["Mode session"]:::mission

    subgraph SG5["05 · Qualité"]
        direction LR
        S5a["Séparation UI / logique"]:::skill
        S5b["Tests xUnit"]:::skill
        S5c["Scénarios fonctionnels"]:::skill
        S5d["Responsive"]:::skill
    end

    M5["Tests & responsive"]:::mission
    E1(["Test écrit"]):::eval
    E2(["Rendu projet"]):::eval
    E3(["Notes de cours"]):::eval

    SG1 --> A0 --> M1 --> SG2 --> M2 --> SG3 --> M3 --> SG4 --> M4 --> SG5 --> M5
    M5 --> E1 & E2 & E3
```

[https://etml-inf.github.io/c-335-mobile/](https://etml-inf.github.io/c-335-mobile/)

