<script setup>
import { useData } from 'vitepress'

const { page } = useData()

const visible = () =>
  page.value.filePath.startsWith('supports') ||
  page.value.filePath.endsWith('cdc.md')

const print = () => window.print()
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 1rem;
  border: 0.1rem solid rgb(109, 107, 107);
  width: fit-content;
  font-size: 0.7rem;
  padding: 0.2rem 1rem;
  color: #5c73e7;
  cursor: pointer;
  background: none;
  font-family: inherit;
}

.btn:hover {
  opacity: 0.5;
}
</style>

<template>
  <button class="btn" v-if="visible()" @click="print">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
      <path fill="#313741" d="M28 9h-3V3H7v6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v4h18v-4h3a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M9 5h14v4H9Zm14 22H9v-8h14Zm5-5h-3v-4H7v4H4V11h24Z"/>
      <circle fill="#313741" cx="25" cy="14" r="1.5"/>
    </svg>
    Imprimer en PDF
  </button>
</template>
