<template>
  <div id="make-authorization">
    Making Authorization
  </div>
</template>

<script setup lang="ts">
// route
import { useRoute } from 'vue-router';

// stores
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue';
import AccessTokenFactory from '@/factories/access-token';
import type ApiAccessToken from '@/types/api/access-token';
import type AccessToken from '@/models/access-token';
import router from '@/router';

const route = useRoute()

const authStore = useAuthStore()
const { fetchAccessToken, setAccessToken } = authStore

onMounted(async () => {
  const userString: string | null = localStorage.getItem('user')
  
  if (userString !== null) {
    const user = JSON.parse(userString)
    const apiAccessToken: ApiAccessToken = await fetchAccessToken(route.query.code as string, user.Username)
    const accessToken: AccessToken = AccessTokenFactory.createFromApiAccessToken(apiAccessToken)
    setAccessToken(accessToken)
    localStorage.setItem('access_token', accessToken.toString())

    router.push({
      name: 'home'
    })
  }
})
</script>

<style scoped>

</style>
