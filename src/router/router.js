import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import InvoiceList from "../views/invoice/InvoiceList";
import ShowInvoice from "../views/invoice/ShowInvoice";
import Create from "../views/invoice/Create";
import Profile from "../views/user/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      component: InvoiceList
    },
    {
      path: "/invoice/:id",
      name: "invoice",
      component: ShowInvoice,
      props: true
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
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
