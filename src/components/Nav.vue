<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const path = computed(() => route.path);
</script>

<template>
  <nav id="nav" class="m l left">
    <a>
      <img class="tiny" src="../assets/eb.jpg" alt="EB icon" />
    </a>
    <router-link to="/" :class="{ active: path == '/' }">
      <i>home</i>
      <span>Home</span>
    </router-link>
    <router-link to="/contact" :class="{ active: path == '/contact' }">
      <i>contacts</i>
      <span>Contact</span>
    </router-link>
    <router-link to="/gas" :class="{ active: path == '/gas' }">
      <i>local_gas_station</i>
      <span>Gas Control</span>
    </router-link>
    <router-link to="/invest" :class="{ active: path == '/invest' }">
      <i>savings</i>
      <span>Real State</span>
    </router-link>
  </nav>
</template>
<script></script>
