1. Modéliser la classe `Card` : identifiant, recto, verso (+ ce que votre analyse juge utile).
2. **Create** : ajouter une carte via un formulaire ; recto et verso limités à **255 caractères** et non vides (validation avec message d'erreur).
3. **Read** : la liste des cartes s'affiche dans un `CollectionView` (recto visible au minimum) ; prévoir l'affichage « liste vide ».
4. **Update** : éditer une carte existante en réutilisant la navigation avec paramètre de la mission 02.
5. **Delete** : supprimer une carte **avec confirmation**.
6. **Persistance** : les cartes survivent au redémarrage complet de l'application (JSON dans `FileSystem.AppDataDirectory`).
7. **Filtre** : un champ de recherche réduit la liste aux cartes dont le recto ou le verso contient le texte saisi (insensible à la casse).
8. *(Optionnel — CDC 7.3)* : plusieurs decks, recherche multi-termes ET/OU, autocomplétion.
