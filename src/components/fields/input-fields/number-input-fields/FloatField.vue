<script setup lang="ts">
import VNumberField from './VNumberField.vue';
import type { PropType } from 'vue';
import type { Validation } from '@/types/Validation';

const float = defineModel('float', {
  required: true,
  type: [Number, null] as PropType<number | null>
})

const props = defineProps<{
  placeholder?: string
  step?: number
  validations?: Validation[]
}>()
</script>

<template>
  <VNumberField :parser="parseFloat" :placeholder="props.placeholder" :step="step" :validations="props.validations" v-model:number="float" />
</template>

<style scoped></style>