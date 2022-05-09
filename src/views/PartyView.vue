<template>
  <h1 class="h1">
    {{ currentParty.title }}
  </h1>
  <div>
    {{ currentParty.date }}
  </div>
  <img :src="currentParty.img" :alt="currentParty.title" />
  <div>
    {{ currentParty.description }}
  </div>
  <button @click="showMap">Посмотреть на карте</button>
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { usePartyStore } from '@/stores/party';

const router = useRoute();
const partyStore = usePartyStore();

const currentParty = computed(() =>
  partyStore.currentParty(partyStore.partiesMap[router.params.id])
);

onBeforeMount(() => {
  partyStore.setCurrentPartyLocation(currentParty.value.coordinates);
});

const showMap = () => {
  if (!partyStore.mapVisible) {
    partyStore.showMap();
  } else {
    partyStore.hideMap();
  }
};

onBeforeUnmount(() => {
  partyStore.hideMap();
});
</script>

<style lang="scss" scoped>
img {
  max-width: 500px;
}
</style>
