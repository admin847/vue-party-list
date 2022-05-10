<template>
  <input
    @input="emits('update:modelValue', $event.target.value)"
    @keydown.esc="$event.target.value = '', emits('update:modelValue', $event.target.value)"
    type="text"
    placeholder="Пошук..."
  />
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);

const clearInput = () => {
  emits('update:modelValue', '');
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  background-color: transparent;
  padding: 30px 100px;
  border: none;
  border-bottom: 2px solid $color-white;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: $color-white;
  outline: none;
  &::placeholder {
    font-family: 'Open Sans', sans-serif;
    color: $color-white-50;
  }
  &:focus {
    border-bottom: 2px solid $color-accent;
  }
}
</style>
