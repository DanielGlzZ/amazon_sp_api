import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      user: null,
      token: null
   },
   mutations: {
      setUser(state, user) {
         state.user = user;
      },
      setToken(state, token) {
         state.token = token;
      }
   },
   actions: {
      login({ commit }, userData) {
         // Lógica para autenticar al usuario
         commit('setUser', userData.user);
         commit('setToken', userData.token);
      },
      logout({ commit }) {
         commit('setUser', null);
         commit('setToken', null);
      }
   }
});
