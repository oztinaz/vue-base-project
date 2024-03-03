<script setup lang="ts">
const props = defineProps<{
  close: Function
}>()
</script>

<template>
  <div class="bottom">
    <div class="closer" @click="props.close()">
      <slot name="closer"></slot>
    </div>
    <div class="action" @click="props.close()">
      <slot name="action-closer"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped>
.bottom {
  border-top: 1px solid var(--c-grey);
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 15px;
}
</style>