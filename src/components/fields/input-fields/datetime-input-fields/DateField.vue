<script setup lang="ts">
import VInputField from '../VInputField.vue'
import VDateField from './VDateField.vue'
import { computed, ref, type PropType, type Ref, type ComputedRef, watch } from 'vue'
import type { Validation } from '@/types/Validation'

const date = defineModel('date', {
  required: true,
  type: [Date, null] as PropType<Date | null>
})

const props = defineProps<{
  placeholder?: string
  validations?: Validation[]
}>()

const inputClass: Ref<string> = ref('')
</script>

<template>
  <VInputField :input="date" :validations="props.validations" v-model:input-class="inputClass">
    <VDateField :input-class="inputClass" :placeholder="props.placeholder" v-model:date="date" />
  </VInputField>
</template>

<style scoped></style>