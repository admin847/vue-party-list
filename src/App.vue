<template>
  <div class="container">
    <the-header />
    <router-view></router-view>
      <app-map />
    <!-- <teleport to="body">
    </teleport> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePartyStore } from '@/stores/party';
import TheHeader from './components/TheHeader.vue';
import AppMap from '@/components/AppMap.vue';

const partyStore = usePartyStore();

onMounted(() => {
  partyStore.getPartyList();
});
</script>

<style lang="scss" scoped></style>
