<script setup lang="ts">
import SelectFieldSelectionValueWithLabel from './SelectFieldSelectionValueWithLabel.vue'
import SelectFieldSelectionValueWithoutLabel from './SelectFieldSelectionValueWithoutLabel.vue'
import FaCaretDownIcon from '@/components/icons/fa/FaCaretDownIcon.vue'
import FaCaretLeftIcon from '@/components/icons/fa/FaCaretLeftIcon.vue'
import { computed, type ComputedRef } from 'vue';

const isOpen = defineModel('isOpen', {
  required: true,
  type: Boolean
})

const props = defineProps<{
  close: Function,
  open: Function,
  selection: any,
  label?: string
}>()

const selectionClass: ComputedRef<string> = computed((): string => {
  const cls: string = 'selection'
  return isOpen.value ? `${cls} open` : cls
})

const toggle = (): void => {
  if (isOpen.value) {
    props.close()
    return
  }
  props.open()
}
</script>

<template>
  <div :class="selectionClass" @click="toggle()">
    <SelectFieldSelectionValueWithLabel :label="props.label" :value="props.selection" data-test="with-label" v-if="props.label" />
    <SelectFieldSelectionValueWithoutLabel :value="props.selection" data-test="without-label" v-else />
    <FaCaretDownIcon color="grey" data-test="down-icon" v-if="isOpen" />
    <FaCaretLeftIcon color="grey" data-test="left-icon" v-else />
  </div>
</template>

<style scoped>
.selection {
  align-items: center;
  background: white;
  border: 1px solid var(--c-grey);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  height: 100%;
  justify-content: space-between;
  padding: 0 10px;
}

.selection:hover {
  background: var(--c-extra-light-grey);
}

.selection.open {
  outline: 2px solid var(--c-extra-light-blue);
}
</style>