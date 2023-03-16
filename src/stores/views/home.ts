import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeViewStore = defineStore('home-view', () => {
  const message: Ref<string> = ref('Hello, World!')

  return { message }
})
