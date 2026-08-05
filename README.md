---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "C-335"
  text: "Programmation mobile"
  tagline: Découvrir la programmation mobile avec MAUI
  actions:
    - theme: brand
      text: Thématiques
      link: /thematiques/README.html
    - theme: alt
      text: Fil rouge
      link: /fil-rouge/README.html
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

## Parcours du module

```mermaid
flowchart TD
    classDef theme fill:#FFE066,stroke:#CCA000,color:#000,font-weight:bold
    classDef mission fill:#66CCAA,stroke:#009966,color:#000
    classDef eval fill:#FFB3BA,stroke:#DD8888,color:#000
    classDef activity fill:#e8f8f0,stroke:#66CCAA,color:#000

    T1(["01 · Découverte"]):::theme
    A0["Hello MAUI"]:::activity
    M1["Storyboard"]:::mission
    T2(["02 · Pages & navigation"]):::theme
    M2["Navigation Shell"]:::mission
    T3(["03 · Interaction CRUD"]):::theme
    M3["Persistance JSON"]:::mission
    T4(["04 · Interaction avancée"]):::theme
    M4["Mode session"]:::mission
    T5(["05 · Qualité"]):::theme
    M5["Tests & responsive"]:::mission
    E1(["Test écrit"]):::eval
    E2(["Rendu projet"]):::eval
    E3(["Notes de cours"]):::eval

    T1 --> A0 --> M1 --> T2 --> M2 --> T3 --> M3 --> T4 --> M4 --> T5 --> M5
    M5 --> E1 & E2 & E3
```

[https://etml-inf.github.io/c-335-mobile/](https://etml-inf.github.io/c-335-mobile/)

