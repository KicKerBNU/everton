<script setup>
import {useRoute} from 'vue-router'
import {computed} from 'vue'
const route=useRoute();
const path = computed(() =>route.path)
</script>

<template>
<nav id="nav" class="m l left">
  <a>
    <img class="tiny" src="../assets/eb.jpg">
  </a>
  <router-link to="/" :class="{active: path == '/'}">
    <i>home</i>
    <span>Home</span>
  </router-link>
  <router-link to="/contact" :class="{active: path == '/contact'}">
    <i>contacts</i>
    <span>Contact</span>
  </router-link>
  <a>
    <i>local_gas_station</i>
    <span>Project1</span>
  </a>
  <a>
    <i>local_gas_station</i>
    <span>Project3</span>
  </a>
  <a>
    <i>local_gas_station</i>
    <span>Project2</span>
  </a>
</nav>
</template>
<script>

</script>