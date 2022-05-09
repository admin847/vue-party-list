<template>
  <div class="map">
    <div>x = {{ x }} y = {{ y }}</div>
    <iframe
      :src="`https://www.openstreetmap.org/export/embed.html?bbox=${a}%2C${b}%2C${c}%2C${d}&amp;layer=mapnik&amp;marker=${x}%2C${y}`"
      width="425"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      style="border: 1px solid black"
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePartyStore } from '@/stores/party';

const partyStore = usePartyStore();

const coordinates = computed(() => partyStore.currentPartyLocation);

const x = computed(() => +coordinates.value.x);
const y = computed(() => +coordinates.value.y);

const a = computed(() => y.value - 0.018);
const c = computed(() => y.value + 0.018);
const b = computed(() => x.value - 0.007);
const d = computed(() => x.value + 0.007);
</script>

<style lang="scss" scoped>
.map {
  padding: 20px;
  border: 2px solid teal;
}
</style>
