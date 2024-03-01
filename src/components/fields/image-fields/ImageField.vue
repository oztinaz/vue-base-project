<script setup lang="ts">
const props = defineProps<{
  height: number
  src: string
  width: number
}>()
</script>

<template>
  <img :src="props.src" alt="Image" :height="props.height" :width="props.width" />
</template>

<style scoped></style>