<script setup lang="ts">
import VNumberField from './VNumberField.vue';
import { ref, type PropType, type Ref } from 'vue';
import type { Validation } from '@/types/Validation';

const integer = defineModel('integer', {
  required: true,
  type: [Number, null] as PropType<number | null>
})

const props = defineProps<{
  placeholder?: string
  validations?: Validation[]
}>()

const step: Ref<number> = ref(1)
</script>

<template>
  <VNumberField :parser="parseInt" :placeholder="props.placeholder" :step="step" :validations="props.validations" v-model:number="integer" />
</template>

<style scoped></style>