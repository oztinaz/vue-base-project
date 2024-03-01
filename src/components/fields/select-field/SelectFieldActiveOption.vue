<script setup lang="ts">
import type { SelectFieldOption } from '@/types/SelectField'

const selection = defineModel('selection', {
  required: true
})

const props = defineProps<{
  option: SelectFieldOption
}>()

const setSelection = (value: any): void => {
  selection.value = value
}
</script>

<template>
  <div class="option" @click="setSelection(props.option.value)" data-test="option">
    {{ props.option.label }}
  </div>
</template>

<style scoped>
.option:hover {
  background: var(--c-extra-light-grey);
  cursor: pointer;
}
</style>