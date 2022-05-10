<template>
  <home-hero />
  <app-search v-model="searchQuery" />
  <!-- <ul class="parties-list"> -->
    <transition-group name="list" tag="ul" class="parties-list">
      <li v-for="party in parties" :key="party.id" class="party-item">
        <router-link :to="'/party/' + party.id">
          <img :src="party.img" :alt="party.title" class="party-item__img" />
          <div class="party-item__content">
            <div class="party-item__date">{{ party.date }}</div>
            <h3 class="h3 party-item__title">{{ party.title }}</h3>
            <div class="party-item__place">{{ party.place }}</div>
          </div>
        </router-link>
      </li>
    </transition-group>
  <!-- </ul> -->
  <div ref="obs" class="observer"></div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { usePartyStore } from '@/stores/party';
import HomeHero from '@/components/Home/HomeHero.vue';
import AppSearch from '@/components/UI/AppSearch.vue';

const partyStore = usePartyStore();

const searchQuery = ref('');

const parties = computed(() => {
  return partyStore.parties(searchQuery.value);
});

// ===== OBSERVER =====
const obs = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (
      entries[0].isIntersecting &&
      partyStore.page < partyStore.partyList.length / partyStore.itemsPerPage
    ) {
      partyStore.increasePage();
    }
  });
  observer.observe(obs.value);
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
// ===== анимашки ======
.list-enter-active,
.list-leave-active {
  transition: all .35s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.observer {
  height: 50px;
}
</style>
