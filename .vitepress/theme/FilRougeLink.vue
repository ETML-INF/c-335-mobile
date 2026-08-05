<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { filRouge, PROJECTS } from './filRouge.js'

const props = defineProps({
  // chemin après le fil rouge, ex : "03-crud/README.md"
  ex: { type: String, required: true },
  label: { type: String, required: true },
})

const href = computed(() => {
  let ex = props.ex.endsWith('/') ? props.ex + 'README.md' : props.ex
  ex = ex.replace(/\.md$/, '.html')
  return withBase(`/fil-rouge/${filRouge.value}/${ex}`)
})
</script>

<template>
  <a :href="href">{{ PROJECTS[filRouge].emoji }} {{ PROJECTS[filRouge].name }} — {{ label }}</a>
</template>
