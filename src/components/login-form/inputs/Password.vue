<template>
  <div class="password">
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      v-model="password"
    />
  </div>
</template>

<script setup lang="ts">
// stores
import { useLoginFormStore } from '@/stores/components/login-form';
import { storeToRefs } from 'pinia';

const loginFormStore = useLoginFormStore()
const { password } = storeToRefs(loginFormStore)
</script>

<style scoped></style>
