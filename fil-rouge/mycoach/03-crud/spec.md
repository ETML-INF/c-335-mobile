1. Modéliser la classe `Exercise` : identifiant, nom, consigne (+ ce que votre analyse juge utile : groupe musculaire, répétitions...).
2. **Create** : ajouter un exercice via un formulaire ; nom et consigne limités à **255 caractères** et non vides (validation avec message d'erreur).
3. **Read** : la liste des exercices s'affiche dans un `CollectionView` (nom visible au minimum) ; prévoir l'affichage « liste vide ».
4. **Update** : éditer un exercice existant en réutilisant la navigation avec paramètre de la mission 02.
5. **Delete** : supprimer un exercice **avec confirmation**.
6. **Persistance** : les exercices survivent au redémarrage complet de l'application (JSON dans `FileSystem.AppDataDirectory`).
7. **Filtre** : un champ de recherche réduit la liste aux exercices dont le nom ou la consigne contient le texte saisi (insensible à la casse).
8. *(Optionnel — CDC 3)* : plusieurs programmes, recherche multi-termes ET/OU, autocomplétion.
