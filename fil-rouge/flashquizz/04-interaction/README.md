# Mission 04 — Mode apprentissage

**À l'issue de cette mission, vous saurez :**
- orchestrer une logique de session (file de cartes, états, statistiques)
- animer une transition visuelle significative (flip)
- exploiter l'accéléromètre en respectant son cycle de vie

## Spec

1. Depuis la liste, démarrer une **session d'apprentissage** avec les cartes en **ordre aléatoire**.
2. L'écran affiche le **recto** ; un tap sur la carte révèle le **verso** avec une **animation de retournement** (flip).
3. Réponse connue → bouton **« Juste »** : carte suivante.
4. Réponse inconnue → **secouer le téléphone** (= « Faux ») : la carte est **remise dans la file** (mode loop) jusqu'à être connue.
5. La session se termine quand toutes les cartes ont été « justes » au moins une fois ; afficher alors le **résumé** :
   1. temps passé,
   2. carte la plus difficile (la plus ratée),
   3. nombre de cartes connues à 100 % (zéro erreur),
   4. % de mémorisation (cartes 100 % / total).
6. L'accéléromètre est **arrêté** dès qu'on quitte l'écran d'apprentissage.

## Maquette

Le flip attendu :

![flip.gif](../../../activites/flip/flip.gif)

```
┌──────────────────────────┐    ┌──────────────────────────┐
│  Session   carte 3 / 10  │    │  Résumé de session       │
│                          │    │                          │
│   ┌──────────────────┐   │    │  ⏱ Temps passé : 4 min   │
│   │                  │   │    │  💀 Plus difficile :     │
│   │  Capitale de la  │   │    │     « 7 x 8 ? » (3 ratés)│
│   │      CH ?        │   │    │  ✅ Connues à 100% : 7   │
│   │                  │   │    │  📊 Mémorisation : 70 %  │
│   │  (tap = verso)   │   │    │                          │
│   └──────────────────┘   │    │  [ Rejouer ]             │
│                          │    │  [ Retour aux cartes ]   │
│  [ Juste ]  (secouer=faux)│   │                          │
└──────────────────────────┘    └──────────────────────────┘
```

## Théorie utile

- [Les 4 animations de base](../../../supports/10a-animation-cb.md#les-4-animations-de-base)
- [Enchaîner et combiner des animations](../../../supports/10a-animation-cb.md#enchainer-et-combiner-des-animations)
- [Détecter une secousse (shake)](../../../supports/11-accelero.md#detecter-une-secousse-shake)
- [Cycle de vie d'un capteur](../../../supports/11-accelero.md#cycle-de-vie-dun-capteur)

## Indices

- Mélanger une liste : `cards.OrderBy(c => Random.Shared.Next()).ToList()` — ou un [Fisher-Yates](https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates) pour les puristes.
- Une `Queue<Card>` modélise naturellement la file : `Dequeue()` pour la carte courante, `Enqueue()` pour remettre une carte ratée en fin de file.
- Le flip se fait en **deux demi-rotations** sur l'axe Y — le contenu change au milieu, quand la carte est invisible.
- L'évènement `ShakeDetected` arrive sur un **thread secondaire** : `MainThread.BeginInvokeOnMainThread` obligatoire pour toucher l'UI.
- Comptez les erreurs **par carte** (dictionnaire id → nombre de ratés) : le résumé en découle directement.
- Secousse sur l'émulateur : `adb emu sensor set acceleration 100:100:100` (voir théorie).

<details>
<summary>Coup de pouce — squelette du flip</summary>

```csharp
private bool _showingVerso = false;

private async void OnCardTapped(object sender, EventArgs e)
{
    if (_showingVerso) return;   // déjà côté verso

    await cardView.RotateYTo(90, 200);
    // ... changer le texte affiché (recto → verso) ...
    cardView.RotationY = -90;
    await cardView.RotateYTo(..., ...);

    _showingVerso = true;
}
```

</details>

## Validation

- [ ] L'ordre des cartes change d'une session à l'autre
- [ ] Tap sur le recto → animation flip → verso
- [ ] « Juste » passe à la carte suivante
- [ ] Secouer le téléphone remet la carte dans la file (démontrable sur émulateur via adb)
- [ ] Une carte ratée revient jusqu'à être connue ; la session se termine bien
- [ ] Le résumé affiche les 4 statistiques exactes du CDC
- [ ] Quitter l'écran de session arrête l'accéléromètre (démontrable dans le code)
