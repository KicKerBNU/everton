import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import "beercss"
import Nav from "./components/Nav.vue"
import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"

const router = createRouter( 
    {
        history: createWebHistory(),
        routes: [
            {path: '/', name: '/', component: Home},
            {path: '/home', name: 'Home', component: Home},
            {path: '/contact', name: 'Contact', component: Contact}
        ]
    });

const app = createApp(App);
app.component('Nav', Nav);
const mountedApp = app.use(router).mount('#app')

