# Mission 02 — Pages et navigation

**À l'issue de cette mission, vous saurez :**
- transformer un storyboard en pages XAML réelles
- structurer la navigation d'une application avec Shell
- passer des données d'une page à l'autre

## Spec

<FilRougeSlot name="02-pages/spec" />

## Maquette

Le résultat attendu : votre storyboard qui « se navigue » — écrans encore vides, mais tous accessibles.
Comparez chaque page à sa maquette de la mission 01.

## Théorie utile

- [Layout](../../supports/04-layout.md)
- [Évènements](../../supports/05a-evenement.md)
- [Déclarer des routes Shell](../../supports/06-shell.md#declarer-des-routes)
- [Naviguer et passer des paramètres](../../supports/07-navigation.md#passer-des-parametres)

## Indices

- `Shell.Current.GoToAsync("...")` empile, `GoToAsync("..")` dépile — ne mélangez pas avec `Navigation.PushAsync` (piles différentes, conflits garantis).
- Les pages hors structure Shell doivent être **enregistrées** avec `Routing.RegisterRoute`, sinon : exception à la navigation.
- Pour le passage de paramètres, la méthode `Dictionary` + `IQueryAttributable` est la plus polyvalente.

<FilRougeSlot name="02-pages/indices" />

<FilRougeSlot name="02-pages/code" />

## Validation

- [ ] Chaque écran du storyboard existe en tant que page
- [ ] Navigation complète : chaque écran est atteignable et le retour fonctionne
- [ ] Un paramètre est transmis à la page d'édition et sa réception est démontrable
- [ ] Aucun `Navigation.PushAsync` mélangé avec Shell
- [ ] L'application se lance sans erreur sur l'émulateur

<FilRougeSlot name="02-pages/validation" />
