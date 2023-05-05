<template>
  <div class="login-form">
    <Title />
    <Inputs />
    <Button />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/login-form/Button.vue'
import Inputs from '@/components/login-form/inputs/Main.vue'
import Title from '@/components/login-form/Title.vue'
</script>

<style scoped>
.login-form {
  border: 1px solid rgb(239, 241, 242);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  width: 450px;
}
</style>
