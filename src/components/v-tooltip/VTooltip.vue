<script setup lang="ts">
import VTooltipBalloon from './v-tooltip-balloon/VTooltipBalloon.vue'
import VTooltipToggler from './VTooltipToggler.vue'
import { computed, ref, type ComputedRef, type Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    position?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    position: 'left'
  }
)

const isOpen: Ref<boolean> = ref(false)

const togglerSize: Ref<number> = ref(0)

const attribute: ComputedRef<'height' | 'width'> = computed((): 'height' | 'width' => {
  return isVertical.value ? 'height' : 'width'
})

const isPositive: ComputedRef<boolean> = computed((): boolean => {
  return props.position === 'bottom' || props.position === 'right'
})

const isVertical: ComputedRef<boolean> = computed((): boolean => {
  return props.position === 'top' || props.position === 'bottom'
})
</script>

<template>
  <div class="tooltip">
    <VTooltipToggler :attribute="attribute" v-model:size="togglerSize" v-model:is-open="isOpen">
      <slot name="toggler"></slot>
    </VTooltipToggler>
    <VTooltipBalloon
      :attribute="attribute"
      :is-positive="isPositive"
      :is-vertical="isVertical"
      :position="props.position"
      :toggler-size="togglerSize"
      data-test="balloon"
      v-if="isOpen"
    >
      <template #content>
        <slot name="content"></slot>
      </template>
    </VTooltipBalloon>
  </div>
</template>

<style scoped>
.tooltip {
  align-items: center;
  display: flex;
  justify-content: center;
  height: fit-content;
}
</style>
