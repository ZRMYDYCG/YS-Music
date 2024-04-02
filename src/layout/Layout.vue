<template>
  <div class="Layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LayoutHeader from '@/layout/components/LayoutHeader/src/LayoutHeader.vue'
</script>

<style lang="scss"></style>
