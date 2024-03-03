<script setup lang="ts">
import VModalDialogContent from './VModalDialogContent.vue'

const isOpen = defineModel('isOpen', {
  required: true,
  type: Boolean
})
</script>

<template>
  <div class="dialog">
    <VModalDialogContent v-model:is-open="isOpen">
      <template #body>
        <slot name="body"></slot>
      </template>
      <template #closer>
        <slot name="closer"></slot>
      </template>
      <template #action-closer>
        <slot name="action-closer"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </VModalDialogContent>
  </div>
</template>

<style scoped>
.dialog {
  background: rgba(110, 110, 110, 0.801);
  height: 100vh;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
}
</style>