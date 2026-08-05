// État partagé du choix de fil rouge (persisté en localStorage)
import { ref, watch } from 'vue'

const KEY = 'c335-fil-rouge'
const DEFAULT = 'flashquizz'

export const PROJECTS = {
  flashquizz: { name: 'Flashquizz', emoji: '🃏' },
  mycoach:    { name: 'MyCoach',    emoji: '🏋️' },
}

export const filRouge = ref(DEFAULT)

if (typeof window !== 'undefined') {
  const v = localStorage.getItem(KEY)
  if (v in PROJECTS) filRouge.value = v
  watch(filRouge, (val) => localStorage.setItem(KEY, val))
}

export function setFilRouge(value) {
  filRouge.value = value
}
