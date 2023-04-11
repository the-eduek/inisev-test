import { createApp } from 'vue'
import router from './router';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

const app = createApp(App);
const piniaStores = createPinia();
app.use(router);
app.use(piniaStores);
app.mount('#app');
