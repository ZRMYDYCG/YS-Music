<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(import.meta.env.BASE_URL)
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
