import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      contacts: [],
    };
  },
  mutations: {
    addContact(state, newValue) {
      state.contacts.push(newValue);
    },
    editContact(state, payload) {
      var index = payload.index;
      state.contacts[index] = payload.newValue;
    },
    deleteContactAt(state, payload) {
      state.contacts.splice(payload.index, 1);
    },
  },
  getters: {
    getAllContacts(state) {
      return state.contacts;
    },
    getContactById: (state, getters) => (payload) => {
      return getters.allContacts[payload.index];
    },
  },
});

export default store;
