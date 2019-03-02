<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        class="hidden-sm-and-up"
        v-model="drawer"
        disable-resize-watcher
        fixed
        clipped
        app
      >
        <v-list>
          <v-list-tile
            v-for="menu in menuItems"
            :key="menu.title"
            :to="menu.link"
            active-class="indigo--text"
          >
            <v-list-tile-action>
              <v-icon class="mr-1">{{menu.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{menu.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar class="blue darken-3" fixed dark dense app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="button">E-invoice</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="menu in menuItems" :key="menu.icon" :to="menu.link">
            <v-icon class="mr-1">{{menu.icon}}</v-icon>
            {{ menu.title }}
          </v-btn>
          <v-btn flat v-if="isLoggedIn" @click="logout">
            <v-icon class="mr-1">lock</v-icon>logout
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [{ icon: " lock_open", title: "Login", link: "/login" }];
      if (this.$store.getters.isLoggedIn) {
        menuItems = [
          { icon: "list_alt", title: "Show Invoices", link: "/list" },
          {
            icon: "add_shopping_cart",
            title: "Create Invoice",
            link: "/create"
          },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>
