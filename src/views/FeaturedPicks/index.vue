<script setup>
import { onMounted } from 'vue'
import useFeaturedPicksStore from '@/stores/modules/FeaturedPicks'

const FeaturedPicksStore = useFeaturedPicksStore()

onMounted(() => {
  FeaturedPicksStore.FetchFeaturedPicksBanners()
})
</script>

<template>
  <div class="featured-picks">云音乐推荐</div>
</template>

<style scoped lang="scss"></style>
