<template>
  <button v-if="buttonVisible" @click="goTop" class="go-top-btn"></button>
</template>

<script>
import useThrottle from '@/use/useThrottle';
export default {
  data() {
    return {
      buttonVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', useThrottle(this.handleScroll, 300));
  },
  beforeUnmount() {
    window.removeEventListener('scroll', useThrottle(this.handleScroll, 300));
  },
  methods: {
    goTop() {
      document.body.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      if (window.scrollY > 500) {
        this.buttonVisible = true;
      } else {
        this.buttonVisible = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.go-top-btn {
  position: fixed;
  opacity: 0.25;
  bottom: 50px;
  right: 50px;
  background: transparent;
  border: none;
  background-color: $color-accent;
  padding: 10px 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.35s;
  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 16px;
    background-color: $color-black;
    position: absolute;
    top: 11px;
  }
  &::before {
    left: 14px;
    transform: rotate(45deg);
  }
  &::after {
    right: 14px;
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
}
</style>
