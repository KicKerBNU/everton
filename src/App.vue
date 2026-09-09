<template>
  <div class="min-h-screen atmosphere">
    <Nav />
    <main class="lg:ml-[17.5rem] min-h-screen" id="main">
      <a
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-paper-elevated focus:px-4 focus:py-2 focus:shadow-lg focus:text-ink"
        href="#main"
      >
        Skip to main content
      </a>
      <div class="pt-16 lg:pt-0">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
</script>
