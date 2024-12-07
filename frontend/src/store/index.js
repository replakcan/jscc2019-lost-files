import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    pets: [],
  },
  getters: {},
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount;
    },
    SET_PETS(state, data) {
      state.pets = data;
    },
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1;
      commit("SET_COUNTER", newCount);
    },
    async fetchPets({ commit }) {
      const result = await axios.get("http://localhost:3000/pet/all/json");
      console.log(result);
      commit("SET_PETS", result.data);
    },
  },
  modules: {},
});
