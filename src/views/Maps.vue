<template>
  <div id="maps" class="max-w-7xl mx-auto px-4 py-4 lg:py-8">
    <div class="mb-8 lg:mb-12"></div>
    <div class="text-center mb-6 lg:mb-8">
      <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">Visited Countries Map</h3>
      <p class="text-sm lg:text-base text-gray-600 mb-6">Below are some countries I've visited marked on the map.</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg mb-8 lg:mb-12" v-if="!mapError">
      <GoogleMap
        ref="mapRef"
        id="map"
        :api-key="googleApiKey"
        style="width: 100%; height: 400px; border-radius: 0.5rem"
        :center="center"
        :zoom="2.5"
        @ready="onMapReady"
        @error="onMapError"
        @zoom-changed="onZoomChanged"
      >
        <!-- Brazilian individual pins (shown when zoomed in or forced) -->
        <template v-if="showBrazilianPins">
          <Marker
            v-for="(location, index) in brazilianLocations"
            :key="`brazil-${index}`"
            :options="getMarkerOptions(index, location)"
            :visible="activeMarkerIndex !== index"
          />
        </template>
        
        <!-- Non-Brazilian pins -->
        <Marker
          v-for="(location, index) in nonBrazilianLocations"
          :key="`non-brazil-${index}`"
          :options="getMarkerOptions(brazilianLocations.length + index, location)"
          :visible="activeMarkerIndex !== (brazilianLocations.length + index)"
        />
        
        <!-- Brazil cluster marker - show when zoomed out -->
        <Marker
          v-if="!showBrazilianPins"
          :options="getBrazilClusterOptions()"
          @click="onBrazilClusterClick"
        />
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
      <!-- Country Cards (shown when no specific country is selected) -->
      <template v-if="activeCountryIndex === null">
        <div v-for="(country, countryIndex) in countryGroups" :key="`country-${countryIndex}`">
          <article 
            class="bg-gray-50 border border-gray-200 rounded-lg shadow-md h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-300 pointer-events-auto"
            @click="onCountryCardClick(countryIndex)"
          >
            <div class="p-4 lg:p-6">
              <h5 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">{{ country.name }}</h5>
              <p class="text-sm lg:text-base text-gray-600 mb-3">{{ country.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500">{{ country.cities.length }} cities visited</span>
                <span class="material-icons text-sm text-gray-400">chevron_right</span>
              </div>
            </div>
          </article>
        </div>
      </template>
      
      <!-- City Cards (shown when a specific country is selected) -->
      <template v-else>
        <!-- Back to countries button -->
        <div class="col-span-full mb-4">
          <button 
            @click="onBackToCountries"
            class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <span class="material-icons mr-2">arrow_back</span>
            Back to Countries
          </button>
        </div>
        
        <!-- Selected country header -->
        <div class="col-span-full mb-4">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 class="text-xl font-semibold text-blue-900">{{ countryGroups[activeCountryIndex].name }}</h3>
            <p class="text-blue-700">{{ countryGroups[activeCountryIndex].description }}</p>
          </div>
        </div>
        
        <!-- City cards for selected country -->
        <div v-for="(city, cityIndex) in countryGroups[activeCountryIndex].cities" :key="`city-${activeCountryIndex}-${cityIndex}`">
          <article 
            class="bg-white border border-gray-200 rounded-lg shadow-md h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-300 pointer-events-auto"
            :class="{ 'ring-2 ring-blue-500 bg-blue-50 border-blue-400': activeMarkerIndex === getCityGlobalIndex(activeCountryIndex, cityIndex) }"
            @click="onCityCardClick(activeCountryIndex, cityIndex)"
          >
            <div class="p-4 lg:p-6">
              <h5 class="text-base lg:text-lg font-semibold text-gray-900 mb-2">{{ city.name }}</h5>
              <p class="text-sm lg:text-base text-gray-600">{{ city.description }}</p>
            </div>
          </article>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map';
import { ref, computed } from 'vue';
import { onUnmounted } from 'vue';

// API key from environment variables
const googleApiKey = ref(import.meta.env.VITE_GOOGLE_API_KEY);
const mapReady = ref(false);
const mapError = ref(null);
const mapRef = ref(null);
const activeMarkerIndex = ref(null);
const forceShowBrazilianPins = ref(false);
const activeCountryIndex = ref(null);

// Map center (Lisbon)
const center = { lat: 38.73306655883789, lng: -9.144887924194336 };

// Country groups data
const countryGroups = [
  {
    name: 'Brazil',
    description: 'Largest country in South America with diverse culture, beautiful beaches, and vibrant cities.',
    cities: [
      { name: 'Blumenau', description: 'City with strong German heritage, known for its Oktoberfest celebrations.' },
      { name: 'Fernando de Noronha', description: 'Pristine archipelago with crystal-clear waters, stunning beaches, and rich marine life.' },
      { name: 'São Paulo', description: 'Brazil\'s largest city, a vibrant metropolis with diverse culture and business opportunities.' },
      { name: 'Rio de Janeiro', description: 'Iconic city known for Christ the Redeemer, Copacabana Beach, and Carnival celebrations.' },
      { name: 'Fortaleza', description: 'Coastal city with beautiful beaches, rich culture, and vibrant nightlife.' },
      { name: 'Recife', description: 'Historic port city known for its beautiful beaches, colonial architecture, and cultural heritage.' },
      { name: 'Porto Alegre', description: 'Southern Brazilian city known for its vibrant cultural scene, beautiful beaches, and excellent food.' },
      { name: 'Florianópolis', description: 'Island city with stunning beaches, lush forests, and a vibrant cultural scene.' },
      { name: 'Curitiba', description: 'Capital of Paraná state, known for its modern architecture, cultural diversity, and excellent quality of life.' }
    ]
  },
  {
    name: 'Portugal',
    description: 'Beautiful European country with rich history, amazing food, and stunning coastal landscapes.',
    cities: [
      { name: 'Lisbon', description: 'Beautiful coastal capital city with historic neighborhoods and amazing food.' },
      { name: 'Porto', description: 'Historic port city known for its wine production, beautiful architecture, and charming riverside district.' }
    ]
  },
  {
    name: 'Uruguay',
    description: 'Small but charming South American country with beautiful beaches and relaxed lifestyle.',
    cities: [
      { name: 'Punta del Este', description: 'Upscale beach resort with beautiful Atlantic beaches and vibrant nightlife.' }
    ]
  },
  {
    name: 'United Kingdom',
    description: 'Historic European nation with rich cultural heritage and iconic landmarks.',
    cities: [
      { name: 'London', description: 'Historic city with iconic landmarks, museums, and diverse cultural experiences.' }
    ]
  },
  {
    name: 'Netherlands',
    description: 'Picturesque European country known for its canals, cycling culture, and artistic heritage.',
    cities: [
      { name: 'Amsterdam', description: 'Picturesque canal city known for its artistic heritage and cycling culture.' }
    ]
  },
  {
    name: 'United States',
    description: 'Diverse country with iconic cities, stunning landscapes, and rich cultural experiences.',
    cities: [
      { name: 'San Francisco', description: 'Innovative tech hub with iconic Golden Gate Bridge and diverse neighborhoods.' },
      { name: 'Las Vegas', description: 'Entertainment capital known for its vibrant nightlife, casinos, and spectacular shows.' },
      { name: 'Los Angeles', description: 'Entertainment and cultural hub with Hollywood, beautiful beaches, and diverse communities.' }
    ]
  },
  {
    name: 'France',
    description: 'Romantic European country known for its art, cuisine, and iconic landmarks.',
    cities: [
      { name: 'Paris', description: 'Romantic capital city known for the Eiffel Tower, art museums, and exquisite cuisine.' }
    ]
  },
  {
    name: 'Germany',
    description: 'Vibrant European country with rich history, modern architecture, and dynamic culture.',
    cities: [
      { name: 'Berlin', description: 'Vibrant cultural capital with rich history, modern architecture, and dynamic art scene.' }
    ]
  }
];

// Computed property to get current zoom level
const currentZoom = computed(() => {
  if (mapRef.value && mapRef.value.map) {
    return mapRef.value.map.getZoom();
  }
  return 2.5;
});

// Computed property to determine if we should show individual Brazilian pins
const showBrazilianPins = computed(() => {
  const zoom = currentZoom.value;
  return zoom >= 5 || forceShowBrazilianPins.value;
});

// Event handlers
const onMapReady = () => {
  mapReady.value = true;
};

const onMapError = (error) => {
  mapError.value = error.message || 'Failed to load Google Maps';
};

const onZoomChanged = () => {
  // Reset force flag when zooming out
  if (currentZoom.value < 5) {
    forceShowBrazilianPins.value = false;
  }
};

const reloadPage = () => {
  window.location.reload();
};

// Brazilian locations
const brazilianLocations = [
  { lat: -26.853251450828452, lng: -49.10872996947153 }, // Blumenau
  { lat: -3.8447, lng: -32.4239 }, // Fernando de Noronha
  { lat: -23.5505, lng: -46.6333 }, // São Paulo
  { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
  { lat: -3.7319, lng: -38.5267 }, // Fortaleza
  { lat: -8.0476, lng: -34.8770 }, // Recife
  { lat: -30.0346, lng: -51.2177 }, // Porto Alegre
  { lat: -27.5969, lng: -48.5495 }, // Florianópolis
  { lat: -25.4289, lng: -49.2671 } // Curitiba
];

// Non-Brazilian locations
const nonBrazilianLocations = [
  { lat: 38.73306655883789, lng: -9.144887924194336 }, // Lisbon, Portugal
  { lat: 41.1579, lng: -8.6291 }, // Porto, Portugal
  { lat: -34.95600201514804, lng: -54.93948923668498 }, // Punta del Este, Uruguay
  { lat: 51.50758960843541, lng: -0.1180870493591784 }, // London, UK
  { lat: 52.37937372626596, lng: 4.900524962511013 }, // Amsterdam, Netherlands
  { lat: 37.80653472210163, lng: -122.42043458546206 }, // San Francisco, USA
  { lat: 36.1699, lng: -115.1398 }, // Las Vegas, USA
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
  { lat: 48.856614, lng: 2.3522219 }, // Paris, France
  { lat: 52.520008, lng: 13.404954 } // Berlin, Germany
];

// All location details
const allLocationDetails = [
  {
    name: 'Lisbon, Portugal',
    description: 'Beautiful coastal capital city with historic neighborhoods and amazing food.'
  },
  {
    name: 'Porto, Portugal',
    description: 'Historic port city known for its wine production, beautiful architecture, and charming riverside district.'
  },
  {
    name: 'Blumenau, Brazil',
    description: 'City with strong German heritage, known for its Oktoberfest celebrations.'
  },
  {
    name: 'Fernando de Noronha, Brazil',
    description: 'Pristine archipelago with crystal-clear waters, stunning beaches, and rich marine life.'
  },
  {
    name: 'São Paulo, Brazil',
    description: 'Brazil\'s largest city, a vibrant metropolis with diverse culture and business opportunities.'
  },
  {
    name: 'Rio de Janeiro, Brazil',
    description: 'Iconic city known for Christ the Redeemer, Copacabana Beach, and Carnival celebrations.'
  },
  {
    name: 'Fortaleza, Brazil',
    description: 'Coastal city with beautiful beaches, rich culture, and vibrant nightlife.'
  },
  {
    name: 'Recife, Brazil',
    description: 'Historic port city known for its beautiful beaches, colonial architecture, and cultural heritage.'
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
    description: 'Innovative tech hub with iconic Golden Gate Bridge and diverse neighborhoods.'
  },
  {
    name: 'Las Vegas, USA',
    description: 'Entertainment capital known for its vibrant nightlife, casinos, and spectacular shows.'
  },
  {
    name: 'Los Angeles, USA',
    description: 'Entertainment and cultural hub with Hollywood, beautiful beaches, and diverse communities.'
  },
  {
    name: 'Paris, France',
    description: 'Romantic capital city known for the Eiffel Tower, art museums, and exquisite cuisine.'
  },
  {
    name: 'Berlin, Germany',
    description: 'Vibrant cultural capital with rich history, modern architecture, and dynamic art scene.'
  },
  {
    name: 'Porto Alegre, Brazil',
    description: 'Southern Brazilian city known for its vibrant cultural scene, beautiful beaches, and excellent food.'
  },
  {
    name: 'Florianópolis, Brazil',
    description: 'Island city with stunning beaches, lush forests, and a vibrant cultural scene.'
  },
  {
    name: 'Curitiba, Brazil',
    description: 'Capital of Paraná state, known for its modern architecture, cultural diversity, and excellent quality of life.'
  }
];

// Function to get marker options based on active state
const getMarkerOptions = (index, location) => {
  const isActive = activeMarkerIndex.value === index;
  
  return {
    position: location,
    title: getLocationNameByIndex(index),
    icon: {
      url: isActive ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      scaledSize: { width: isActive ? 50 : 30, height: isActive ? 50 : 30 }
    }
  };
};

// Function to get Brazil cluster marker options
const getBrazilClusterOptions = () => {
  const isActive = activeMarkerIndex.value === 'brazil-cluster';
  
  return {
    position: { lat: -15.7801, lng: -47.9292 }, // Center of Brazil
    title: 'Brazil - Multiple Cities',
    icon: {
      url: isActive ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      scaledSize: { width: isActive ? 60 : 40, height: isActive ? 60 : 40 }
    }
  };
};

// Function to get location name by index
const getLocationNameByIndex = (index) => {
  if (typeof index === 'number') {
    if (index >= 0 && index < brazilianLocations.length) {
      // Brazilian location
      return allLocationDetails[index + 1].name; // +1 because Blumenau is at index 1 in allLocationDetails
    } else {
      // Non-Brazilian location
      const nonBrazilIndex = index - brazilianLocations.length;
      if (nonBrazilIndex >= 0 && nonBrazilIndex < nonBrazilianLocations.length) {
        return allLocationDetails[nonBrazilIndex].name;
      }
    }
  }
  return '';
};

// Function to handle Brazil cluster click
const onBrazilClusterClick = () => {
  activeMarkerIndex.value = 'brazil-cluster';
  forceShowBrazilianPins.value = true; // Force showing Brazilian pins
  
  // Zoom to Brazil and show individual pins
  if (mapRef.value && mapRef.value.map) {
    mapRef.value.map.panTo({ lat: -15.7801, lng: -47.9292 });
    mapRef.value.map.setZoom(5);
    
    // Force a small delay to ensure the zoom completes before checking
    setTimeout(() => {
    }, 500);
  }
  
  // Stop the bounce animation after 3 seconds
  setTimeout(() => {
    if (activeMarkerIndex.value === 'brazil-cluster') {
      activeMarkerIndex.value = null;
    }
  }, 3000);
};

// Function to handle country card clicks
const onCountryCardClick = (index) => {
  // If clicking the same country that's already active, go back to countries list
  if (activeCountryIndex.value === index) {
    activeCountryIndex.value = null;
    activeMarkerIndex.value = null;
  } else {
    // Otherwise, select the new country
    activeCountryIndex.value = index;
    activeMarkerIndex.value = null;
  }
};

// Function to handle city card clicks
const onCityCardClick = (countryIndex, cityIndex) => {
  const globalIndex = getCityGlobalIndex(countryIndex, cityIndex);
  activeMarkerIndex.value = globalIndex;
  
  // Get the correct location based on country and city
  const location = getLocationByCountryAndCity(countryIndex, cityIndex);
  
  if (location) {
    // Wait for map to be ready
    const checkMapReady = () => {
      if (mapRef.value && mapRef.value.map) {
        // Pan and zoom to the location
        mapRef.value.map.panTo(location);
        
        // If it's a Brazilian city, zoom in more to show individual pins
        if (countryIndex === 0) { // Brazil is index 0
          mapRef.value.map.setZoom(6);
          // Force showing Brazilian pins
          forceShowBrazilianPins.value = true;
        } else {
          mapRef.value.map.setZoom(8);
        }
        
        // Apply bounce animation to the active marker
        applyBounceAnimation(globalIndex);
        
        // Add a small delay to ensure the marker animation is visible
        setTimeout(() => {
          // Stop the bounce animation after 5 seconds
          setTimeout(() => {
            if (activeMarkerIndex.value === globalIndex) {
              activeMarkerIndex.value = null;
            }
            stopBounceAnimation(globalIndex);
          }, 5000);
        }, 100);
      } else { 
        setTimeout(checkMapReady, 100);
      }
    };
    
    checkMapReady();
  }
};

// Function to handle back to countries
const onBackToCountries = () => {
  activeCountryIndex.value = null;
  activeMarkerIndex.value = null;
};

// Helper function to get location by index
const getLocationByIndex = (index) => {
  if (index >= 0 && index < brazilianLocations.length) {
    // Brazilian location
    return brazilianLocations[index];
  } else {
    // Non-Brazilian location
    const nonBrazilIndex = index - brazilianLocations.length;
    if (nonBrazilIndex >= 0 && nonBrazilIndex < nonBrazilianLocations.length) {
      return nonBrazilianLocations[nonBrazilIndex];
    }
  }
  return null;
};

// Helper function to check if location is Brazilian
const isBrazilianLocation = (index) => {
  return index >= 0 && index < brazilianLocations.length;
};

// Helper function to get the global index for a city within a country
const getCityGlobalIndex = (countryIndex, cityIndex) => {
  if (countryIndex === 0) {
    // Brazil cities - use direct index (0-8)
    return cityIndex;
  } else {
    // Non-Brazilian cities - start after Brazilian cities
    return brazilianLocations.length + cityIndex;
  }
};

// Function to apply bounce animation to a specific marker
const applyBounceAnimation = (markerIndex) => {
  if (!mapRef.value || !mapRef.value.map || !window.google) return;
  
  // Find the marker and apply bounce animation
  if (markerIndex >= 0 && markerIndex < brazilianLocations.length) {
    // Brazilian marker
    const location = brazilianLocations[markerIndex];
    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(location.lat, location.lng),
      map: mapRef.value.map,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(50, 50)
      },
      animation: window.google.maps.Animation.BOUNCE
    });
    
    // Store reference to remove later
    if (!window.bounceMarkers) window.bounceMarkers = {};
    window.bounceMarkers[markerIndex] = marker;
  } else {
    // Non-Brazilian marker
    const nonBrazilIndex = markerIndex - brazilianLocations.length;
    if (nonBrazilIndex >= 0 && nonBrazilIndex < nonBrazilianLocations.length) {
      const location = nonBrazilianLocations[nonBrazilIndex];
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location.lat, location.lng),
        map: mapRef.value.map,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
          scaledSize: new window.google.maps.Size(50, 50)
        },
        animation: window.google.maps.Animation.BOUNCE
      });
      
      if (!window.bounceMarkers) window.bounceMarkers = {};
      window.bounceMarkers[markerIndex] = marker;
    }
  }
};

