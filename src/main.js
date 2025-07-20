import { createApp } from 'vue';
import App from './App.vue';
import Nav from './components/Nav.vue';
import router from './router/router.js';
import './style.css';

const app = createApp(App);
app.component('Nav', Nav);
const mountedApp = app.use(router).mount('#app');
