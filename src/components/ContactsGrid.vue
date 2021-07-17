<template>
  <h1>{{ contacts.length }}</h1>
  <table></table>
</template>
<script>
export default {
  props: {
    contacts: Array,
  },
};
</script>
<style scoped></style>
