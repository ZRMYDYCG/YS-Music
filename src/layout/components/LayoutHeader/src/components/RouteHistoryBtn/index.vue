<template>
  <button
    :style="buttonStyle"
    :disabled="!canGoBack"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    @click="handleBack"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
  >
    <slot name="icon"></slot>
  </button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { defineEmits } from 'vue'

const props = defineProps({
  withBorder: Boolean,
  width: String,
  height: String,
  borderRadius: String
})

const emit = defineEmits(['back'])

const defaultWidth = '40px'
const defaultHeight = '40px'
const defaultBorderRadius = '4px'

const router = useRouter()
const route = useRoute()

const canGoBack = computed(() => {
  return router.currentRoute.value.matched.length > 1
})

const isHover = ref(false)
const isMouseDown = ref(false)

const buttonStyle = computed(() => {
  const baseStyle = {
    width: props.width || defaultWidth,
    height: props.height || defaultHeight,
    borderRadius: props.borderRadius || defaultBorderRadius,
    borderColor: props.withBorder
      ? isMouseDown.value
        ? '#333'
        : isHover.value
          ? '#333'
          : '#ccc'
      : 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid'
  }
  if (canGoBack.value) {
    baseStyle.backgroundColor = isHover.value || isMouseDown.value ? '#f5f5f5' : '#fff'
  } else {
    baseStyle.borderColor = '#eaeaea' // 浅色边框
  }
  return baseStyle
})

const handleBack = () => {
  if (canGoBack.value) {
    router.back()
    emit('back', route)
  }
}
</script>

<style scoped>
button {
  transition:
    background-color 0.3s,
    border-color 0.3s,
    box-shadow 0.3s;
}

button:hover:not([disabled]) {
  background-color: #ddd; /* 鼠标悬停时背景色变深 */
  border-color: #333; /* 鼠标悬停时边框颜色变深 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

button:active {
  background-color: #ccc; /* 按钮被按下时背景色更深 */
}

button[disabled] {
  border-color: #eaeaea; /* 禁用时边框颜色变浅 */
  cursor: not-allowed; /* 禁用时鼠标样式变为不可用 */
  background-color: #fff; /* 禁用时背景色为白色 */
}

button[disabled]:hover {
  background-color: #fff; /* 禁用时移除悬停效果 */
}
</style>
