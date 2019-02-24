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
        <v-toolbar-title>E-invoice</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="menu in menuItems" :key="menu.icon" :to="menu.link">
            <v-icon class="mr-1">{{menu.icon}}</v-icon>
            {{ menu.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
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
      drawer: false,
      menuItems: [
        { icon: "list_alt", title: "Show Invoices", link: "/list" },
        { icon: "add_shopping_cart", title: "Create Invoice", link: "/create" },
        { icon: " person", title: "Profile", link: "/profile" }
      ]
    };
  }
};
</script>
