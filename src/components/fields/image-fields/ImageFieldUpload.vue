<script setup lang="ts">
import ImageField from './ImageField.vue'
import FaCameraIcon from '@/components/icons/fa/FaCameraIcon.vue';
import { computed, type ComputedRef, type StyleValue, type WritableComputedRef } from 'vue'

const src = defineModel('src', {
  required: true,
  type: String
})

const props = defineProps<{
  height: number
  width: number
}>()

const style: ComputedRef<StyleValue> = computed((): StyleValue => {
  return {
    height: `${props.height}px`,
    width: `${props.width}px`
  }
})

const displaySrc: WritableComputedRef<string> = computed({
  get: (): string => {
    return src.value === '' ? '/src/assets/default-image.png' : src.value
  },
  set: (value: string): void => {
    src.value = value
  }
})

const upload = (e) => {
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    src.value = fileReader.result?.toString() as string
  })
  fileReader.readAsDataURL(e.target.files[0])
}
</script>

<template>
  <div class="image-container" :style="style" @change="upload">
    <ImageField :src="displaySrc" :height="props.height" :width="props.width" />
    <div class="upload-container">
      <label for="image-upload">
        <FaCameraIcon :font-size="15" />
      </label>
      <input id="image-upload" type="file" />
    </div>
  </div>
</template>

<style scoped>
img {
  display: block;
}

.image-container {
  display: inline-block;
  position: relative;
}

.upload-container {
  background: var(--c-extra-light-blue);
  bottom: 0;
  font-size: 18px;
  height: 20%;
  opacity: 85%;
  position: absolute;
  width: 100%;
  z-index: 1;
}

label {
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  width: 100%;
}

input {
  display: none;
}
</style>
