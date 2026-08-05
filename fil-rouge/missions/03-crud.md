# Mission 03 — CRUD

**À l'issue de cette mission, vous saurez :**
- modéliser une entité métier et son service de persistance
- implémenter un cycle complet Create / Read / Update / Delete
- afficher et filtrer une collection avec CollectionView et LINQ

## Spec

<FilRougeSlot name="03-crud/spec" />

## Maquette

<FilRougeSlot name="03-crud/maquette" />

## Théorie utile

- [Structurer un projet : Models / Services / Pages](../../supports/08a-crud.md#structurer-un-projet-models-services-pages)
- [Persister en JSON](../../supports/08a-crud.md#persister-en-json)
- [Afficher une collection avec CollectionView](../../supports/08a-crud.md#afficher-une-collection-avec-collectionview)
- [Formulaire et validation](../../supports/08a-crud.md#formulaire-et-validation)
- [Filtrer avec LINQ](../../supports/08a-crud.md#filtrer-avec-linq)

## Indices

- Une `List<T>` ne notifie pas la vue : après chaque modification, réassigner l'`ItemsSource` (ou utiliser `ObservableCollection`).
- Au retour de la page d'édition, rafraîchir la liste dans `OnAppearing`.
- `MaxLength="255"` sur l'`Entry` bloque la saisie côté UI — mais validez aussi côté code.
- Scroll du `CollectionView` capricieux ? Voir le [bug connu](../../thematiques/03-CRUD.md#bug-du-scroll-dune-collectionview).

<FilRougeSlot name="03-crud/indices" />

<FilRougeSlot name="03-crud/code" />

## Validation

- [ ] Suppression uniquement après confirmation
- [ ] Le filtre réduit la liste pendant la frappe et se réinitialise quand le champ est vidé
- [ ] Vous savez montrer le fichier JSON généré et expliquer son contenu

<FilRougeSlot name="03-crud/validation" />
