import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginFormStore = defineStore('login-form', () => {
  const password: Ref<string> = ref('')
  const username: Ref<string> = ref('')
  const user: Ref<any> = ref(null)

  const authorizationLink = computed((): string => {
    return `http://localhost:3000/authorize?clientId=clientid&redirectUrl=http://localhost:5173/make-authorization`
  })

  const login = async (): Promise<void> => {
    await axios.post(
      'http://localhost:3000/login',
      {
        username: username.value,
        password: password.value
      }
    ).then((resp: { data: any }) => {
      localStorage.setItem('user', JSON.stringify(resp.data))
      setUser(resp.data)

      window.location.href = authorizationLink.value
    })
  }

  const setUser = (u: any) => {
    user.value = u
  }

  return {
    authorizationLink,
    password,
    username,
    login
  }
})
