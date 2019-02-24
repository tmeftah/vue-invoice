import Vue from "vue";
import Vuex from "vuex";
import invoices from "./invoices/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    invoices: invoices
    // add additional module
  }
});
