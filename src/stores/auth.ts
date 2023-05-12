import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type ApiAccessToken from '@/types/api/access-token'
import type AccessToken from '@/models/access-token'

export const useAuthStore = defineStore('auth', () => {
  const accessToken: Ref<AccessToken | null> = ref(null)

  const setAccessToken = (at: AccessToken | null): void => {
    accessToken.value = at
  }

  const fetchAccessToken = async (authorizationCode: string, username: string): Promise<ApiAccessToken> => {
    return new Promise(async (resolve, reject) => {
      await axios.post(
        'http://localhost:3000/token',
        {
          username: username,
          clientId: 'clientid',
          clientSecret: 'clientsecret',
          redirectUrl: 'http://localhost:5173/make-authorization',
          authorizationCode: authorizationCode
        }
      ).then((resp: { data: ApiAccessToken }) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  const refreshToken = async (refresh: string): Promise<ApiAccessToken> => {
    return new Promise(async (resolve, reject) => {
      await axios.post(
        'http://localhost:3000/refresh',
        {
          token: refresh
        }
      ).then((resp: { data: ApiAccessToken }) => {
        resolve(resp.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  return {
    accessToken,
    fetchAccessToken,
    refreshToken,
    setAccessToken
  }
})
