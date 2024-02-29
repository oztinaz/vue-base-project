<script setup lang="ts">
import VInputField from '../VInputField.vue'
import VTimeField from './VTimeField.vue'
import { ref, type Ref } from 'vue';
import type { Validation } from '@/types/Validation'

const time = defineModel('time', {
  required: true,
  type: String
})

const props = defineProps<{
  placeholder?: string
  validations?: Validation[]
}>()

const inputClass: Ref<string> = ref('')
</script>

<template>
  <VInputField :input="time" :validations="props.validations" v-model:input-class="inputClass">
    <VTimeField :input-class="inputClass" :placeholder="props.placeholder" v-model:time="time" />
  </VInputField>
</template>

<style scoped></style>