<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <h1>Invoice list</h1>
        <v-data-table :headers="headers" :items="invoices" class="elevation-1">
          <template slot="items" slot-scope="props" class="elevation-2">
            <td>
              <router-link :to="'invoice/' + props.item.id">{{ props.item.name }}</router-link>
            </td>
            <td class="text-xs-left">{{ props.item.client }}</td>
            <td class="text-xs-left">{{ props.item.amount }} {{props.item.currency}}</td>
            <td class="text-xs-left">{{ props.item.term }}</td>
            <td class="text-xs-left">{{ props.item.due }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  created: function() {
    this.$http({
      url: "http://localhost:5000/product/list",
      headers: {
        Authorization: "Bearer " + this.$store.state.access_token
      },
      method: "GET"
    })
      .then(resp => {
        this.$store.dispatch("setinvoices", resp.data.invoices);
      })
      .catch(err => {
        console.log(err);
      });
  },

  computed: {
    headers() {
      return this.$store.getters.headers;
    },
    invoices() {
      return this.$store.getters.invoices;
    }
  },
  methods: {}
};
</script>
