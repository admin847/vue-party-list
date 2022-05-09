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
  <button @click="showHideMap">Посмотреть на карте</button>
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { usePartyStore } from '@/stores/party';

const route = useRoute();
const partyStore = usePartyStore();

const currentParty = computed(() =>
  partyStore.currentParty(partyStore.partiesMap[route.params.id])
);

onBeforeMount(() => {
  // console.log();
  // if (!partyStore.partiesMap.hasOwnProperty(route.params.id)) {
  //   router.push({ path: '/E404' });
  // } else {
  //   }
    partyStore.setCurrentPartyLocation(currentParty.value.coordinates);
});

const showHideMap = () => {
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
