# Mission 04 — Mode session

<FilRougeSlot name="04-interaction/objectifs" />

## Spec

<FilRougeSlot name="04-interaction/spec" />

## Maquette

<FilRougeSlot name="04-interaction/maquette" />

## Théorie utile

- [Les 4 animations de base](../../supports/10a-animation-cb.md#les-4-animations-de-base)
- [Enchaîner et combiner des animations](../../supports/10a-animation-cb.md#enchainer-et-combiner-des-animations)
- [Détecter une secousse (shake)](../../supports/11-accelero.md#detecter-une-secousse-shake)
- [Cycle de vie d'un capteur](../../supports/11-accelero.md#cycle-de-vie-dun-capteur)

## Indices

- Le flip se fait en **deux demi-rotations** sur l'axe Y — le contenu change au milieu, quand la carte est invisible.
- L'évènement `ShakeDetected` arrive sur un **thread secondaire** : `MainThread.BeginInvokeOnMainThread` obligatoire pour toucher l'UI.
- Secousse sur l'émulateur : `adb emu sensor set acceleration 100:100:100` (voir théorie).

<FilRougeSlot name="04-interaction/indices" />

<FilRougeSlot name="04-interaction/code" />

## Validation

<FilRougeSlot name="04-interaction/validation" />

- [ ] Le résumé affiche les 4 statistiques exactes du CDC
