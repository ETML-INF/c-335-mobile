<details>
<summary>Coup de pouce — squelette du flip</summary>

```csharp
private bool _showingConsigne = false;

private async void OnExerciseTapped(object sender, EventArgs e)
{
    if (_showingConsigne) return;

    await cardView.RotateYTo(90, 200);
    // ... changer le texte affiché (nom → consigne) ...
    cardView.RotationY = -90;
    await cardView.RotateYTo(0, 200);

    _showingConsigne = true;
}
```

</details>
