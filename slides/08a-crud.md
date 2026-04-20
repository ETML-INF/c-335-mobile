---
theme: default
title: "CRUD & Persistance JSON"
info: Créer, lire, modifier et supprimer des données avec fichiers JSON en .NET MAUI
author: ETML
transition: slide-left
mdc: true
---

# CRUD & Persistance JSON

## Gérer des données dans une app mobile

<div class="pt-12">
  <span class="px-2 py-1 rounded bg-blue-500 text-white">
    .NET MAUI : CRUD avec fichiers JSON
  </span>
</div>

---

# Plan de la présentation

1. **CRUD** - L'acronyme fondamental
2. **Create** - Saisie utilisateur et sérialisation JSON
3. **Read** - Désérialisation JSON
4. **Update** - Modifier en mémoire et réécrire
5. **Delete** - Supprimer et suppression logique

---

# CRUD : les 4 opérations de base

<v-clicks>

Toute gestion de données tourne autour de 4 opérations fondamentales :

| Lettre | Opération | Description              |
| ------ | --------- | ------------------------ |
| **C**  | Create    | Créer / Ajouter          |
| **R**  | Read      | Lire / Charger           |
| **U**  | Update    | Modifier                 |
| **D**  | Delete    | Supprimer                |

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-blue-100 rounded text-blue-900">

Ces opérations peuvent s'appliquer à une **base de données**, des **fichiers**, une **API**...
Dans ce cours, on commence avec la **persistance en fichiers JSON**.

</div>

</v-click>

---
layout: section
---

# C — Create
## Saisie utilisateur et sérialisation JSON

---

# Saisie : récupérer une information

Pour demander une valeur à l'utilisateur (ex : nom d'un paquet de cartes), deux approches :

<v-clicks>

- Un composant **`Entry`** dans le XAML
- La méthode **`DisplayPromptAsync`** (dialogue modal)

</v-clicks>

<v-click>

### Exemple avec `DisplayPromptAsync`

```csharp
string newName = await DisplayPromptAsync(
    "Renommer",
    "Nouveau nom du paquet:",
    "Enregistrer",
    "Annuler",
    initialValue: currentDeck.Name);

if (string.IsNullOrWhiteSpace(newName))
    return;

currentDeck.Name = newName;
```

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-800 rounded text-blue-100">

`DisplayPromptAsync` retourne `null` si l'utilisateur annule — **toujours vérifier** le résultat.

</div>

</v-click>

---

# Stockage : persistance par fichier JSON

<v-clicks>

- Une **base de données** est puissante mais complexe
- Pour une version simplifiée, on utilise des **fichiers JSON**
- .NET gère JSON nativement via `System.Text.Json`

</v-clicks>

<v-click>

### Le modèle : classe `Deck`

```csharp
public class Deck
{
    public string Id { get; set; }
    public string Name { get; set; }
    public List<Card> Cards { get; set; }
    public DateTime CreatedDate { get; set; }
    public int TimesPlayed { get; set; }

    public Deck()
    {
        Id = Guid.NewGuid().ToString();
        Name = string.Empty;
        Cards = new List<Card>();
        CreatedDate = DateTime.Now;
        TimesPlayed = 0;
    }
}
```

</v-click>

---

# Sérialisation : écrire en JSON

<v-clicks>

On garde la liste en mémoire :

```csharp
private List<Deck> decks = new List<Deck>();
```

</v-clicks>

<v-click>

Pour **sauvegarder** sur le disque, on utilise `JsonSerializer.Serialize` :

```csharp
try
{
    var json = JsonSerializer.Serialize(
        decks,
        new JsonSerializerOptions { WriteIndented = true });
    File.WriteAllText(decksFilePath, json);
}
catch (Exception ex)
{
    Console.WriteLine($"Error saving decks: {ex.Message}");
}
```

</v-click>

<v-click>

<div class="mt-4 p-3 bg-yellow-600 rounded text-yellow-200">

`WriteIndented = true` → fichier lisible par un humain.
Le `try/catch` protège contre les erreurs d'accès fichier.

</div>

</v-click>

---

# Résultat JSON obtenu

```json
[
  {
    "Id": "e9e90b3c-05b5-49c3-b4aa-2fceeab85562",
    "Name": "ict-335",
    "Cards": [
      {
        "Id": "7723b6f1-9681-449e-8cfa-343d8eca9f39",
        "Recto": "1. Que veut dire l'acronyme MAUI ?",
        "Verso": "Multiplatform Application User Interface",
        "TimesPlayed": 0,
        "TimesCorrect": 0,
        "TimesIncorrect": 0,
        "SuccessRate": 0
      }
    ],
    "CreatedDate": "2026-01-01T07:55:25.6055764+01:00",
    "TimesPlayed": 0
  }
]
```

<v-click>

<div class="mt-4 p-3 bg-green-700 rounded text-green-100">

Tant qu'on utilise des types standards (`string`, `int`, `List<>`, `DateTime`), la sérialisation est **automatique**.

</div>

</v-click>

---
layout: section
---

# R — Read
## Charger les données depuis le fichier JSON

---

# Désérialisation : lire depuis JSON

`JsonSerializer.Deserialize` recrée les objets depuis le fichier :

