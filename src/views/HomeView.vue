<template>
  <h1 class="h1">Party list</h1>
  <ul class="parties-list">
    <li v-for="party in partyStore.parties" :key="party.id" class="party-item">
      <router-link :to="'/party/' + party.id">
        <img :src="party.img" alt="party-item-img" />
        <div class="party-item__title">{{ party.title }}</div>
        <div class="party-item__date">{{ party.date }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { usePartyStore } from '@/stores/party';

const partyStore = usePartyStore();
</script>

<style lang="scss" scoped>
.party-item {
  border: 2px solid teal;
  margin-bottom: 20px;
  padding: 20px;
  a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #313131;
  }
}
img {
  max-width: 150px;
}
</style>
