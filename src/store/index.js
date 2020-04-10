import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/User';
import Hero from './modules/Hero';
import Dashboard from './modules/Dashboard';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false,
  },
  modules: {
    User,
    Hero,
    Dashboard,
  },
  getters: {
    checkLogStatus: (state) => state.isLogged,
  },
  mutations: {
    logUser(state) {
      state.isLogged = true;
    },
    logOutUser(state) {
      state.isLogged = false;
    },
  },
});

export default store;
