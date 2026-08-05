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
