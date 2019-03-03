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
    invoices: []
  },
  mutations: {
    setinvoices(state, payload) {
      state.invoices = payload;
    },
    deleteItem(state, payload) {
      state.invoices.splice(payload, 1);
    }
  },
  actions: {
    setinvoices({ commit }, payload) {
      commit("setinvoices", payload);
    },
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
    },
    invoice(state) {
      return invoice_id => {
        return state.invoices.find(invoice => {
          return invoice.id == invoice_id;
        });
      };
    }
  }
};
