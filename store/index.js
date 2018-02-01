import Vue from "vue";
import Vuex from "vuex";

//Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      message: ""
    },
    mutations: {
      setMessage(state, payload) {
        state.message = payload;
      }
    }
  });
};

export default createStore;
