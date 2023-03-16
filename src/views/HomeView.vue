<template>
  <div id="home">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
// stores
import { useHomeViewStore } from '@/stores/views/home'
import { storeToRefs } from 'pinia'

const homeViewStore = useHomeViewStore()
const { message } = storeToRefs(homeViewStore)
</script>

<style scoped></style>
