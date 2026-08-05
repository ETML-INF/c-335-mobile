# Mission 05 — Qualité

**À l'issue de cette mission, vous saurez :**
- isoler la logique métier pour la rendre testable
- écrire des tests unitaires xUnit et des scénarios de test fonctionnels
- adapter une interface aux différentes tailles d'écran

## Spec

1. Extraire la **logique de séance** (mélange, file, statistiques du résumé) et les **calculs IMC/zones** dans des classes **sans dépendance à l'UI** (pas de `ContentPage`, pas de `DisplayAlert`).
2. Écrire au minimum **3 tests unitaires** xUnit sur cette logique, par exemple :
   - le % de réussite est correct pour un déroulé de séance donné,
   - l'exercice le plus difficile est bien celui le plus passé,
   - l'IMC et sa catégorie sont corrects pour des valeurs limites (18.5, 25, 30).
3. Rédiger le **PDF des 3 scénarios de test manuels** exigés par le CDC : précondition, étapes numérotées, résultat attendu, résultat obtenu.
4. Rendre **au moins un écran responsive** : la liste des exercices (ou l'écran IMC) reste agréable sur petit téléphone ET sur tablette/paysage (colonnes, tailles adaptées...).
5. Vérifier le comportement de toute l'app en rotation portrait/paysage — rien ne doit être coupé ou inutilisable.
6. *(Optionnel — CDC 3)* : écran **podomètre** avec le capteur de pas.

## Maquette

```
  Téléphone (portrait)          Tablette / paysage
┌──────────────┐        ┌────────────────────────────────┐
│ Pompes       │        │ Pompes         Squats          │
│ Squats       │        │ Gainage        Fentes          │
│ Gainage      │        │ Burpees        Planche         │
│ ...          │        │ ...                            │
└──────────────┘        └────────────────────────────────┘
```

## Théorie utile

- [Codelab : structurer le projet pour les tests](https://labs.section-inf.ch/codelabs/mobile-08-test/index.html?index=..%2F..index) — à faire avant cette mission
- [Slides Tests unitaires](../../../supports/13-tests.pptx)
- [Slides Responsive](../../../supports/12-responsive.pptx)
- [MAUI responsive (doc officielle)](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/customize-ui-appearance?view=net-maui-9.0)

## Indices

- Si votre logique de séance est enfouie dans le code-behind, c'est le moment de la déplacer : une classe `WorkoutSession` qui reçoit des exercices et expose `CurrentExercise`, `MarkDone()`, `MarkSkipped()`, `Summary` se teste sans émulateur.
- Les calculs IMC/zones sont des **fonctions pures** : entrée poids/taille/âge → sortie valeurs. Ce sont les tests les plus faciles à écrire — commencez par eux.
- Le projet de tests xUnit cible la logique **pure** (bibliothèque de classes), pas le projet MAUI complet — voir le codelab.
- Un bon scénario de test manuel est reproductible par quelqu'un d'autre **sans vous poser de question**.
- Pour le responsive : `Grid` avec proportions (`*`), `OnIdiom`/`OnPlatform`, ou le plugin [OnScreenSizeMarkup](https://github.com/carolzbnbr/OnScreenSizeMarkup.Maui).

<details>
<summary>Coup de pouce — squelette de test</summary>

```csharp
public class BmiCalculatorTests
{
    [Fact]
    public void Bmi_Is_Normal_Category_At_22()
    {
        var result = BmiCalculator.Compute(weightKg: 70, heightM: 1.78);

        Assert.Equal(22.1, result.Value, precision: 1);
        Assert.Equal(BmiCategory..., result.Category);
    }
}
```

</details>

## Validation

- [ ] La logique de séance et les calculs IMC/zones sont dans des classes sans référence à l'UI
- [ ] Au moins 3 tests unitaires passent (démonstration en direct)
- [ ] Le PDF des 3 scénarios manuels est complet et reproductible
- [ ] Au moins un écran s'adapte à un grand écran / au mode paysage
- [ ] Aucun écran n'est cassé en rotation
