<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: () => false
  },
  reserveDom: {
    type: Array,
    default: () => []
  }
})
const slots = useSlots()

const clickEvent = (e) => {
  const triggerElement = e.target
  const firstChildElm = slots.default[0]
  console.log(triggerElement, firstChildElm)
}
</script>

<style scoped></style>
