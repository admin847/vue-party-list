<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">Parteez</div>
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border-bottom: 2px solid $color-white;
}

.logo {
  font-size: 25px;
  transition: color 0.35s;
  line-height: 120%;
  font-family: 'ST-SimpleSquare', sans-serif;
  color: $color-white;
  letter-spacing: 4%;
  &:hover {
    color: $color-accent;
  }
}
</style>
