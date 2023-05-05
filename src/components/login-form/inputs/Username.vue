<template>
  <div class="username">
    <input
      type="text"
      class="form-control"
      placeholder="Username"
      v-model="username"
    />
  </div>
</template>

<script setup lang="ts">
// stores
import { useLoginFormStore } from '@/stores/components/login-form';
import { storeToRefs } from 'pinia';

const loginFormStore = useLoginFormStore()
const { username } = storeToRefs(loginFormStore)
</script>

<style scoped></style>
