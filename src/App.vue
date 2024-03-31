<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(import.meta.env.BASE_URL)
})
</script>

<template>
  <el-button type="primary">i am button</el-button>
</template>

<style scoped></style>
