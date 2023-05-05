import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginFormStore = defineStore('login-form', () => {
  const password: Ref<string> = ref('')
  const username: Ref<string> = ref('')

  return {
    password,
    username
  }
})
