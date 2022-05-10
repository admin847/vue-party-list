<template>
  <section class="hero">
    <h1 class="h1">Знайди<br />свою ідеальну вечірку</h1>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: 175px 100px;
  border-bottom: 2px solid $color-white;
  background: url('@/assets/img/hero.jpg') no-repeat center center / cover;
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}
</style>
