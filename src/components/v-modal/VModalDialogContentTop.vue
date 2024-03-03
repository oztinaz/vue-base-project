<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import FaTimesIcon from '@/components/icons/fa/FaTimesIcon.vue'

const props = defineProps<{
  close: Function
}>()
</script>

<template>
  <div class="top">
    <div class="title">
      Example Title
    </div>
    <div class="close">
      <VButton color="grey" size="small" @click="props.close()">
        <FaTimesIcon />
      </VButton>
    </div>
  </div>
</template>

<style scoped>
.top {
  align-items: center;
  border-bottom: 1px solid var(--c-grey);
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.title {
  font-size: 18px;
}
</style>