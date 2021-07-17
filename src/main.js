import { createApp } from 'vue';
import store from './stores/contact_store';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');
