import { createApp } from 'vue';
import App from './App.vue';
import 'beercss';
import Nav from './components/Nav.vue';
import router from './router/router.js';

const app = createApp(App);
app.component('Nav', Nav);
const mountedApp = app.use(router).mount('#app');
