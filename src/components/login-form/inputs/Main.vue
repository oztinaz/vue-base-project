<template>
  <div class="inputs">
    <Username />
    <Password />
  </div>
</template>

<script setup lang="ts">
import Password from '@/components/login-form/inputs/Password.vue';
import Username from '@/components/login-form/inputs/Username.vue';
</script>

<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
