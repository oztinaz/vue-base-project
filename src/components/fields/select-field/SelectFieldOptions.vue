<script setup lang="ts">
import { ref, type ComputedRef, type Ref, computed } from 'vue';
import SelectFieldOption from './SelectFieldOption.vue';
import SelectFieldOptionSearch from './SelectFieldOptionSearch.vue';
import type { SelectFieldOption as TSelectFieldOption } from '@/types/SelectField'

const selection = defineModel('selection', {
  required: true
})

const props = withDefaults(defineProps<{
  options: TSelectFieldOption[]
  searchable?: boolean
}>(), {
  searchable: false
})

const searchQuery: Ref<string> = ref('')

const options: ComputedRef<TSelectFieldOption[]> = computed((): TSelectFieldOption[] => {
  if (props.searchable && searchQuery.value !== '') {
    return props.options.filter((option: TSelectFieldOption) => option.label.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
  }
  return props.options
})
</script>

<template>
  <div class="options">
    <SelectFieldOptionSearch v-model:search-query="searchQuery" data-test="option-search" v-if="props.searchable" />
    <SelectFieldOption
      v-for="option in options"
      :key="option.label"
      :option="option"
      data-test="option"
      v-model:selection="selection"
    />
  </div>
</template>

<style scoped>
.options {
  background: white;
  border: 1px solid var(--c-grey);
  border-top: none;
  border-radius: 2px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  z-index: 1;
}

:deep(.option) {
  padding: 10px;
}
</style>