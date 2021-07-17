import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      contacts: [],
    };
  },
  mutations: {
    addContact(state, newContact) {
      state.contacts.push(newContact);
    },
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
  },
});

export default store;
// export default {
//   debug: true,
//   state: reactive({
//     contacts: [1, 2, 3],
//   }),

//   addContact(newValue) {
//     this.state.contacts.push(newValue);
//   },

//   //   editContact(index, newValue) {
//   //     // TODO: edit contact
//   //   },

//   //   deleleContact(index) {
//   //     // TODO: delete contact
//   //   },
// };
