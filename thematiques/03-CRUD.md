# CRUD

![crud.png](assets/crud.png)

Une application qui gérè des données utilise: **C**reate, **R**ead, **U**pdate, **D**elete —
quatre opérations que l'on retrouve partout, du carnet d'adresses à la liste de courses.
Dans cette thématique, il s'agit de modéliser les données du fil rouge, les afficher dans une liste
et les faire survivre au redémarrage de l'application grâce à la persistance JSON.

**À l'issue de cette thématique, vous serez capable de :**
- modéliser une entité métier (classe C# avec propriétés) et une couche de services
- afficher une collection avec `CollectionView` et un `DataTemplate`
- implémenter les 4 opérations CRUD avec un formulaire validé
- persister des données en JSON sur l'appareil
- filtrer une collection avec LINQ (`Where`, `Contains`)

## Théorie

### Supports
- [CRUD](../supports/08a-crud.md)

### Slides
- [CRUD](https://etml-inf.github.io/c-335-mobile/slides/08a-crud/)

### Kahoot
- [crud extended](https://create.kahoot.it/share/crud-extended/42046993-70f7-4f9a-afd7-026e233796ed)

**Particularités utiles pour les missions**

- [Structurer un projet : Models / Services / Pages](../supports/08a-crud.md#structurer-un-projet-models-services-pages)
- [Afficher une collection avec CollectionView](../supports/08a-crud.md#afficher-une-collection-avec-collectionview)
- [Persister en JSON](../supports/08a-crud.md#persister-en-json)
- [Formulaire et validation](../supports/08a-crud.md#formulaire-et-validation)
- [Filtrer avec LINQ](../supports/08a-crud.md#filtrer-avec-linq)

## Pratique

### Missions fil rouge

- [ ] [Mission 03 : CRUD](../fil-rouge/flashquizz/03-crud/README.md)

### Bug du scroll d'une collectionView
- Avec MAUI8, il fallait ajouter "FillAndExpand" et avec MAUI9+, il faut définir un "HeightRequest" dans le composant "CollectionView".
  [Référence](https://learn.microsoft.com/en-us/answers/questions/1200032/collectionview-cant-scroll)

### Pour aller plus loin : MVVM/EF (avancé, optionnel)

<details>
<summary>
Afficher les éléments MVVM
</summary>

#### Théorie MVVM

##### Supports MVVM
- [MVVM](../supports/05b-mvvm.md)
- [CRUD MVVM](../supports/08b-crud.md)
- [SQLITE](../supports/09-db.md)

###### Références EF
- [EntityFramework (Persistence)](https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli)

##### Slides MVVM
- [CRUD](https://eduvaud-my.sharepoint.com/:p:/g/personal/jonathan_melly_eduvaud_ch/ERG7KDRhoelFngBf9bRbnaEBxp9S0o-PUCQsgBMa3XQ8Yg?e=qPaylv)
- [MVVM](https://eduvaud-my.sharepoint.com/:p:/g/personal/jonathan_melly_eduvaud_ch/ET-n9RZYpktFskQ8Il9xQv4BsRxezaKL-ILDp--AJ0BukA?e=z4tA27)
- [SQLite](https://eduvaud-my.sharepoint.com/:p:/g/personal/jonathan_melly_eduvaud_ch/EfOweX5hs5tHjqPIIcnxFxoBBqo_BYbszqYmy1xFYpGOSw?e=yvZ0gz)

#### Activités MVVM
1. [ ] [MVVM](https://labs.section-inf.ch/codelabs/mobile-03-mvvm1/index.html?index=..%2F..index)
2. [ ] [ListView **C**reate**R**ead](https://labs.section-inf.ch/codelabs/mobile-04-mvvm2/index.html?index=..%2F..index)
3. [ ] [**U**pdate**D**elete > Persistence](https://labs.section-inf.ch/codelabs/mobile-05-crud1/index.html?index=..%2F..index)

#### Synthèse MVVM
- [Récap 1](https://eduvaud.sharepoint.com/:p:/s/msteams_d0db31/Edir3t8BDNJEhNummU3KMxYBymZeN2Agw4agnx3gO6t6Gw?e=XApwi3)

</details>

