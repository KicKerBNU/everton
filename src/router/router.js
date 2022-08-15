import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"
import {createRouter, createWebHistory} from 'vue-router'

export default createRouter( 
    {
        history: createWebHistory(),
        routes: [
            {path: '/', name: '/', component: Home},
            {path: '/home', name: 'Home', component: Home},
            {path: '/contact', name: 'Contact', component: Contact}
        ]
    });