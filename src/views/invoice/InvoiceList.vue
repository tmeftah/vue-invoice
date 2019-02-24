<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <h1>Invoice list</h1>
        <v-data-table :headers="headers" :items="invoices" class="elevation-1">
          <template slot="items" slot-scope="props" class="elevation-2">
            <td>{{ props.item.name }}</td>
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
