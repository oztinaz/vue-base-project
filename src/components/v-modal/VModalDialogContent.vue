<script setup lang="ts">
import VModalDialogContentBody from './VModalDialogContentBody.vue'
import VModalDialogContentBottom from './VModalDialogContentBottom.vue'
import VModalDialogContentTop from './VModalDialogContentTop.vue'

const isOpen = defineModel('isOpen', {
  required: true,
  type: Boolean
})

const close = (): void => {
  isOpen.value = false
}
</script>

<template>
  <div class="content">
    <VModalDialogContentTop :close="close" />
    <VModalDialogContentBody>
      <slot name="body"></slot>
    </VModalDialogContentBody>
    <VModalDialogContentBottom :close="close">
      <template #closer>
        <slot name="closer"></slot>
      </template>
      <template #action-closer>
        <slot name="action-closer"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </VModalDialogContentBottom>
  </div>
</template>

<style scoped>
.content {
  background: white;
  left: 35%;
  position: absolute;
  width: 30%;
  top: 20%;
}
</style>