import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Maps from '../views/Maps.vue';
import Documentation from '../views/Documentation.vue';
import Projects from '../views/Projects.vue';
import Books from '../views/Books.vue';
import Restaurants from '../views/Restaurants.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: '/', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/maps', name: 'Maps', component: Maps },
  { path: '/doc', name: 'Documentation', component: Documentation },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/books', name: 'Books', component: Books },
  { path: '/restaurants', name: 'Restaurants', component: Restaurants }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (!routes.find(route => route.path === to.path)) {
    next({ name: '/' });
  } else {
    next();
  }
});

export default router;
