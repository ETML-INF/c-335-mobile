# Mission 02 — Pages et navigation

**À l'issue de cette mission, vous saurez :**
- transformer un storyboard en pages XAML réelles
- structurer la navigation d'une application avec Shell
- passer des données d'une page à l'autre

## Spec

1. Créer une **page par écran** de votre storyboard (contenu minimal : titre + composants principaux, sans logique).
2. Composer chaque page avec un **layout adapté** (`Grid`, `VerticalStackLayout`...) — pas de positions absolues.
3. Mettre en place la structure **Shell** : la liste des cartes est la page d'accueil.
4. Toute la **navigation du storyboard fonctionne** : on peut atteindre chaque écran et revenir en arrière.
5. La navigation vers l'écran d'édition transmet un **paramètre** (par exemple l'identifiant de la carte à éditer) et la page cible l'affiche temporairement (preuve de réception).

## Maquette

Le résultat attendu : votre storyboard qui « se navigue » — écrans encore vides, mais tous accessibles.
Comparez chaque page à sa maquette de la mission 01.

## Théorie utile

- [Layout](../../../supports/04-layout.md)
- [Évènements](../../../supports/05a-evenement.md)
- [Déclarer des routes Shell](../../../supports/06-shell.md#declarer-des-routes)
- [Naviguer et passer des paramètres](../../../supports/07-navigation.md#passer-des-parametres)

## Indices

- `Shell.Current.GoToAsync("...")` empile, `GoToAsync("..")` dépile — ne mélangez pas avec `Navigation.PushAsync` (piles différentes, conflits garantis).
- Les pages hors structure Shell (édition, apprentissage) doivent être **enregistrées** avec `Routing.RegisterRoute`, sinon : exception à la navigation.
- Pour le passage de paramètres, la méthode `Dictionary` + `IQueryAttributable` est la plus polyvalente.
- Le mode d'apprentissage se prête bien à une présentation **modale** : on termine ou on annule la session.

<details>
<summary>Coup de pouce — enregistrement des routes</summary>

```csharp
// AppShell.xaml.cs
public AppShell()
{
    InitializeComponent();

    Routing.RegisterRoute("edit", typeof(EditCardPage));
    Routing.RegisterRoute(..., ...);   // les autres pages hors Shell...
}
```

```csharp
// Réception d'un paramètre dans EditCardPage
public partial class EditCardPage : ContentPage, IQueryAttributable
{
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        if (query.TryGetValue("cardId", out var idObj))
        {
            // ... afficher la valeur reçue pour prouver la réception
        }
    }
}
```

</details>

## Validation

- [ ] Chaque écran du storyboard existe en tant que page
- [ ] Navigation complète : chaque écran est atteignable et le retour fonctionne
- [ ] Un paramètre est transmis à la page d'édition et sa réception est démontrable
- [ ] Aucun `Navigation.PushAsync` mélangé avec Shell
- [ ] L'application se lance sans erreur sur l'émulateur
