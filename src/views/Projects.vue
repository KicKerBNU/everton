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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <!-- BeerCSS Project -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-40 sm:h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <img class="w-24 h-24 sm:w-32 sm:h-32 object-contain" src="../assets/beercss.png" alt="BeerCSS Logo" />
          </div>
          <div class="p-4 lg:p-6">
            <h4 class="text-lg lg:text-xl font-semibold text-gray-900 mb-3">BeerCSS</h4>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">A utility-first CSS framework for rapidly building custom user interfaces. This project showcases modern CSS practices and responsive design principles.</p>
            <div class="flex justify-end">
              <a 
                href="https://beercss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 border border-blue-600 text-sm font-medium rounded-lg text-blue-600 bg-transparent hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Visit Website
                <span class="material-icons ml-2 text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Saúde Pilates Project -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-40 sm:h-48 overflow-hidden">
            <img class="w-full h-full object-cover" src="../assets/pilates-hero.jpg" alt="Saúde Pilates" />
          </div>
          <div class="p-4 lg:p-6">
            <h4 class="text-lg lg:text-xl font-semibold text-gray-900 mb-3">Saúde Pilates</h4>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">A comprehensive platform for pilates practitioners and health professionals. Features include user management, class scheduling, and progress tracking.</p>
            <div class="flex justify-end">
              <a 
                href="https://www.saudepilates.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 border border-blue-600 text-sm font-medium rounded-lg text-blue-600 bg-transparent hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Visit Website
                <span class="material-icons ml-2 text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
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
// Projects component
</script> 