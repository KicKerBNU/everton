import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Maps from '../views/Maps.vue';
import Documentation from '../views/Documentation.vue';
import Login from '../views/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/maps', name: 'Maps', component: Maps },
    { path: '/doc', name: 'Documentation', component: Documentation },
    { path: '/login', name: 'Login', component: Login }
  ]
});
