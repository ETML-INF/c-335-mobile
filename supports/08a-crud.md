# Crud
CRUD est un mnémonique qui représente les opérations de base en lien avec la gestion d'informations numériques.

> **C** : Create (Créer / Ajouter)

> **R** : Read   (Lire / Charger)

> **U** : Update (Modifier)

> **D** : Delete (Supprimer)

## Create

### Utilisateur
Pour commencer, on aimerait ajouter une information.

Pour demander et récupérer une information donnée par l'utilisateur, par exemple, un nom de paquet de cartes, on a besoin soit

- D'un composant `Entry` 

soit

- De la fonction `DisplayPromptAsync`

#### Exemple de code avec DisplayPromptAsync
![](assets/08a-code-dpasync.png)

### Stockage
Une fois qu'on récupère, par exemple, le nom d'un paquet sous forme de `string`, on doit choisir quoi en faire.
Une option serait d'utiliser [une base de données](09-db.md), mais cela implique une certaine complexité et on peut déjà
réaliser une version simplifiée avec un système de `persistance` basé sur des fichiers.

#### JSON
Un format facile à gérer pour l'ordinateur et relativement digeste pour un humain est le format JSON.
Ce dernier a l'avantage d'être pris en charge nativement par .NET et pour stocker une instance de classe, il suffit
d'utiliser la classe `JsonSerializer`.

##### Exemple de code de sérialisation d'un deck
![](assets/08a-code-json1.png)

> Deux éléments importants à relever
> 1. Il pourrait y avoir des erreurs => try/catch bienvenue
> 2. Pour faciliter la lecture par un humain, l'indentation est pratique

##### Contraintes pour le json
Tant qu'on utilise des types standards, la sérialization est automatique. Ainsi, avec les éléments suivants :

![](assets/08a-code-decks.png)

![](assets/08a-code-deck-class.png)

Lorsqu'on `sérialise` une liste de `Deck`, on obtient, par exemple, 
après avoir ajouté 2 cartes dans un paquet, le contenu suivant :

##### Contenu JSON

![](assets/08a-code-json.png)

## Read
Une fois les données sauvegardées en `json`,  on peut les charger de manière similaire avec le `JsonSerializer` :

![img.png](assets/08a-code-deserialize.png)

> La méthode `Deserialize` doit indiquer entre chevron (<>) le type de l'objet de destination.
> Dans notre cas, une liste de `Deck` a été sérialisée, c'est donc ce type là qu'on
> souhaite.

> De nouveau, plusieurs éléments indiquent que des erreurs peuvent survenir, dans l'exemple
> le choix a été fait de protéger le tout dans un bloc try/catch, puis de vérifier l'existence
> du fichier source (FileExist), puis de créer une liste vide si le fichier était vide.


## Update
Pour la mise à jour, nous avons déjà tout ce qui est nécessaire et il suffit de modifier un élément en mémoire puis
de pérsister les éléments mis à jour :

![](assets/08a-rename-deck.png)

> L'instruction `dataService.UpdateDeck(currentDeck)` fera appel à `JsonSerializer.Serialize(...)` et ainsi le fichier
> JSON sera mis à jour avec le nouveau nom du deck...

## Delete
Là aussi, rien de particulier, il suffit de supprimer un élément de la liste, puis de réécrire le fichier JSON :

```csharp
decks.RemoveAt(0); //retire le premier deck de la liste
var json = JsonSerializer.Serialize(decks, new JsonSerializerOptions { WriteIndented = true });
File.WriteAllText(decksFilePath, json);
```

### Notes sur la suppression
Il est courant de ne pas réellement supprimer les données en informatique afin de pouvoir les restaurer...

Comment réaliser cela pour que les decks restent présents tout en étant masqués en cas de suppression ?
<details>
<summary>Voir la réponse</summary>

```csharp
// Ajouter un champ à la classe Deck
public bool IsDeleted { get; set; } = false;

//Adapter la récupération des informations, par exemple
public List<Deck> GetDecks()
{
    return decks.Where(deck=>!deck.IsDeleted).ToList();
}

//Pour restaurer un deck, il suffit ensuite de modifier son attribut `IsDeleted`...
```
</details>

---

# Fragments de référence

Les sections suivantes présentent les briques génériques d'une application CRUD.
Les exemples utilisent une entité neutre `Item` — à adapter à votre domaine (carte, exercice, ...).

