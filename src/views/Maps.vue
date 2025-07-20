<template>
  <div id="maps" class="max-w-7xl mx-auto px-4 py-4 lg:py-8">
    <div class="mb-8 lg:mb-12"></div>
    <div class="text-center mb-6 lg:mb-8">
      <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">Visited Countries Map</h3>
      <p class="text-sm lg:text-base text-gray-600 mb-6">Below are some countries I've visited marked on the map.</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg mb-8 lg:mb-12" v-if="!mapError">
      <GoogleMap
        id="map"
        :api-key="googleApiKey"
        style="width: 100%; height: 400px; border-radius: 0.5rem"
        :center="center"
        :zoom="2.5"
        @ready="onMapReady"
        @error="onMapError"
      >
        <MarkerCluster>
          <Marker
            v-for="(location, i) in locations"
            :key="i"
            :options="{ position: location }"
          />
        </MarkerCluster>
      </GoogleMap>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg bg-red-50 mb-8 lg:mb-12" v-else>
      <div class="p-4 lg:p-6">
        <h5 class="text-lg font-semibold text-red-800 mb-2">Error Loading Map</h5>
        <p class="text-sm lg:text-base text-red-700 mb-4">{{ mapError }}</p>
        <p class="text-xs lg:text-sm text-red-600 mb-4">API Key: {{ googleApiKey }}</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm lg:text-base" @click="reloadPage">Reload Page</button>
      </div>
    </div>
    
    <div class="mb-8 lg:mb-12"></div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      <div v-for="(location, i) in locationDetails" :key="i">
        <article class="bg-gray-50 border border-gray-200 rounded-lg shadow-md h-full">
          <div class="p-4 lg:p-6">
            <h5 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">{{ location.name }}</h5>
            <p class="text-sm lg:text-base text-gray-600">{{ location.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map';
import { ref } from 'vue';

// API key from environment variables
const googleApiKey = ref(import.meta.env.VITE_GOOGLE_API_KEY);
const mapReady = ref(false);
const mapError = ref(null);

// Map center (Lisbon)
const center = { lat: 38.73306655883789, lng: -9.144887924194336 };

// Event handlers
const onMapReady = () => {
  console.log('Map is ready!');
  mapReady.value = true;
};

const onMapError = (error) => {
  console.error('Map error:', error);
  mapError.value = error.message || 'Failed to load Google Maps';
};

const reloadPage = () => {
  window.location.reload();
};

// Location markers
const locations = [
  { lat: 38.73306655883789, lng: -9.144887924194336 }, // Lisbon, Portugal
  { lat: -26.853251450828452, lng: -49.10872996947153 }, // Blumenau, Brazil
  { lat: -34.95600201514804, lng: -54.93948923668498 }, // Punta del Este, Uruguay
  { lat: 51.50758960843541, lng: -0.1180870493591784 }, // London, UK
  { lat: 52.37937372626596, lng: 4.900524962511013 }, // Amsterdam, Netherlands
  { lat: 37.80653472210163, lng: -122.42043458546206 }, // San Francisco, USA
  { lat: 48.856614, lng: 2.3522219 }, // Paris, France
  { lat: 52.520008, lng: 13.404954 } // Berlin, Germany
];

// Location details
const locationDetails = [
  {
    name: 'Lisbon, Portugal',
    description: 'Beautiful coastal capital city with historic neighborhoods and amazing food.'
  },
  {
    name: 'Blumenau, Brazil',
    description: 'City with strong German heritage, known for its Oktoberfest celebrations.'
  },
  {
    name: 'Punta del Este, Uruguay',
    description: 'Upscale beach resort with beautiful Atlantic beaches and vibrant nightlife.'
  },
  {
    name: 'London, UK',
    description: 'Historic city with iconic landmarks, museums, and diverse cultural experiences.'
  },
  {
    name: 'Amsterdam, Netherlands',
    description: 'Picturesque canal city known for its artistic heritage and cycling culture.'
  },
  {
    name: 'San Francisco, USA',
    description: 'Tech hub with iconic Golden Gate Bridge, cable cars, and foggy weather.'
  },
  {
    name: 'Paris, France',
    description: 'Romantic capital city known for the Eiffel Tower, art museums, and exquisite cuisine.'
  },
  {
    name: 'Berlin, Germany',
    description: 'Vibrant cultural capital with rich history, modern architecture, and dynamic art scene.'
  }
];
</script>


