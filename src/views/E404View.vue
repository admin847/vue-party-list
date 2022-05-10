<template>
  <main class="error-page__main">
    <div class="error-page__hero">
      <h1 class="h1">404 Сторінку не знайдено</h1>
    </div>
    <div class="error-page__img"></div>
    <div class="error-page__content">
      <app-button @click="router.push('/')" class="error-page__btn">
        Перейти&nbsp;на&nbsp;головну
      </app-button>
      <div class="text">
        Сторінку було переміщено, або вона ніколи не існувала перевітре
        правильність посилання, або перейдіть на головну.
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppButton from '../components/UI/AppButton.vue';

const router = useRouter();
</script>

<style lang="scss" scoped>
.error-page {
  &__main {
    display: flex;
    flex-direction: column;
  }
  &__hero {
    padding: 50px 100px;
    border-bottom: 2px solid $color-white;
  }
  &__img {
    flex-grow: 1;
    position: relative;
    background: url('@/assets/img/404.jpg') no-repeat center center / cover;
    border-bottom: 2px solid $color-white;
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      z-index: -1;
    }
  }
  &__content {
    padding: 50px 100px;
    display: flex;
  }
  &__btn {
    margin-right: 100px;
  }
}
</style>
