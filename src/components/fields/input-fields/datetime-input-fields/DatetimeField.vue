<script setup lang="ts">
import VInputField from '../VInputField.vue';
import VDateField from './VDateField.vue';
import VTimeField from './VTimeField.vue';
import { ref, watch, type PropType, type Ref } from 'vue';
import type { Validation } from '@/types/Validation'

const datetime = defineModel('datetime', {
  required: true,
  type: [Date, null] as PropType<Date | null>
})

const props = defineProps<{
  placeholder?: string
  validations?: Validation[]
}>()

const inputClass: Ref<string> = ref('')

const date: Ref<Date | null> = ref(datetime.value ?? null)

const time: Ref<string> = ref(datetime.value ? `${datetime.value.getHours()}:${datetime.value.getMinutes()}` : '')

const seperateTime = (time: string): number[] => {
  return time.split(':').map((str: string): number => parseInt(str))
}

const createDatetime = (date: Date, time: string): Date => {
  const timeParts: number[] = seperateTime(time)
  const datetime: Date = date
  datetime.setHours(timeParts[0])
  datetime.setMinutes(timeParts[1])
  return datetime
}

const setDatetime = (dt: Date | null): void => {
  datetime.value = dt
}

watch([date, time], () => {
  if (date.value !== null && time.value !== '') {
    setDatetime(createDatetime(date.value, time.value))
  } else {
    setDatetime(null)
  }
})
</script>

<template>
  <VInputField :input="datetime" :validations="props.validations" v-model:input-class="inputClass">
    <VDateField :input-class="inputClass" :placeholder="props.placeholder" :validations="props.validations" v-model:date="date" />
    <VTimeField :input-class="inputClass" :placeholder="props.placeholder" :validations="props.validations" v-model:time="time" />
  </VInputField>
</template>

<style scoped></style>