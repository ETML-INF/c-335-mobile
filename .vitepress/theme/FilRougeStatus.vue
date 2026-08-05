<script setup>
import { withBase } from 'vitepress'
import { filRouge, PROJECTS } from './filRouge.js'
</script>

<template>
  <p class="fil-rouge-status">
    Fil rouge actuel :
    <a :href="withBase('/fil-rouge/README.html')" class="fil-rouge-badge">
      {{ PROJECTS[filRouge].emoji }} <strong>{{ PROJECTS[filRouge].name }}</strong>
    </a>
    <span class="hint">(modifiable sur la page <a :href="withBase('/fil-rouge/README.html')">Fil rouge</a>)</span>
  </p>
</template>

<style scoped>
.fil-rouge-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-2);
  font-size: 0.95rem;
}

.fil-rouge-badge {
  font-size: 1rem;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.fil-rouge-badge:hover strong {
  text-decoration: underline;
}

.hint {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
</style>
