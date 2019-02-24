export default {
  state: {
    headers: [
      {
        text: "Invoice Number",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Client", value: "client" },
      { text: "Amount", value: "amount" },
      { text: "Terms", value: "term" },
      { text: "Due", value: "due" }
    ],
    invoices: [
      {
        name: "INV0001",
        client: "Client-1",
        amount: "159.52",
        currency: "$",
        term: "2 Days",
        due: "01-08-2019"
      },
      {
        name: "INV0002",
        client: "Client-2",
        amount: "200.00",
        currency: "€",
        term: "Due on Recept",
        due: "17-07-2019"
      }
    ]
  },
  mutations: {
    deleteItem(state, payload) {
      state.invoices.splice(payload, 1);
    }
  },
  actions: {
    deleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    }
  },
  getters: {
    headers(state) {
      return state.headers;
    },
    invoices(state) {
      return state.invoices;
    }
  }
};
