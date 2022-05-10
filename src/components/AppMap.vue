<template>
  <div
    :class="[
      'map-wrapper',
      {
        hidden: !partyStore.mapVisible,
      },
    ]"
  >
    <div
      @click.stop="partyStore.mapVisible = false"
      class="map-substrate"
    ></div>
    <div ref="appmap" class="map"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from 'vue';
import { usePartyStore } from '@/stores/party';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet/dist/leaflet.js';

const partyStore = usePartyStore();

const coordinates = computed(() => partyStore.currentPartyLocation);

const lat = computed(() => +coordinates.value.lat);
const lon = computed(() => +coordinates.value.lon);

const appmap = ref(null);

// leaflet
let map;
const myIcon = leaflet.divIcon({
  className: 'my-div-icon',
  iconSize: [40, 53],
});
onMounted(() => {
  map = leaflet.map(appmap.value).setView([lat.value, lon.value], 9);

  leaflet
    .tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VyaGlpbCIsImEiOiJjbDJ5bjc4NHUwNHQyM2Rwc2p4ZndnZDlvIn0.e7yCoAdxM9SnbfomElGMTg',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1Ijoic2VyaGlpbCIsImEiOiJjbDJ5bjc4NHUwNHQyM2Rwc2p4ZndnZDlvIn0.e7yCoAdxM9SnbfomElGMTg',
      }
    )
    .addTo(map);
  leaflet.marker([lat.value, lon.value], { icon: myIcon }).addTo(map);
});

onUpdated(() => {
  map.setView([lat.value, lon.value], 9);
  leaflet.marker([lat.value, lon.value], { icon: myIcon }).addTo(map);
});
</script>

<style lang="scss" scoped>
.map {
  // padding: 20px;
  border: 2px solid $color-accent;
  width: 80%;
  height: 80%;
}

.map-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.35s;
}
.map-substrate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hidden {
  left: -100%;
}
</style>
