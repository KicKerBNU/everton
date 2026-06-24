import Home from '../modules/home';
import Contact from '../modules/contact';
import Maps from '../modules/maps';
import Documentation from '../modules/documentation';
import Projects from '../modules/projects';
import Books from '../modules/books';
import Restaurants from '../modules/restaurants';
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