## Structurer un projet : Models / Services / Pages

Un projet bien organisé est plus facile à maintenir et à faire évoluer :

```
MonProjet/
  Models/      ← classes de données (ex: Item.cs)
  Services/    ← accès aux données (ex: JsonDataService.cs)
  Pages/       ← pages XAML + code-behind
```

### Le modèle

```csharp
namespace MonProjet.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public override string ToString() => $"{Name} (#{Id})";
    }
}
```

> `ToString()` redéfini facilite le débogage (la version par défaut n'affiche que le nom de la classe).

### La génération d'identifiants

Au chargement, calculer le prochain identifiant disponible :

```csharp
if (_items.Any())
{
    _nextId = _items.Max(i => i.Id) + 1;
}
```

## Persister en JSON

Un service dédié centralise lecture et écriture du fichier JSON dans le dossier de données de l'application :

```csharp
using System.Text.Json;

public class JsonDataService
{
    private readonly string _filePath;

    public JsonDataService()
    {
        _filePath = Path.Combine(FileSystem.AppDataDirectory, "items.json");
    }

    public async Task<List<Item>> LoadItemsAsync()
    {
        try
        {
            if (!File.Exists(_filePath))
            {
                return new List<Item>();
            }

            string json = await File.ReadAllTextAsync(_filePath);
            List<Item>? items = JsonSerializer.Deserialize<List<Item>>(json);
            return items ?? new List<Item>();
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Error loading: {ex.Message}");
            return new List<Item>();
        }
    }

    public async Task SaveItemsAsync(List<Item> items)
    {
        try
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            string json = JsonSerializer.Serialize(items, options);
            await File.WriteAllTextAsync(_filePath, json);
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Error saving: {ex.Message}");
        }
    }
}
```

Points clés :

- **`FileSystem.AppDataDirectory`** : dossier de données propre à l'application
- **`WriteIndented`** : JSON lisible par un humain (pratique pour le débogage)
- **`async`/`await`** : l'accès disque peut être lent — l'asynchrone évite de bloquer l'interface
- Le service **retourne une liste vide** en cas de fichier absent ou d'erreur

## Afficher une collection avec CollectionView

`CollectionView` est le composant moderne d'affichage de listes (`ListView` est déprécié).
Le `DataTemplate` décrit l'apparence de **chaque** élément ; les `Binding` lient les propriétés du modèle :

```xml
<CollectionView x:Name="ItemsCollectionView" SelectionMode="None">
    <CollectionView.ItemTemplate>
        <DataTemplate>
            <Border Margin="0,5" Padding="10">
                <Grid ColumnDefinitions="*,Auto,Auto">
                    <VerticalStackLayout Grid.Column="0">
                        <Label Text="{Binding Name}" FontSize="18" FontAttributes="Bold" />
                        <Label Text="{Binding CreatedDate, StringFormat='Créé le {0:dd/MM/yyyy}'}"
                               FontSize="12" TextColor="Gray" />
                    </VerticalStackLayout>

                    <Button Grid.Column="1" Text="✏️" BackgroundColor="Transparent"
                            Clicked="OnEditClicked" CommandParameter="{Binding .}" />
                    <Button Grid.Column="2" Text="🗑️" BackgroundColor="Transparent"
                            Clicked="OnDeleteClicked" CommandParameter="{Binding .}" />
                </Grid>
            </Border>
        </DataTemplate>
    </CollectionView.ItemTemplate>

    <!-- Affiché quand la liste est vide -->
    <CollectionView.EmptyView>
        <Label Text="Aucun élément — ajoutez-en un ci-dessus"
               HorizontalOptions="Center" VerticalOptions="Center" TextColor="Gray" />
    </CollectionView.EmptyView>
</CollectionView>
```

- **`CommandParameter="{Binding .}"`** passe l'objet complet au gestionnaire d'évènement :

```csharp
private async void OnDeleteClicked(object sender, EventArgs e)
{
    Button? button = sender as Button;
    Item? item = button?.CommandParameter as Item;
    if (item == null) return;

    bool confirm = await DisplayAlert("Confirmation",
        $"Voulez-vous vraiment supprimer '{item.Name}' ?", "Supprimer", "Annuler");
    if (!confirm) return;

    _items.Remove(item);
    await _dataService.SaveItemsAsync(_items);
    RefreshView();
}
```

- Une `List<T>` ne notifie **pas** la vue de ses changements : après chaque modification, forcer le rafraîchissement :

```csharp
private void RefreshView()
{
    ItemsCollectionView.ItemsSource = null;
    ItemsCollectionView.ItemsSource = _items;
}
```

> Alternative : `ObservableCollection<T>` notifie automatiquement les ajouts/suppressions
> (mais pas les modifications de propriétés — il faudrait `INotifyPropertyChanged`).
> Dans un contexte d'apprentissage, `List + RefreshView` montre explicitement quand et pourquoi on rafraîchit.

## Formulaire et validation

Pour l'ajout/édition, une **page dédiée** offre plus d'espace qu'un popup et une meilleure expérience :

```xml
<VerticalStackLayout Padding="20" Spacing="15">
    <Label Text="Nom" FontAttributes="Bold" />
    <Entry x:Name="NameEntry" Placeholder="Nom de l'élément" MaxLength="255" />

    <Button Text="Sauvegarder" Clicked="OnSaveClicked" />
    <Button Text="Annuler" Clicked="OnCancelClicked" />
</VerticalStackLayout>
```

Toujours **valider avant de sauvegarder** :

```csharp
private async void OnSaveClicked(object sender, EventArgs e)
{
    string? name = NameEntry.Text?.Trim();

    if (string.IsNullOrWhiteSpace(name))
    {
        await DisplayAlert("Erreur", "Le nom ne peut pas être vide", "OK");
        return;
    }

    _item.Name = name;
    await _dataService.SaveItemsAsync(_items);
    await Shell.Current.GoToAsync("..");   // retour à la liste
}
```

- **`MaxLength`** sur l'`Entry` limite la saisie côté interface
- Pour une saisie rapide (un seul champ), `DisplayPromptAsync` est une alternative au formulaire :

```csharp
string? newName = await DisplayPromptAsync("Renommer", "Nouveau nom :",
    initialValue: item.Name);
```

- Au retour sur la page liste, rafraîchir dans `OnAppearing` :

```csharp
protected override void OnAppearing()
{
    base.OnAppearing();
    RefreshView();
}
```

## Filtrer avec LINQ

Le filtrage se fait **en mémoire** sur la liste déjà chargée, déclenché par l'évènement `TextChanged` d'une `Entry` de recherche.

### Recherche simple

```csharp
// Le nom commence par le texte saisi
_filtered = _items
    .Where(i => i.Name.StartsWith(search, StringComparison.OrdinalIgnoreCase))
    .ToList();

// Le nom contient le texte saisi (n'importe où)
_filtered = _items
    .Where(i => i.Name.Contains(search, StringComparison.OrdinalIgnoreCase))
    .ToList();
```

> `StartsWith`/`Contains` sont sensibles à la casse par défaut : toujours préciser
> `StringComparison.OrdinalIgnoreCase`.

### Multi-termes ET / OU

```csharp
if (search.Contains('|'))
{
    // Mode OU : au moins un des termes
    string[] orTerms = search.Split('|', StringSplitOptions.RemoveEmptyEntries);
    _filtered = _items
        .Where(i => orTerms.Any(term =>
            i.Name.Contains(term.Trim(), StringComparison.OrdinalIgnoreCase)))
        .ToList();
}
else
{
    // Mode ET : tous les termes
    string[] andTerms = search.Split(' ', StringSplitOptions.RemoveEmptyEntries);
    _filtered = _items
        .Where(i => andTerms.All(term =>
            i.Name.Contains(term, StringComparison.OrdinalIgnoreCase)))
        .ToList();
}
```

> Tester le `|` **avant** de découper sur les espaces, sinon `"math|histoire"` serait traité comme un seul terme.

### Autocomplétion (principe)

Proposer au maximum 5 suggestions pendant la saisie :

```csharp
List<Item> suggestions = _items
    .Where(i => i.Name.Contains(search, StringComparison.OrdinalIgnoreCase))
    .Take(5)
    .ToList();
```

Côté interface : un panneau (`Border` + `CollectionView`) sous le champ de recherche, avec `ZIndex`
pour flotter au-dessus de la liste, `IsVisible` piloté par la saisie, et `MaximumHeightRequest`
pour limiter sa hauteur. Au clic sur une suggestion, remplir le champ et réappliquer le filtre.

### Tri

```csharp
_filtered = _filtered.OrderBy(i => i.Name).ToList();
```
