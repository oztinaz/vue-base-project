<script setup lang="ts">
import { ref, type Ref } from 'vue';

const isOpen = defineModel('isOpen', {
  required: true,
  type: Boolean
})

const open = async (): Promise<void> => {
  isOpen.value = true
}
</script>

<template>
  <div class="opener" data-test="opener" @click="open()">
    <slot></slot>
  </div>
</template>

<style scoped></style>