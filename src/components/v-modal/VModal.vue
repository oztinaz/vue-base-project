<script setup lang="ts">
import VModalDialog from './VModalDialog.vue'
import VModalOpener from './VModalOpener.vue'
import { ref, type Ref } from 'vue';

const isOpen: Ref<boolean> = ref(false)
</script>

<template>
  <VModalOpener v-model:is-open="isOpen">
    <slot name="opener"></slot>
  </VModalOpener>
  <VModalDialog v-model:is-open="isOpen" v-if="isOpen">
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
  </VModalDialog>
</template>

<style scoped></style>