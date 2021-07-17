<template>
  <h1>{{ msg }}</h1>
  <ContactsGrid :contacts="allContacts" />
  <button v-on:click="increment">Add Contact</button>
</template>
<script>
import store from '../stores/contact_store';
import ContactsGrid from '../components/ContactsGrid';
export default {
  name: 'Home',
  components: {
    ContactsGrid,
  },
  data() {
    return store;
  },
  props: {
    msg: String,
  },
  methods: {
    increment() {
      this.$store.commit('addContact', { name: 'Carlos' });
    },
  },
  computed: {
    allContacts() {
      return this.$store.getters.allContacts;
    },
  },
};
</script>

<style scoped></style>
