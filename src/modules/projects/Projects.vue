<template>
  <div id="projects" class="max-w-7xl mx-auto px-4 py-4 lg:py-8">
    <!-- Header Section -->
    <div class="text-center mb-8 lg:mb-12">
      <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
      <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Here are some projects I've been involved with or contributed to.</p>
    </div>
    
    <!-- Featured Projects -->
    <div class="mb-12 lg:mb-16">
      <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 lg:mb-8 text-center">Featured Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
    
    <!-- Technologies Section -->
    <div class="mb-12 lg:mb-16">
      <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 lg:mb-8 text-center">Technologies & Skills</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        <!-- Vue.js -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-blue-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-blue-600">code</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">Vue.js</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Frontend Framework</p>
        </div>
        
        <!-- BeerCSS -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-blue-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-blue-600">css</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">BeerCSS</h4>
          <p class="text-gray-600 text-xs lg:text-sm">UI Framework</p>
        </div>
        
        <!-- JavaScript -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-yellow-600">javascript</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">JavaScript</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Programming Language</p>
        </div>
        
        <!-- Firebase -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-orange-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-orange-600">cloud</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">Firebase</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Backend & Hosting</p>
        </div>

        <!-- Vue I18n -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-indigo-600">translate</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">i18n</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Internationalization</p>
        </div>

        <!-- Vite -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-violet-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-violet-600">bolt</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">Vite</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Build Tool & Dev Server</p>
        </div>

        <!-- Tailwind CSS -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-cyan-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-cyan-600">palette</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Utility-First CSS</p>
        </div>

        <!-- Stripe -->
        <div class="bg-white rounded-xl shadow-lg p-4 lg:p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div class="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-purple-50 rounded-full flex items-center justify-center">
            <span class="material-icons text-2xl lg:text-3xl text-purple-600">payments</span>
          </div>
          <h4 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">Stripe</h4>
          <p class="text-gray-600 text-xs lg:text-sm">Payments & Billing</p>
        </div>
      </div>
    </div>
    
    <!-- Additional Skills -->
    <div class="bg-gray-50 rounded-xl p-6 lg:p-8">
      <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 text-center">Additional Skills</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">HTML5</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">CSS3</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">Git</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">REST APIs</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">Responsive Design</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">UI/UX Design</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">Testing</span>
        </div>
        <div class="bg-white rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-center shadow-sm">
          <span class="text-xs lg:text-sm font-medium text-gray-700">Performance</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue';
import { projects } from './data/projects.js';
</script>
