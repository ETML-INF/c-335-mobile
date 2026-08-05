<details>
<summary>Coup de pouce — enregistrement des routes</summary>

```csharp
// AppShell.xaml.cs
public AppShell()
{
    InitializeComponent();
    Routing.RegisterRoute("edit", typeof(EditExercisePage));
    Routing.RegisterRoute(..., ...);
}
```

```csharp
// Réception d'un paramètre dans EditExercisePage
public partial class EditExercisePage : ContentPage, IQueryAttributable
{
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        if (query.TryGetValue("exerciseId", out var idObj))
        {
            // ... afficher la valeur reçue pour prouver la réception
        }
    }
}
```

</details>
