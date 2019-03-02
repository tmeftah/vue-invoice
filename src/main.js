import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Axios from "axios";

Vue.prototype.$http = Axios;
const access_token = localStorage.getItem("access_token");
if (access_token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = access_token;
}
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
