import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginFormStore = defineStore('login-form', () => {
  const password: Ref<string> = ref('')
  const username: Ref<string> = ref('')

  const authorizationLink = computed((): string => {
    return `http://localhost:3000/authorize?clientId=clientId&redirectUrl=http://localhost:5173/make-authorization`
  })

  const login = async (authorizationCode: string): Promise<void> => {
    await axios.post(
      'http://localhost:3000/login',
      {
        username: username.value,
        password: password.value,
        clientId: 'clientid',
        clientSecret: 'clientsecret',
        redirectUrl: 'http://localhost:5173/make-authorization',
        authorizationCode: authorizationCode
      }
    ).then((resp) => {
      console.log(resp.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return {
    authorizationLink,
    password,
    username,
    login
  }
})
