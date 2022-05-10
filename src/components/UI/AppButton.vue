<template>
  <button @click="emit('click')" class="btn">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 20px; 
  color: $color-accent;
  background-color: transparent;
  border: 2px solid $color-accent;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  transition: all .35s;
  cursor: pointer;
  &:hover {
    background-color: $color-accent;
    color: $color-black;
  }
}
</style>
