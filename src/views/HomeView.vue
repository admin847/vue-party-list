<template>
  <h1 class="h1">Party list</h1>
  <input @keydown.esc="searchQuery = ''" v-model="searchQuery" type="text" placeholder="Пошук..." />
  <ul class="parties-list">
    <li v-for="party in filteredParties" :key="party.id" class="party-item">
      <router-link :to="'/party/' + party.id">
        <img :src="party.img" alt="party-item-img" />
        <div class="party-item__title">{{ party.title }}</div>
        <div class="party-item__date">{{ party.date }}</div>
      </router-link>
    </li>
  </ul>
  <div ref="obs" class="observer"></div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { usePartyStore } from '@/stores/party';

const partyStore = usePartyStore();

const parties = computed(() => {
  return partyStore.parties;
});

const searchQuery = ref('');

const page = ref(1);
const itemsPerPage = 10;

const filteredParties = computed(() => {
  let start = 0;
  let end = itemsPerPage * page.value;
  if (searchQuery.value === '') {
    return parties.value.slice(start, end);
  } else {
    return parties.value.filter((item) => {
      return item['title']
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    });
  }
});

// ===== OBSERVER =====
const obs = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (
      entries[0].isIntersecting &&
      page.value < parties.value.length / itemsPerPage
    ) {
      page.value++;
    }
  });
  observer.observe(obs.value);
});
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
.observer {
  height: 20px;
}
</style>
