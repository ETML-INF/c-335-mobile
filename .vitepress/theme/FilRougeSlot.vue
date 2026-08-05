<script setup>
import { computed } from 'vue'
import { filRouge } from './filRouge.js'

const props = defineProps({ name: String })

// Eager : Vite bundle tous les slots au build, switch réactif instantané et SSR-safe
const modules = import.meta.glob(
  ['/fil-rouge/*/[0-9]*/*.md', '/fil-rouge/*/cdc.md', '/fil-rouge/*/missions-table.md'],
  { eager: true }
)

const SlotContent = computed(() => {
  return modules[`/fil-rouge/${filRouge.value}/${props.name}.md`]?.default ?? null
})
</script>

<template>
  <component :is="SlotContent" v-if="SlotContent" />
</template>
