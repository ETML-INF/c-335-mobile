# Mission 05 — Qualité

**À l'issue de cette mission, vous saurez :**
- isoler la logique métier pour la rendre testable
- écrire des tests unitaires xUnit et des scénarios de test fonctionnels
- adapter une interface aux différentes tailles d'écran

## Spec

1. Extraire la **logique de session** (mélange, file, statistiques du résumé) dans une ou plusieurs classes **sans dépendance à l'UI** (pas de `ContentPage`, pas de `DisplayAlert`).
2. Écrire au minimum **3 tests unitaires** xUnit sur cette logique, par exemple :
   - le % de mémorisation est correct pour un jeu de réponses donné,
   - la carte la plus difficile est bien celle avec le plus d'erreurs,
   - une carte ratée est remise dans la file, une carte juste n'y revient pas.
3. Rédiger le **PDF des 3 scénarios de test manuels** exigés par le CDC : précondition, étapes numérotées, résultat attendu, résultat obtenu.
4. Rendre **au moins un écran responsive** : la liste des cartes reste agréable sur petit téléphone ET sur tablette/paysage (colonnes, tailles adaptées...).
5. Vérifier le comportement de toute l'app en rotation portrait/paysage — rien ne doit être coupé ou inutilisable.

## Maquette

```
  Téléphone (portrait)          Tablette / paysage
┌──────────────┐        ┌────────────────────────────────┐
│ Carte 1      │        │ Carte 1        Carte 2         │
│ Carte 2      │        │ Carte 3        Carte 4         │
│ Carte 3      │        │ Carte 5        Carte 6         │
│ ...          │        │ ...                            │
└──────────────┘        └────────────────────────────────┘
```

## Théorie utile

- [Codelab : structurer le projet pour les tests](https://labs.section-inf.ch/codelabs/mobile-08-test/index.html?index=..%2F..index) — à faire avant cette mission
- [Slides Tests unitaires](../../../supports/13-tests.pptx)
- [Slides Responsive](../../../supports/12-responsive.pptx)
- [MAUI responsive (doc officielle)](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/customize-ui-appearance?view=net-maui-9.0)

## Indices

- Si votre logique de session est enfouie dans le code-behind, c'est le moment de la déplacer : une classe `LearningSession` qui reçoit des cartes et expose `CurrentCard`, `MarkCorrect()`, `MarkWrong()`, `Summary` se teste sans émulateur.
- Le projet de tests xUnit cible la logique **pure** (bibliothèque de classes), pas le projet MAUI complet — voir le codelab.
- Un bon scénario de test manuel est reproductible par quelqu'un d'autre **sans vous poser de question**.
- Pour le responsive : `Grid` avec proportions (`*`), `OnIdiom`/`OnPlatform`, ou le plugin [OnScreenSizeMarkup](https://github.com/carolzbnbr/OnScreenSizeMarkup.Maui).

<details>
<summary>Coup de pouce — squelette de test</summary>

```csharp
public class LearningSessionTests
{
    [Fact]
    public void Memorization_Is_100_Percent_When_No_Errors()
    {
        var session = new LearningSession(...);

        session.MarkCorrect();
        ...

        Assert.Equal(100, session.Summary.MemorizationPercent);
    }
}
```

</details>

## Validation

- [ ] La logique de session est dans des classes sans référence à l'UI
- [ ] Au moins 3 tests unitaires passent (démonstration en direct)
- [ ] Le PDF des 3 scénarios manuels est complet et reproductible
- [ ] La liste des cartes s'adapte à un grand écran / au mode paysage
- [ ] Aucun écran n'est cassé en rotation
