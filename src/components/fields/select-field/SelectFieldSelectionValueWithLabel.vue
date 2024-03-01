<script setup lang="ts">
const props = defineProps<{
  label: string
  value: any
}>()
</script>

<template>
  <div class="selection-value">
    <div class="label">
      {{ props.label }}
    </div>
    <div class="value">
      {{ props.value }}
    </div>
  </div>
</template>

<style scoped>
.label {
  font-size: 9px;
  color: var(--c-light-blue);
}

.value {
  font-size: 11px;
}
</style>