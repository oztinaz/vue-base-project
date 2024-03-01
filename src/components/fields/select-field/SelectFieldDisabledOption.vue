<script setup lang="ts">
import type { SelectFieldOption } from '@/types/SelectField'

const props = defineProps<{
  option: SelectFieldOption
}>()
</script>

<template>
  <div class="option disabled" data-test="option">
    {{ props.option.label }}
  </div>
</template>

<style scoped>
.disabled {
  background: var(--c-light-grey);
  cursor: not-allowed;
}
</style>