<template>
  <div class="relative min-h-screen atmosphere text-ink">
    <BootLoader @done="booted = true" />
    <MatrixRain />
    <div class="scanlines pointer-events-none fixed inset-0 z-[1] opacity-25" />

    <div class="relative z-[2]" :class="{ 'opacity-0': !booted, 'opacity-100 transition-opacity duration-700': booted }">
      <Nav />
      <main class="lg:ml-[17.5rem] min-h-screen" id="main">
        <a
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-accent focus:bg-paper-elevated focus:px-4 focus:py-2 focus:font-mono focus:text-accent"
          href="#main"
        >
          Skip to main content
        </a>
        <div class="pt-16 lg:pt-0">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Nav from './components/Nav.vue';
import MatrixRain from './components/MatrixRain.vue';
import BootLoader from './components/BootLoader.vue';

const booted = ref(false);
</script>
