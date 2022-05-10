<template>
  <template v-if="currentParty">
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
  <e404-view v-else />
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { usePartyStore } from '@/stores/party';
import E404View from './E404View.vue';

const route = useRoute();
const partyStore = usePartyStore();

const currentParty = computed(() =>
  partyStore.currentParty(partyStore.partiesMap[route.params.id])
);

onBeforeMount(() => {
  if (currentParty.value) {
    partyStore.setCurrentPartyLocation(currentParty.value.coordinates);
  }
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
  width: 100%;
  height: auto;
}
</style>
