import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
