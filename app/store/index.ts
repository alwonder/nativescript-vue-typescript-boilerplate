import RootState from '@/types/RootState';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    counter,
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
