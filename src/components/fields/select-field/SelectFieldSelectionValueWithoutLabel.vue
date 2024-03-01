<script setup lang="ts">
const props = defineProps<{
  value: any
}>()
</script>

<template>
  <div class="selection-value">
    {{ props.value }}
  </div>
</template>

<style scoped></style>