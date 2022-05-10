<template>
  <template v-if="currentParty">
    <main>
      <div class="inner-hero">
        <div class="inner-tags">
          <span>{{ currentParty.date }}</span>
          <span>{{ currentParty.place }}</span>
        </div>
        <h1 class="h1">
          {{ currentParty.title }}
        </h1>
      </div>
      <div class="inner-img">
        <img :src="currentParty.img" :alt="currentParty.title" />
      </div>
      <div class="inner-subtitle">
        <h2 class="h2">Детальна інформація</h2>
      </div>
      <div class="inner-description">
        <app-button @click="showHideMap" class="map-button">
          Переглянути&nbsp;на&nbsp;мапі
        </app-button>
        <div class="text">
          {{ currentParty.description }}
          Але щоб ви зрозуміли, звідки виникає це хибне уявлення людей, цуратись
          насолоди і вихваляти страждання, я розкрию перед вами всю картину і
          роз’ясню, що саме говорив цей чоловік, який відкрив істину, якого я б
          назвав зодчим щасливого життя. Дійсно, ніхто не відкидає, не зневажає,
          не уникає насолод тільки через те, що це насолоди, але лише через те, що
          тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання.
          Так само як немає нікого, хто полюбивши, вважав за краще і зажадав би
          саме страждання тільки за те, що це страждання, а не тому, що інший раз
          виникають такі обставини, коли страждання і біль приносять якесь і
          чималу насолоду. Якщо скористатися найпростішим прикладом, то хто з нас
          став би займатися якими б то не було тяжкими фізичними вправами, якщо б
          це не приносило з собою якоїсь користі? І хто міг би по справедливості
          дорікнути прагнення до насолоди, яке не несло б з собою ніяких
          неприємностей, або того, хто уникав би такого страждання, яке не
          приносило б з собою ніякої насолоди?
        </div>
      </div>
    </main>
  </template>
  <e404-view v-else />
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { usePartyStore } from '@/stores/party';
import AppButton from '../components/UI/AppButton.vue';
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
  document.body.scrollTo({
    top: 0,
  });
  document.documentElement.scrollTo({
    top: 0,
  });
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
.inner-hero {
  padding: 50px 100px;
  border-bottom: 2px solid $color-white;
}

.inner-tags {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.inner-img {
  height: 0;
  padding-bottom: 470px;
  position: relative;
  border-bottom: 2px solid $color-white;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inner-subtitle {
  padding: 50px 100px;
  border-bottom: 2px solid $color-white;
}
.inner-description {
  padding: 50px 100px;
  display: grid;
  grid-template-columns: min-content 1fr;
}

.map-button {
  margin-right: 100px;
  align-self: start;
}
</style>
