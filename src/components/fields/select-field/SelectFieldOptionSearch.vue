<script setup lang="ts">
import StringField from '@/components/fields/input-fields/StringField.vue'
import { ref, type Ref } from 'vue';

const searchQuery = defineModel('searchQuery', {
  required: true,
  type: String
})

const placeholder: Ref<string> = ref('Filter options')
</script>

<template>
  <div class="search">
    <StringField :placeholder="placeholder" v-model:string="searchQuery" />
  </div>
</template>

<style scoped>
.search {
  border-bottom: 1px solid var(--c-grey);
  padding: 12px;
}
</style>