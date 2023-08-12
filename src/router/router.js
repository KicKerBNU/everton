import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Gas from '../views/Gas.vue';
import Invest from '../views/Invest.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/gas', name: 'Gas', component: Gas },
    { path: '/invest', name: 'Real State', component: Invest }
  ]
});
