<details>
<summary>Coup de pouce — enregistrement des routes</summary>

```csharp
// AppShell.xaml.cs
public AppShell()
{
    InitializeComponent();
    Routing.RegisterRoute("edit", typeof(EditCardPage));
    Routing.RegisterRoute(..., ...);
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
