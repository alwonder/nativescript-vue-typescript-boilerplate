import { Module } from 'vuex';
import RootState from '@/types/RootState';

export const INCREMENT_COUNT = 'incrementCount';

interface CounterState {
  count: number;

}

const counter: Module<CounterState, RootState> = {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
  },
  mutations: {
    [INCREMENT_COUNT](state) {
      state.count += 1;
    },
  },
  actions: {
  },
  modules: {},
};

export default counter;
