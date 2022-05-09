import { defineStore } from 'pinia';
import partyListJSON from '@/seeders/party-list.json';

export const usePartyStore = defineStore({
  id: 'party',
  state: () => ({
    partyList: [],
    currentPartyLocation: {
      x: 0,
      y: 0,
    },
    mapVisible: false,
  }),
  getters: {
    parties: (state) => state.partyList,
    // следующим шагом сделал мапу, чтобы при большом количестве пати
    //  в списке каждый раз не бегать по нему файндом,
    // а сразу отдавать нужное значение
    partiesMap: (state) => {
      const map = {};
      state.partyList.forEach((item, i) => (map[item.id.toString()] = i));
      return map;
    },
    currentParty: (state) => (id) => state.partyList[id],
  },
  actions: {
    getPartyList() {
      this.partyList = partyListJSON;
    },
    setCurrentPartyLocation(coordinates) {
      this.currentPartyLocation.x = coordinates.x;
      this.currentPartyLocation.y = coordinates.y;
    },
    showMap() {
      this.mapVisible = true;
    },
    hideMap() {
      this.mapVisible = false;
    },
  },
});
