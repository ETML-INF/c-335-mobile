<script setup>
import { filRouge, setFilRouge, PROJECTS } from './filRouge.js'
</script>

<template>
  <div class="chooser">
    <button
      v-for="(p, id) in PROJECTS"
      :key="id"
      class="choice"
      :class="{ active: filRouge === id }"
      @click="setFilRouge(id)"
    >
      <span class="emoji">{{ p.emoji }}</span>
      <span class="name">{{ p.name }}</span>
      <span class="badge" v-if="filRouge === id">mon fil rouge ✓</span>
    </button>
  </div>
  <p class="hint">
    Les liens de mission des thématiques pointent vers <strong>{{ PROJECTS[filRouge].name }}</strong>
    (modifiable ici en tout temps).
  </p>
</template>

<style scoped>
.chooser {
  display: flex;
  gap: 1rem;
  margin: 1rem 0 0.5rem;
  flex-wrap: wrap;
}

.choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem 2rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: border-color 0.2s, transform 0.1s;
}

.choice:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.choice.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.emoji {
  font-size: 2rem;
}

.name {
  font-weight: 600;
}

.badge {
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
}

.hint {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
