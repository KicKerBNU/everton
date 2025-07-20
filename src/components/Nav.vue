<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const path = computed(() => route.path);
</script>

<template>
  <nav id="nav" class="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col">
    <!-- Profile Section -->
    <div class="p-6 border-b border-gray-200">
      <router-link 
        to="/" 
        class="flex items-center space-x-3 group"
        :class="{ 'text-blue-600': path === '/' }"
      >
        <img 
          class="w-12 h-12 rounded-full ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-200" 
          src="../assets/eb.jpg" 
          alt="Everton Buzzi" 
        />
        <div>
          <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Everton Buzzi</h3>
          <p class="text-sm text-gray-500">Frontend Developer</p>
        </div>
      </router-link>
    </div>
    
    <!-- Navigation Links -->
    <div class="flex-1 py-4">
      <div class="px-4 space-y-2">
        <router-link 
          to="/" 
          :class="{ 
            'bg-blue-50 text-blue-700 border-r-2 border-blue-600': path === '/',
            'text-gray-700 hover:bg-gray-50 hover:text-gray-900': path !== '/'
          }" 
          class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 group"
        >
          <span class="material-icons mr-3 text-lg group-hover:scale-110 transition-transform">home</span>
          <span class="font-medium">Home</span>
        </router-link>
        
        <router-link 
          to="/projects" 
          :class="{ 
            'bg-blue-50 text-blue-700 border-r-2 border-blue-600': path === '/projects',
            'text-gray-700 hover:bg-gray-50 hover:text-gray-900': path !== '/projects'
          }" 
          class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 group"
        >
          <span class="material-icons mr-3 text-lg group-hover:scale-110 transition-transform">work</span>
          <span class="font-medium">Projects</span>
        </router-link>
        
        <router-link 
          to="/contact" 
          :class="{ 
            'bg-blue-50 text-blue-700 border-r-2 border-blue-600': path === '/contact',
            'text-gray-700 hover:bg-gray-50 hover:text-gray-900': path !== '/contact'
          }" 
          class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 group"
        >
          <span class="material-icons mr-3 text-lg group-hover:scale-110 transition-transform">contact_mail</span>
          <span class="font-medium">Contact</span>
        </router-link>
        
        <router-link 
          to="/maps" 
          :class="{ 
            'bg-blue-50 text-blue-700 border-r-2 border-blue-600': path === '/maps',
            'text-gray-700 hover:bg-gray-50 hover:text-gray-900': path !== '/maps'
          }" 
          class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 group"
        >
          <span class="material-icons mr-3 text-lg group-hover:scale-110 transition-transform">map</span>
          <span class="font-medium">Maps</span>
        </router-link>
      </div>
    </div>
    
    <!-- Footer Section -->
    <div class="p-4 border-t border-gray-200">
      <div class="text-center">
        <p class="text-xs text-gray-500">© 2024 Everton Buzzi</p>
        <p class="text-xs text-gray-400 mt-1">Frontend Developer</p>
      </div>
    </div>
  </nav>
</template>
