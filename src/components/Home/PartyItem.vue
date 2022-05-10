<template>
  <li class="party-item">
    <router-link :to="'/party/' + id">
      <img :src="img" :alt="title" class="party-item__img" />
      <div class="party-item__content">
        <div class="party-item__date">{{ date }}</div>
        <h3 class="h3 party-item__title">{{ title }}</h3>
        <div class="party-item__place">{{ place }}</div>
      </div>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  date: {
    type: [String, Number],
  },
  img: {
    type: String,
  },
  place: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.party-item {
  border-bottom: 2px solid $color-white;
  transition: all 0.35s;
  &:hover {
    background-color: $color-accent;
    a {
      color: $color-black;
    }
  }
  a {
    display: flex;
    text-decoration: none;
    color: $color-white;
  }
  &__img {
    max-width: 540px;
    border-right: 2px solid $color-white;
    padding: 20px;
  }
  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  &__date {
    margin-bottom: 50px;
  }
  &__title {
    margin-bottom: auto;
  }
  &__place {
    font-size: 16px;
  }
}
</style>
