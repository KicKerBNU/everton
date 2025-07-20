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
      
      <!-- Dark mode toggle -->
      <div class="fixed top-4 right-4 z-40">
        <div class="flex items-center space-x-3 bg-white rounded-lg shadow-lg px-4 py-2">
          <span class="text-sm font-medium text-gray-700">Theme</span>
          <label class="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200 cursor-pointer">
            <input 
              type="checkbox" 
              v-model="isDark" 
              class="sr-only" 
              aria-label="Toggle dark mode"
            />
            <span 
              class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out shadow-sm" 
              :class="{ 'translate-x-5': isDark }"
            ></span>
          </label>
          <span class="text-sm text-gray-500">{{ isDark ? 'Dark' : 'Light' }}</span>
        </div>
      </div>
      
      <!-- Main content area -->
      <div class="pt-16">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
import { ref, watch } from 'vue';

const isDark = ref(false);

watch(
  () => isDark.value,
  (newValue) => {
    if (!newValue) {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('blue1');
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('blue1');
    }
  },
  { immediate: true }
);
</script>
