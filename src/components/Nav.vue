<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const path = computed(() => route.path);
</script>

<template>
  <nav id="nav" class="m l left">
    <router-link to="/" :class="{ active: path == '/' }">
      <img class="tiny" src="../assets/eb.jpg" alt="EB icon" />
    </router-link>
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
    <router-link to="/docs" :class="{ active: path == '/docs' }">
      <i>description</i>
      <span>Docs</span>
    </router-link>
  </nav>
</template>
<script></script>
