<template>
  <div class="container">
    <router-view></router-view>
    <teleport to="body">
      <app-map v-show="partyStore.mapVisible" />
    </teleport>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePartyStore } from '@/stores/party';
import AppMap from '@/components/AppMap.vue';

const partyStore = usePartyStore();

onMounted(() => {
  partyStore.getPartyList();
});
</script>

<style lang="scss" scoped></style>
