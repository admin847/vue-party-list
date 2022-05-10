<template>
  <div class="container">
    <the-header />
    <router-view></router-view>
    <go-top-btn />
    <the-footer />
    <app-map />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePartyStore } from '@/stores/party';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import AppMap from '@/components/AppMap.vue';
import GoTopBtn from './components/UI/GoTopBtn.vue';

const partyStore = usePartyStore();

onMounted(() => {
  partyStore.getPartyList();
});
</script>

<style lang="scss" scoped></style>
