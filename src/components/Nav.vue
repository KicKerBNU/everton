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
    <router-link to="/maps" :class="{ active: path == '/maps' }">
      <i>map</i>
      <span>Maps</span>
    </router-link>
    <!-- <router-link to="/doc" :class="{ active: path == '/doc' }">
      <i>description</i>
      <span>Docs</span>
    </router-link> -->
  </nav>
</template>
<script></script>
