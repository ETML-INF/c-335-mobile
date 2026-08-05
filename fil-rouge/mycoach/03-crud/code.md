<details>
<summary>Coup de pouce — service de persistance</summary>

```csharp
public class ExerciseDataService
{
    private readonly string _filePath =
        Path.Combine(FileSystem.AppDataDirectory, "exercises.json");

    public async Task<List<Exercise>> LoadAsync()
    {
        if (!File.Exists(_filePath)) return new List<Exercise>();
        string json = await File.ReadAllTextAsync(_filePath);
        return ...;   // désérialiser (et gérer le cas null/erreur)
    }

    public async Task SaveAsync(List<Exercise> exercises)
    {
        string json = ...;   // sérialiser avec indentation
        await File.WriteAllTextAsync(_filePath, json);
    }
}
```

</details>
