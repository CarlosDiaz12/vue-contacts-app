<template>
  <h1>{{ msg }}</h1>
  <div class="row mt-5">
    <div class="col-md-3">
      <button class="btn btn-success" @click="openModal">Add</button>
    </div>
  </div>
  <div class="row">
    <div class="d-flex justify-content-center mt-1">
      <ContactsGrid
        :contacts="contactList"
        v-on:delete="deleteByIndex"
        v-on:edit="initEditContact"
      />
    </div>
  </div>
  <ContactModal
    v-if="showModal"
    v-on:save="manageSave"
    v-on:close="closeModal"
    :type="action"
  >
    <template v-slot:body>
      <form id="contactForm">
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input
            v-model="contact.name"
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="lastName">LastName</label>
          <input
            v-model="contact.last_name"
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="email">Email</label>
          <input
            v-model="contact.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="email">Phone Number</label>
          <input
            v-model="contact.phone_number"
            type="phone"
            class="form-control"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
      </form>
    </template>
  </ContactModal>
</template>
<script>
import store from '../stores/contact_store';
import ContactsGrid from '../components/ContactsGrid';
import ContactModal from '../components/ContactModal';
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {
    ContactsGrid,
    ContactModal,
  },
  data() {
    return {
      store,
      showModal: false,
      action: 'A',
      contact: {
        name: '',
        last_name: '',
        phone_number: '',
        email: '',
        index: -1,
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    manageSave() {
      var isNotValid = Object.values(this.contact).some(
        (i) => typeof i != 'number' && i.trim() == ''
      );
      console.log(Object.values(this.contact));
      if (isNotValid) return;
      switch (this.action) {
        case 'A':
          this.saveContact();
          break;
        case 'E':
          this.editContact();
          break;
      }
    },
    saveContact() {
      let newContact = Object.assign({}, this.contact);
      this.$store.commit('addContact', newContact);
      this.cleanForm();
      this.closeModal();
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteByIndex(index) {
      this.$store.commit('deleteContactAt', index);
    },
    initEditContact(index) {
      var currentContact = this.getByIndex({ index });
      currentContact.index = index;
      this.contact = currentContact;
      this.action = 'E';
      this.openModal();
    },
    editContact() {
      let newValue = Object.assign({}, this.contact);
      this.$store.commit('editContact', { newValue });
      this.cleanForm();
      this.closeModal();
    },
    cleanForm() {
      this.contact.name = '';
      this.contact.last_name = '';
      this.contact.phone_number = '';
      this.contact.email = '';
      this.contact.index = -1;
    },
  },
  computed: {
    ...mapGetters({
      contactList: 'getAllContacts',
      getByIndex: 'getContactById',
    }),
  },
};
</script>

<style scoped>
label,
h1 {
  font-weight: bold;
}

h1 {
  text-align: center;
}
</style>
