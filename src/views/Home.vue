<template>
  <div id="home" class="max-w-7xl mx-auto px-4 py-4 lg:py-8">
    <div id="introduction">
      <!-- Hero Section -->
      <div class="text-center mb-8 lg:mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Everton Buzzi</h1>
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">I'm a frontend developer, and I'd like to share more about my work with you. This webpage provides an overview of my projects, the technologies I specialize in, and a bit about my professional and personal journey.</p>
      </div>
      
      <!-- Images Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img class="w-full h-64 sm:h-80 object-cover" src="../assets/everton_amsterdam.jpg" alt="Everton in Amsterdam" />
        </div>
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <img class="w-full h-64 sm:h-80 object-cover" src="../assets/frontend.png" alt="Guy working on a computer" />
        </div>
      </div>
      
      <!-- Career Timeline Section -->
      <div class="mb-12 lg:mb-16">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12">Career Timeline</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6 lg:space-y-8">
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/neobrain.png" alt="Neobrain Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p class="text-blue-600 font-medium">Neobrain</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2023 - Present</span>
                </div>
                <p class="text-gray-700 mb-3">HR Platform Development</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Development and upgrade of the HR platform</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/masterlink.png" alt="Masterlink Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p class="text-blue-600 font-medium">Masterlink Business Innovation</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2022 - 2023</span>
                </div>
                <p class="text-gray-700 mb-3">Template Platform</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Development of dynamic card generation</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Bug fixes and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/inventti.png" alt="Inventti Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p class="text-blue-600 font-medium">Inventti Soluções</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2021 - 2022</span>
                </div>
                <p class="text-gray-700 mb-3">ERP System</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">POS Grid System</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">POS Return System</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Omni Channel</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/inventti.png" alt="Inventti Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Junior Frontend Developer</h3>
                    <p class="text-blue-600 font-medium">Inventti Soluções</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2020 - 2021</span>
                </div>
                <p class="text-gray-700 mb-3">ERP System</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Transport Invoices</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">ERP Accountant Area</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">POS System</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/inventti.png" alt="Inventti Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Internship</h3>
                    <p class="text-blue-600 font-medium">Inventti Soluções</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2019 - 2020</span>
                </div>
                <p class="text-gray-700 mb-3">ERP System</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Onboarding System</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">POS System</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Referral Marketing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Item -->
            <div class="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div class="flex-shrink-0 flex justify-center sm:justify-start">
                <img class="w-12 h-12 rounded-full border-4 border-white shadow-lg" src="../assets/besistemas.jpg" alt="Be Sistemas Logo" />
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 class="text-lg lg:text-xl font-semibold text-gray-900">Internship</h3>
                    <p class="text-blue-600 font-medium">Be Sistemas</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">2019</span>
                </div>
                <p class="text-gray-700 mb-3">Mall Management Software</p>
                <ul class="space-y-1 text-gray-600">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Customer Success</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Unit Testing</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-sm lg:text-base">Software Documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stack Section -->
      <div class="mb-12 lg:mb-16">
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12">Technology Stack</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(stack, i) in stack" :key="i" class="relative overflow-hidden rounded-lg shadow-lg group">
            <img class="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105" :src="stack.path" :alt="stack.alt" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
              <h3 class="text-lg lg:text-xl font-semibold text-white mb-2">{{ stack.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import stack from './stack';
ref(stack);
</script>

