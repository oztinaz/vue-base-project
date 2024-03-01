<script setup lang="ts">
import SelectFieldOptions from './SelectFieldOptions.vue'
import SelectFieldSelection from './SelectFieldSelection.vue'
import { ref, watch, type Ref, onMounted } from 'vue'
import type { SelectFieldOption } from '@/types/SelectField'

const selection = defineModel('selection', {
  required: true
})

const props = withDefaults(defineProps<{
  options: SelectFieldOption[]
  label?: string
  searchable?: boolean
}>(), {
  searchable: false
})

const isOpen: Ref<boolean> = ref(false)

const open = (): void => {
  isOpen.value = true
}

const close = (): void => {
  isOpen.value = false
}

watch(selection, () => {
  close()
})
</script>

<template>
  <div class="select-field">
    <SelectFieldSelection :close="close" :label="props.label" :open="open" :selection="selection" v-model:is-open="isOpen" />
    <SelectFieldOptions :options="options" :searchable="props.searchable" v-model:selection="selection" data-test="options" v-if="isOpen" />
  </div>
</template>

<style scoped>
.select-field {
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 30px;
  width: 100%;
}
</style>