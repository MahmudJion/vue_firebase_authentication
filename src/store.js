import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userModule = {
  state: {
    loggedIn: false,
    data: null
  },
  getters: {
    user(state) {
      return state;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.loggedIn = value;
    },
    SET_USER(state, data) {
      state.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
};

export default new Vuex.Store({
  modules: {
    user: userModule
  }
});
