import Vue from "vue";
import Router from "vue-router";
import store from "../store/store.js";
import Home from "../views/Home.vue";
import InvoiceList from "../views/invoice/InvoiceList";
import ShowInvoice from "../views/invoice/ShowInvoice";
import Create from "../views/invoice/Create";
import Profile from "../views/user/Profile";
import Login from "../views/user/Login";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/list",
      name: "list",
      component: InvoiceList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/invoice/:id",
      name: "invoice",
      component: ShowInvoice,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create",
      name: "create",
      component: Create,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.commit("checktoken");
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