```csharp
private void LoadDecks()
{ try {
        if (File.Exists(decksFilePath))
        {
            var json = File.ReadAllText(decksFilePath);
            decks = JsonSerializer.Deserialize<List<Deck>>(json)
                    ?? new List<Deck>();
        }
        else
            decks = new List<Deck>();
    } catch {
        decks = new List<Deck>();
    }
}
```

<v-clicks>

<div class="mt-1 p-1 bg-blue-800 rounded text-blue-100">

`Deserialize<List<Deck>>` : le type entre chevrons doit correspondre à ce qui a été sérialisé.

</div>

<div class="mt-1 p-1 bg-orange-100 rounded text-orange-900">

`?? new List<Deck>()` : si le fichier est vide, on repart d'une liste vide.
Le `try/catch` couvre les fichiers corrompus ou inaccessibles.

</div>

</v-clicks>

---
layout: section
---

# U — Update
## Modifier en mémoire, puis réécrire

---

# Update : modifier un élément existant

<div class="grid grid-cols-2 gap-6">

<div>

### 1. L'événement UI

```csharp
private async void OnRenameDeckClicked(
    object sender, EventArgs e)
{
    if (currentDeck == null) return;

    string newName = await DisplayPromptAsync(
        "Renommer",
        "Nouveau nom du paquet:",
        "Enregistrer", "Annuler",
        initialValue: currentDeck.Name);

    if (string.IsNullOrWhiteSpace(newName))
        return;

    currentDeck.Name = newName;
    dataService.UpdateDeck(currentDeck);
    DeckNameLabel.Text = newName;
}
```

</div>

<v-click>
<div>

### 2. Le service de données

```csharp
public void UpdateDeck(Deck deck)
{
    var existingDeck = decks
        .FirstOrDefault(d => d.Id == deck.Id);

    if (existingDeck != null)
    {
        var index = decks.IndexOf(existingDeck);
        decks[index] = deck;
        SaveDecks();
        UpdateStatistics();
    }
}
```

</div>
</v-click>

</div>

<v-click>

<div class="mt-1 p-1 bg-green-700 rounded text-green-100">

On retrouve le deck par **Id**, on le remplace dans la liste, puis on appelle `SaveDecks()` → le fichier JSON est mis à jour.

</div>

</v-click>

---
layout: section
---

# D — Delete
## Supprimer un élément

---

# Delete : supprimer et réécrire

La suppression suit le même principe : modifier la liste en mémoire, puis réécrire le fichier.

```csharp
decks.RemoveAt(0); // retire le premier deck de la liste

var json = JsonSerializer.Serialize(
    decks,
    new JsonSerializerOptions { WriteIndented = true });
File.WriteAllText(decksFilePath, json);
```

<v-click>

<div class="mt-6 p-4 bg-orange-100 rounded text-orange-900">

**Attention** : en informatique, on évite souvent la suppression réelle pour pouvoir restaurer les données.

</div>

</v-click>

---

# Suppression logique (soft delete)

Plutôt que de supprimer, on **masque** l'élément avec un flag :

```csharp {0|1-2|4-9|11-13|all}
// 1. Ajouter un champ à la classe Deck
public bool IsDeleted { get; set; } = false;

// 2. Adapter la récupération : exclure les supprimés
public List<Deck> GetDecks()
{
    return decks.Where(deck => !deck.IsDeleted).ToList();
}

// 3. "Supprimer" = marquer comme supprimé
currentDeck.IsDeleted = true;
dataService.UpdateDeck(currentDeck);
// Pour restaurer : remettre IsDeleted = false
```

<v-click>

<div class="mt-4 p-3 bg-green-100 rounded text-green-900">

Les données restent dans le fichier. La restauration est possible à tout moment.

</div>

</v-click>

---

# Récapitulatif CRUD

<v-clicks>

| Opération | Méthode clé                      | Étapes                                     |
| --------- | -------------------------------- | ------------------------------------------ |
| **Create** | `JsonSerializer.Serialize`      | Ajouter à la liste → écrire le fichier     |
| **Read**   | `JsonSerializer.Deserialize`    | Lire le fichier → reconstruire la liste    |
| **Update** | `FirstOrDefault` + `Serialize`  | Trouver par Id → remplacer → écrire        |
| **Delete** | `RemoveAt` / flag `IsDeleted`   | Retirer (ou masquer) → écrire              |

</v-clicks>

<v-click>

### Points clés

1. La liste est toujours en **mémoire** — on lit au démarrage, on écrit à chaque modification
2. `try/catch` est indispensable pour les opérations fichier
3. `WriteIndented = true` améliore la lisibilité du fichier JSON
4. La **suppression logique** (`IsDeleted`) permet de restaurer des données
5. Les types standards sont sérialisés **automatiquement** par `System.Text.Json`

</v-click>

---
layout: center
class: text-center
---

<v-click every=1>
Plus de données perdues au redémarrage...

<div class="pt-12 mb-4">
  <span class="px-4 py-2 rounded bg-blue-500 text-white text-xl">
    CRUD avec persistance JSON !
  </span>
</div>

# Questions ?

<div class="mt-8 text-gray-500">

Prochaine étape : remplacer les fichiers JSON par une vraie **base de données**

</div>
</v-click>
