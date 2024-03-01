<script setup lang="ts">
import SelectFieldActiveOption from './SelectFieldActiveOption.vue'
import SelectFieldDisabledOption from './SelectFieldDisabledOption.vue'
import { computed, type ComputedRef } from 'vue';
import type { SelectFieldOption } from '@/types/SelectField'

const selection = defineModel('selection', {
  required: true
})

const props = defineProps<{
  option: SelectFieldOption
}>()

const isDisabled: ComputedRef<boolean> = computed((): boolean => {
  return selection.value === props.option.value
})
</script>

<template>
  <SelectFieldDisabledOption :option="props.option" data-test="disabled-option" v-if="isDisabled" />
  <SelectFieldActiveOption :option="props.option" v-model:selection="selection" data-test="active-option" v-else />
</template>

<style scoped>
</style>