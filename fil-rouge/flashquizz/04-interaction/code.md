<details>
<summary>Coup de pouce — squelette du flip</summary>

```csharp
private bool _showingVerso = false;

private async void OnCardTapped(object sender, EventArgs e)
{
    if (_showingVerso) return;

    await cardView.RotateYTo(90, 200);
    // ... changer le texte affiché (recto → verso) ...
    cardView.RotationY = -90;
    await cardView.RotateYTo(..., ...);

    _showingVerso = true;
}
```

</details>
