import { createApp } from 'vue';
import store from './stores/contact_store';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);
app.use(store);
app.mount('#app');
