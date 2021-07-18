<template>
  <h5 v-if="contacts.length == 0">No contacts to show.</h5>
  <br />
  <table v-if="contacts.length > 0" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Email</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in contacts" :key="item.name">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.email }}</td>
        <td>
          <button class="btn btn-info" @click="editElement(index)">
            Edit
          </button>

          <button class="btn btn-danger" @click="deleteElement(index)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'ContactsGrid',
  emits: ['delete'],
  props: {
    contacts: Array,
  },
  methods: {
    deleteElement(index) {
      this.$emit('delete', index);
    },
    editElement(index) {
      this.$emit('edit', index);
    },
  },
};
</script>
<style scoped>
table {
  width: 700px !important;
}
</style>
