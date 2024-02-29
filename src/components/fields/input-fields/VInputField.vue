<script setup lang="ts">
import ValidationTooltip from '@/components/validation-tooltip/ValidationTooltip.vue'
import { computed, watch, type ComputedRef, onMounted } from 'vue';
import type { Validation } from '@/types/Validation'

const inputClass = defineModel('inputClass', {
  required: true,
  type: String
})

const props = defineProps<{
  input: any
  validations?: Validation[]
}>()

const inputClassName: ComputedRef<string> = computed((): string => {
  const className: string = 'input-field'
  if (!isValidationEnabled.value) {
    return className
  }
  return isValid.value ? `${className} valid` : `${className} invalid`
})

const isValidationEnabled: ComputedRef<boolean> = computed((): boolean => {
  return props.validations !== undefined
})

const validations: ComputedRef<Validation[]> = computed((): Validation[] => {
  return props.validations ?? []
})

const isValid: ComputedRef<boolean> = computed((): boolean => {
  for (let i = 0; i < validations.value.length; i++) {
    if (!validations.value[i].validator(props.input)) {
      return false
    }
  }
  return true
})

const setValidationClass = (vClass: string): void => {
  inputClass.value = vClass
}

watch(inputClassName, () => {
  setValidationClass(inputClassName.value)
})

onMounted(() => {
  setValidationClass(inputClassName.value)
})
</script>

<template>
  <div class="field" data-test="field">
    <slot></slot>
    <ValidationTooltip
      :input="props.input"
      :validations="validations"
      data-test="validation-tooltip"
      v-if="isValidationEnabled"
    />
  </div>
</template>

<style scoped>
.field {
  align-items: center;
  display: flex;
  gap: 10px;
}

:deep(.input-field) {
  box-sizing: border-box;
  border: 1px solid var(--c-grey);
  border-radius: 2px;
  font-size: 12px;
  min-height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}

:deep(.input-field):focus {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

:deep(.input-field).invalid {
  outline: none;
  outline: 2px solid var(--c-light-red);
}

:deep(.input-field).valid {
  outline: none;
  outline: 2px solid var(--c-light-green);
}

:deep(.input-field):not(.invalid, .valid):focus {
  outline: 2px solid var(--c-extra-light-blue);
}
</style>
