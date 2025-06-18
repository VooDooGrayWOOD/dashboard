import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';
import './style.css';
import i18n from './plugins/i18n';
import { create } from 'naive-ui';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(create());
app.use(i18n);
app.use(pinia);
app.mount('#app');
