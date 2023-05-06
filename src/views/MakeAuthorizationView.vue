<template>
  <div id="make-authorization">
    Make Authorization
  </div>
</template>

<script setup lang="ts">
// route
import { useRoute } from 'vue-router';

// stores
import { useLoginFormStore } from '@/stores/components/login-form'
import { onMounted } from 'vue';

const route = useRoute()

const loginFormStore = useLoginFormStore()
const { login } = loginFormStore

onMounted(async () => {
  await login(route.query.code as string)
})
</script>

<style scoped>

</style>
