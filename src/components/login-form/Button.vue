<template>
  <div class="button-container">
    <button  class="btn btn-success" @click="login()">
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
// stores
import { useLoginFormStore } from '@/stores/components/login-form';

const loginFormStore = useLoginFormStore()
const { login } = loginFormStore
</script>

<style scoped>
.button-container {
  width: 100%;
}

a {
  float: right;
}
</style>
