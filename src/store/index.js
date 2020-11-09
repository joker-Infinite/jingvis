import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refresh: 1,
    resizeData: []
  },
  mutations: {
    isLoadUpdata(state, is) {
      this.state.refresh = is;
    },
    isresizeData(state, is) {
      this.state.resizeData.push(is);
    }
  },
  actions: {},
  modules: {}
});
