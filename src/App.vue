<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" height="100" width="100" />-->
  <Home msg="Contact App" />
</template>

<script>
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  padding: 48px;
}
</style>
