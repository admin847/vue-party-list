import { defineStore } from 'pinia';
import partyListJSON from '@/seeders/party-list.json';

export const usePartyStore = defineStore({
  id: 'party',
  state: () => ({
    partyList: [],
    page: 1,
    itemsPerPage: 5,
    currentPartyLocation: {
      lat: 0,
      lon: 0,
    },
    mapVisible: false,
  }),
  getters: {
    parties: (state) => (searchQuery) => {
      let start = 0;
      let end = state.itemsPerPage * state.page;
      if (searchQuery === '') {
        return state.partyList.slice(start, end);
      } else {
        return state.partyList.filter((item) => {
          return item['title']
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });
      }
    },

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
      this.currentPartyLocation.lat = coordinates.lat;
      this.currentPartyLocation.lon = coordinates.lon;
    },

    showMap() {
      this.mapVisible = true;
    },

    hideMap() {
      this.mapVisible = false;
    },

    increasePage() {
      this.page++;
    },
  },
});
