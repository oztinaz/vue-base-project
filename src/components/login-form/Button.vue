<template>
  <div class="button-container">
    <a type="button" class="btn btn-success" :href="authorizationLink">
      Login
    </a>
  </div>
</template>

<script setup lang="ts">
// stores
import { useLoginFormStore } from '@/stores/components/login-form';
import { storeToRefs } from 'pinia';

const loginFormStore = useLoginFormStore()
const { authorizationLink } = storeToRefs(loginFormStore)
</script>

<style scoped>
.button-container {
  width: 100%;
}

a {
  float: right;
}
</style>
