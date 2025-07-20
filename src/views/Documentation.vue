<template>
  <div id="documentation" class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documentation</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Welcome to the documentation area. This section contains technical documentation and resources.</p>
    </div>
    
    <!-- Content Section -->
    <div class="bg-white rounded-xl shadow-lg p-8">
      <div class="text-center">
        <div class="w-24 h-24 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
          <span class="material-icons text-4xl text-blue-600">description</span>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Documentation Access</h3>
        <p class="text-gray-600 mb-6">You are currently logged in and have access to the documentation area.</p>
        
        <!-- Documentation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div class="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <span class="material-icons text-3xl text-blue-600 mb-4">code</span>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">API Reference</h4>
            <p class="text-gray-600 text-sm">Complete API documentation and examples</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <span class="material-icons text-3xl text-green-600 mb-4">school</span>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Getting Started</h4>
            <p class="text-gray-600 text-sm">Quick start guides and tutorials</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <span class="material-icons text-3xl text-purple-600 mb-4">build</span>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Configuration</h4>
            <p class="text-gray-600 text-sm">Setup and configuration guides</p>
          </div>
        </div>
        
        <!-- User Info -->
        <div class="mt-8 p-4 bg-blue-50 rounded-lg">
          <p class="text-blue-800">
            <span class="font-medium">Logged in as:</span> {{ user?.email || 'User' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref(null);
const auth = getAuth();

onAuthStateChanged(auth, currentUser => {
  user.value = currentUser;
  if (!user.value) {
    router.push('/login');
  }
});
</script>
<style></style>
