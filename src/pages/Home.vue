<template>
  <h1>{{ msg }}</h1>
  <ContactsGrid :contacts="contactList" />
  <button class="btn btn-success">Ok</button>
</template>
<script>
import store from '../stores/contact_store';
import ContactsGrid from '../components/ContactsGrid';
import { mapGetters } from 'vuex';
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
    addContact() {
      this.$store.commit('addContact', { name: 'Carlos' });
    },
  },
  computed: {
    ...mapGetters({ contactList: 'getAllContacts' }),
  },
};
</script>

<style scoped></style>
