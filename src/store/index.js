import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  token: '',
};
const mutations = {
  setToken(state, n) {
    state.token = n
    localStorage.token = n
  }
}
export default new Vuex.Store({
  state,
  mutations
});