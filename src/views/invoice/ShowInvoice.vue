<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <h1>Show invoice</h1>
        <h2>{{invoice.name}}</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    invoice() {
      return this.$store.getters.invoice(this.id);
    }
  }
};
</script>