// Function to stop bounce animation
const stopBounceAnimation = (markerIndex) => {
  if (window.bounceMarkers && window.bounceMarkers[markerIndex]) {
    window.bounceMarkers[markerIndex].setMap(null);
    delete window.bounceMarkers[markerIndex];
  }
};

// Cleanup function to remove all bounce markers
const cleanupBounceMarkers = () => {
  if (window.bounceMarkers) {
    Object.values(window.bounceMarkers).forEach(marker => {
      if (marker && marker.setMap) {
        marker.setMap(null);
      }
    });
    window.bounceMarkers = {};
  }
};

// Cleanup on component unmount
onUnmounted(() => {
  cleanupBounceMarkers();
});

// Helper function to get location by country and city index
const getLocationByCountryAndCity = (countryIndex, cityIndex) => {
  if (countryIndex === 0) {
    // Brazil cities
    return brazilianLocations[cityIndex];
  } else {
    // Non-Brazilian cities - need to map to the correct index
    const nonBrazilIndex = getNonBrazilIndex(countryIndex, cityIndex);
    return nonBrazilianLocations[nonBrazilIndex];
  }
};

// Helper function to get the correct non-Brazil index
const getNonBrazilIndex = (countryIndex, cityIndex) => {
  // Map country index to the correct non-Brazil location index
  const countryToLocationMap = {
    1: cityIndex, // Portugal (Lisbon=0, Porto=1)
    2: cityIndex + 2, // Uruguay (Punta del Este) - offset by 2 because Portugal now has 2 cities
    3: cityIndex + 3, // UK (London) - offset by 3
    4: cityIndex + 4, // Netherlands (Amsterdam) - offset by 4
    5: cityIndex + 5, // USA (San Francisco=0, Las Vegas=1, Los Angeles=2) - offset by 5
    6: cityIndex + 8, // France (Paris) - offset by 8 because USA now has 3 cities
    7: cityIndex + 9  // Germany (Berlin) - offset by 9
  };
  
  return countryToLocationMap[countryIndex] || 0;
};
</script>

<style scoped>
/* Clean and simple styles */
.city-card-active {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}
</style>


