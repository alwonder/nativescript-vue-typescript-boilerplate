import RootState from '@/types/RootState';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
};

export default new Vuex.Store<RootState>(store);
