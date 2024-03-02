<script setup lang="ts">
import ImageField from '@/components/fields/image-fields/ImageField.vue'
import { ref, type Ref } from 'vue'

const props = defineProps<{
  height: number
  width: number
}>()

const loadingGifPath: Ref<string> = ref('/src/assets/loading.gif')
</script>

<template>
  <ImageField :src="loadingGifPath" :height="props.height" :width="props.width" />
</template>
