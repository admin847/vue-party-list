<template>
  <footer class="footer">
    <div class="h2 footer__title">Контакти</div>
    <div class="footer__contacts">
      <a href="#!" class="footer__link">+380 (67) 555-10-15</a>
      <a href="#!" class="footer__link">+380 (99) 555-10-15</a>
      <a href="#!" class="footer__link">Instagram</a>
      <a href="#!" class="footer__link">Facebook</a>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 50px 100px;
  border-top: 2px solid $color-white;
  &__title {
    margin-bottom: 30px;
  }
  &__contacts {
    display: flex;
    justify-content: space-between;
  }
  &__link {
    color: $color-white-50;
    font-size: 16px;
    transition: color .35s;
    &:hover {
      color: $color-white;
    }
  }
}
</style>
