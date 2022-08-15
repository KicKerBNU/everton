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

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDd4Cw7z2oWywl9XkIh8sBYAtHia_7NsaE",
    authDomain: "everton-17da5.firebaseapp.com",
    projectId: "everton-17da5",
    storageBucket: "everton-17da5.appspot.com",
    messagingSenderId: "932994133020",
    appId: "1:932994133020:web:c87ebaf447d3548ba3c3d9",
    measurementId: "G-KFKCBCH52Z"
  });
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("logged in");
    }else {
        console.log("No User");
    }
})
