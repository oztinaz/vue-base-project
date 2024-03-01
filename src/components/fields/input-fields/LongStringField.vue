<script setup lang="ts">
import VInputField from './VInputField.vue'
import { ref, type Ref } from 'vue'
import type { Validation } from '@/types/Validation'

const string = defineModel('string', {
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
  <VInputField :input="string" :validations="props.validations" v-model:input-class="inputClass">
    <textarea
      :class="inputClass"
      :placeholder="props.placeholder"
      v-model="string"
    >
    </textarea>
  </VInputField>
</template>

<style scoped>
textarea {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
