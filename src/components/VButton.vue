<script setup lang="ts">
import VLoading from '@/components/VLoading.vue';
import { computed, ref, type ComputedRef, type StyleValue, type Ref } from 'vue';

const props = withDefaults(defineProps<{
  color?: string
  disabled?: boolean
  loading?: boolean
  size?: 'normal' | 'small'
}>(), {
  color: 'grey',
  disabled: false,
  loading: false,
  size: 'normal'
})

const normalButtonPadding: Ref<string> = ref('10px 15px')
const smallButtonPadding: Ref<string> = ref('5px 7px')
const loadingSize: Ref<number> = ref(16)

const buttonStyle: ComputedRef<StyleValue> = computed((): StyleValue => {
  return {
    ...buttonColorStyle.value as object,
    ...buttonPaddingStyle.value as object
  }
})

const buttonColorStyle: ComputedRef<StyleValue> = computed((): StyleValue => {
  return {
    '--c-main': `var(--c-${props.color})`,
    '--c-hover': `var(--c-light-${props.color})`,
    '--c-active': `var(--c-dark-${props.color})`
  }
})

const buttonPaddingStyle: ComputedRef<StyleValue> = computed((): StyleValue => {
  if (props.size === 'normal') {
    return {
      padding: normalButtonPadding.value
    }
  }

  return {
    padding: smallButtonPadding.value
  }
})

const isDisabled: ComputedRef<boolean> = computed((): boolean => {
  return props.disabled || props.loading
})
</script>

<template>
  <button :style="buttonStyle" :disabled="isDisabled">
    <VLoading :height="loadingSize" :width="loadingSize" data-test="loading" v-if="loading" />
    <span data-test="span" v-else>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
button {
  --c-main: '';
  --c-hover: '';
  --c-active: '';
}

button {
  align-items: center;
  background: var(--c-main);
  border: none;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  min-width: max-content;
  outline: none;
}

button[disabled] {
  opacity: 60%;
  cursor: not-allowed;
}

button:not([disabled]):hover {
  background: var(--c-hover);
  cursor: pointer;
}

button:not([disabled]):active {
  background: var(--c-active);
}
</style>