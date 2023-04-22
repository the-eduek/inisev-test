import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './styles/index.scss';

const app = createApp(App);
const piniaStores = createPinia();
app.use(router);
app.use(piniaStores);
app.mount('#app');