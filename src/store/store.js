import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import invoices from "./invoices/index";

Vue.use(Vuex);

// localStorage Stuff

export default new Vuex.Store({
  modules: {
    invoices: invoices
    // add additional module
  },

  state: {
    status: "",
    access_token: localStorage.getItem("access_token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.access_token = payload.access_token;
      state.user = payload.user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.access_token = "";
    },
    checktoken(state) {
      state.access_token = localStorage.getItem("access_token") || "";
      if (!state.access_token) {
        state.status = "error";
      }
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:5000/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const access_token = resp.data.access_token;
            const user = resp.data.user;
            localStorage.setItem("access_token", access_token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = access_token;
            commit("auth_success", { access_token: access_token, user: user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("access_token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:5000/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const access_token = resp.data.access_token;
            const user = resp.data.user;
            localStorage.setItem("access_token", access_token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = access_token;
            commit("auth_success", { access_token: access_token, user: user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("access_token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("access_token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    checktoken({ commit }) {
      commit("checktoken");
    }
  },
  getters: {
    isLoggedIn: state => !!state.access_token,
    authStatus: state => state.status
  }
});
