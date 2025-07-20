<template>
  <div class="min-h-screen bg-gray-50">
    <Nav />
    <main class="ml-64 min-h-screen" id="main">
      <!-- Skip to main content link for accessibility -->
      <a 
        class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-gray-900" 
        href="#main"
      >
        Skip to main content
      </a>
      
      <!-- Main content area -->
      <div class="pt-16">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';

</script>
