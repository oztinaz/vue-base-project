import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MakeAuthorizationView from '@/views/MakeAuthorizationView.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import type AccessToken from '@/models/access-token'
import AccessTokenFactory from '@/factories/access-token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/make-authorization',
      name: 'make-authorization',
      component: MakeAuthorizationView
    },
  ],
})

router.beforeEach(async (to, from) => {
  if (to.name === 'make-authorization') {
    return 
  }

  const localStorageAccessTokenString: string | null = localStorage.getItem('access_token')
  if (localStorageAccessTokenString === null && to.name !== 'login' && to.name !== 'make-authorization') {
    return {
      name: 'login'
    }
  }

  if (to.name === 'login' && localStorageAccessTokenString === null) {
    return
  }

  const authStore = useAuthStore()
  const { refreshToken, setAccessToken } = authStore

  let at: AccessToken = AccessTokenFactory
                            .createFromLocalStorageAccessTokenString(localStorageAccessTokenString as string)
  if (at.tokenExpired() && at.refreshable()) {
    at = AccessTokenFactory.createFromApiAccessToken(await refreshToken(at.getRefresh() as string))
  }
  
  if (at.tokenExpired() && to.name !== 'login' && to.name !== 'make-authorization') {
    localStorage.removeItem('access_token')
    return {
      name: 'login'
    }
  }

  localStorage.setItem('access_token', at.toString())
  setAccessToken(at)
})

export default router
