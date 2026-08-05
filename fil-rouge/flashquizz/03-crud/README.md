# Mission 03 — CRUD

**À l'issue de cette mission, vous saurez :**
- modéliser une entité métier et son service de persistance
- implémenter un cycle complet Create / Read / Update / Delete
- afficher et filtrer une collection avec CollectionView et LINQ

## Spec

1. Modéliser la classe `Card` : identifiant, recto, verso (+ ce que votre analyse juge utile).
2. **Create** : ajouter une carte via un formulaire ; recto et verso limités à **255 caractères** et non vides (validation avec message d'erreur).
3. **Read** : la liste des cartes s'affiche dans un `CollectionView` (recto visible au minimum) ; prévoir l'affichage « liste vide ».
4. **Update** : éditer une carte existante en réutilisant la navigation avec paramètre de la mission 02.
5. **Delete** : supprimer une carte **avec confirmation**.
6. **Persistance** : les cartes survivent au redémarrage complet de l'application (JSON dans `FileSystem.AppDataDirectory`).
7. **Filtre** : un champ de recherche réduit la liste aux cartes dont le recto ou le verso contient le texte saisi (insensible à la casse).
8. *(Optionnel — CDC 7.3)* : plusieurs decks, recherche multi-termes ET/OU, autocomplétion.

## Maquette

```
┌──────────────────────────┐    ┌──────────────────────────┐
│  Mes cartes         [+]  │    │  ← Éditer la carte       │
│  ┌────────────────────┐  │    │                          │
│  │ 🔍 Rechercher...   │  │    │  Recto                   │
│  └────────────────────┘  │    │  ┌────────────────────┐  │
│  ┌────────────────────┐  │    │  │ Capitale de la CH ?│  │
│  │ Capitale de la CH ?│  │    │  └────────────────────┘  │
│  │            ✏️  🗑️  │  │    │  Verso                   │
│  ├────────────────────┤  │    │  ┌────────────────────┐  │
│  │ 7 x 8 ?            │  │    │  │ Berne              │  │
│  │            ✏️  🗑️  │  │    │  └────────────────────┘  │
│  └────────────────────┘  │    │  [ Sauvegarder ]         │
│                          │    │  [ Annuler ]             │
└──────────────────────────┘    └──────────────────────────┘
```

## Théorie utile

- [Structurer un projet : Models / Services / Pages](../../../supports/08a-crud.md#structurer-un-projet-models-services-pages)
- [Persister en JSON](../../../supports/08a-crud.md#persister-en-json)
- [Afficher une collection avec CollectionView](../../../supports/08a-crud.md#afficher-une-collection-avec-collectionview)
- [Formulaire et validation](../../../supports/08a-crud.md#formulaire-et-validation)
- [Filtrer avec LINQ](../../../supports/08a-crud.md#filtrer-avec-linq)

## Indices

- Une `List<T>` ne notifie pas la vue : après chaque modification, réassigner l'`ItemsSource` (ou utiliser `ObservableCollection`).
- `CommandParameter="{Binding .}"` passe la carte complète au gestionnaire du bouton ✏️/🗑️.
- Au retour de la page d'édition, rafraîchir la liste dans `OnAppearing`.
- `MaxLength="255"` sur l'`Entry` bloque la saisie côté UI — mais validez aussi côté code.
- Scroll du `CollectionView` capricieux ? Voir le [bug connu](../../../thematiques/03-CRUD.md#bug-du-scroll-dune-collectionview).

<details>
<summary>Coup de pouce — service de persistance</summary>

```csharp
public class CardDataService
{
    private readonly string _filePath =
        Path.Combine(FileSystem.AppDataDirectory, "cards.json");

    public async Task<List<Card>> LoadAsync()
    {
        if (!File.Exists(_filePath)) return new List<Card>();
        string json = await File.ReadAllTextAsync(_filePath);
        return ...;   // désérialiser (et gérer le cas null/erreur)
    }

    public async Task SaveAsync(List<Card> cards)
    {
        string json = ...;   // sérialiser avec indentation
        await File.WriteAllTextAsync(_filePath, json);
    }
}
```

</details>

## Validation

- [ ] Ajout d'une carte avec validation (vide et > 255 refusés avec message)
- [ ] Liste affichée, y compris l'état « aucune carte »
- [ ] Édition d'une carte existante fonctionnelle
- [ ] Suppression uniquement après confirmation
- [ ] Les cartes sont toujours là après avoir tué et relancé l'app
- [ ] Le filtre réduit la liste pendant la frappe et se réinitialise quand le champ est vidé
- [ ] Vous savez montrer le fichier JSON généré et expliquer son contenu
