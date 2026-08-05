# Mission 05 — Qualité

**À l'issue de cette mission, vous saurez :**
- isoler la logique métier pour la rendre testable
- écrire des tests unitaires xUnit et des scénarios de test fonctionnels
- adapter une interface aux différentes tailles d'écran

## Spec

<FilRougeSlot name="05-qualite/spec" />

## Maquette

<FilRougeSlot name="05-qualite/maquette" />

## Théorie utile

- [Codelab : structurer le projet pour les tests](https://labs.section-inf.ch/codelabs/mobile-08-test/index.html?index=..%2F..index) — à faire avant cette mission
- [Slides Tests unitaires](../../supports/13-tests.pptx)
- [Slides Responsive](../../supports/12-responsive.pptx)
- [MAUI responsive (doc officielle)](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/customize-ui-appearance?view=net-maui-9.0)

## Indices

<FilRougeSlot name="05-qualite/indices" />

- Le projet de tests xUnit cible la logique **pure** (bibliothèque de classes), pas le projet MAUI complet — voir le codelab.
- Un bon scénario de test manuel est reproductible par quelqu'un d'autre **sans vous poser de question**.
- Pour le responsive : `Grid` avec proportions (`*`), `OnIdiom`/`OnPlatform`, ou le plugin [OnScreenSizeMarkup](https://github.com/carolzbnbr/OnScreenSizeMarkup.Maui).

<FilRougeSlot name="05-qualite/code" />

## Validation

<FilRougeSlot name="05-qualite/validation" />

- [ ] Au moins 3 tests unitaires passent (démonstration en direct)
- [ ] Le PDF des 3 scénarios manuels est complet et reproductible
- [ ] Aucun écran n'est cassé en rotation
