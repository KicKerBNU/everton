<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">My Restaurant Collection</h1>
          <p class="text-lg text-gray-600">Discovering culinary experiences around the world</p>
        </div>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap gap-4 items-center">
          <!-- Rating Filter -->
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-gray-700">Rating:</label>
            <select 
              v-model="filters.rating" 
              class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
            </select>
          </div>

          <!-- Country Filter -->
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-gray-700">Country:</label>
            <select 
              v-model="filters.country" 
              class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Countries</option>
              <option v-for="country in uniqueCountries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
          </div>

          <!-- Cuisine Filter -->
          <div class="flex items-center space-x-2">
            <label class="text-sm font-medium text-gray-700">Cuisine:</label>
            <select 
              v-model="filters.cuisine" 
              class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Cuisines</option>
              <option v-for="cuisine in uniqueCuisines" :key="cuisine" :value="cuisine">
                {{ cuisine }}
              </option>
            </select>
          </div>

          <!-- Clear Filters -->
          <button 
            @click="clearFilters"
            class="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          >
            Clear Filters
          </button>

          <!-- Results Count -->
          <div class="ml-auto text-sm text-gray-500">
            {{ filteredRestaurants.length }} restaurants found
          </div>
        </div>
      </div>
    </div>

    <!-- Restaurants List -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- No Results Message -->
      <div v-if="filteredRestaurants.length === 0" class="text-center py-12">
        <span class="material-icons text-6xl text-gray-300 mb-4">restaurant</span>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No restaurants found</h3>
        <p class="text-gray-500">Try adjusting your filters to see more results.</p>
      </div>

      <!-- Restaurant Items -->
      <div v-else class="space-y-6">
        <div 
          v-for="restaurant in filteredRestaurants" 
          :key="restaurant.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div class="flex flex-col lg:flex-row">
            <!-- Restaurant Image -->
            <div class="lg:w-80 lg:h-64 h-48 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
              <img 
                v-if="restaurant.imageUrl" 
                :src="restaurant.imageUrl" 
                :alt="restaurant.name"
                class="w-full h-full object-cover"
              />
              <div v-else class="text-center">
                <span class="material-icons text-6xl text-gray-400 mb-2">restaurant</span>
                <p class="text-sm text-gray-500">Restaurant Image</p>
              </div>
            </div>

            <!-- Restaurant Details -->
            <div class="flex-1 p-6">
              <div class="flex flex-col h-full">
                <!-- Header -->
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ restaurant.name }}</h3>
                    <div class="flex items-center space-x-4 text-sm text-gray-600">
                      <span class="flex items-center">
                        <span class="material-icons text-yellow-400 mr-1">location_on</span>
                        {{ restaurant.city }}, {{ restaurant.country }}
                      </span>
                      <span class="flex items-center">
                        <span class="material-icons text-orange-400 mr-1">restaurant</span>
                        {{ restaurant.cuisine }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Rating -->
                  <div class="flex items-center space-x-1">
                    <div class="flex">
                      <span 
                        v-for="star in 5" 
                        :key="star"
                        class="material-icons text-lg"
                        :class="star <= restaurant.rating ? 'text-yellow-400' : 'text-gray-300'"
                      >
                        star
                      </span>
                    </div>
                    <span class="text-sm font-medium text-gray-700 ml-1">({{ restaurant.rating }})</span>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-gray-600 mb-4 flex-1">{{ restaurant.description }}</p>

                <!-- Location Section -->
                <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-sm font-medium text-gray-900">Location</h4>
                    <div class="flex space-x-2">
                      <button 
                        @click="copyAddress(restaurant.address, $event)"
                        class="flex items-center px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors cursor-pointer"
                        title="Copy address"
                      >
                        <span class="material-icons text-sm mr-1">content_copy</span>
                        Copy Address
                      </button>
                      <button 
                        @click="toggleRestaurantMap(restaurant.id)"
                        class="flex items-center px-3 py-1 text-xs rounded-md transition-colors cursor-pointer"
                        :class="expandedMaps.has(restaurant.id) ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'"
                        :title="expandedMaps.has(restaurant.id) ? 'Hide map' : 'View on map'"
                      >
                        <span class="material-icons text-sm mr-1">{{ expandedMaps.has(restaurant.id) ? 'close' : 'map' }}</span>
                        {{ expandedMaps.has(restaurant.id) ? 'Hide Map' : 'View on Map' }}
                      </button>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600">{{ restaurant.address }}</p>
                </div>

                <!-- Inline Map Section -->
                <div v-if="expandedMaps.has(restaurant.id)" class="mt-4">
                  <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <GoogleMap
                      :ref="el => mapRefs[restaurant.id] = el"
                      :api-key="googleApiKey"
                      style="width: 100%; height: 300px;"
                      :center="restaurant.coordinates"
                      :zoom="16"
                    >
                      <Marker
                        :options="{
                          position: restaurant.coordinates,
                          title: restaurant.name,
                          icon: {
                            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                            scaledSize: { width: 40, height: 40 }
                          }
                        }"
                      />
                    </GoogleMap>
                  </div>
                </div>

                <!-- Tags and Visit Date -->
                <div class="flex items-center justify-between mt-4">
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in restaurant.tags" 
                      :key="tag"
                      class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  
                  <div class="text-sm text-gray-500">
                    Visited: {{ formatDate(restaurant.visitDate) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Restaurant Statistics</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ totalRestaurants }}</div>
            <div class="text-sm text-gray-600">Total Restaurants</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">{{ averageRating }}</div>
            <div class="text-sm text-gray-600">Average Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600">{{ uniqueCountries.length }}</div>
            <div class="text-sm text-gray-600">Countries Visited</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">{{ uniqueCuisines.length }}</div>
            <div class="text-sm text-gray-600">Cuisine Types</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

// Filters state
const filters = ref({
  rating: '',
  country: '',
  cuisine: ''
});

// Map state
const mapRefs = ref({});
const expandedMaps = ref(new Set());
const googleApiKey = ref(import.meta.env.VITE_GOOGLE_API_KEY);

// Restaurants data
const restaurants = [
  {
    id: 1,
    name: "Taberna Londrina",
    city: "Lisbon",
    country: "Portugal",
    cuisine: "Portuguese",
    rating: 5,
    description: "Taberna Londrina is a Portuguese restaurant that serves traditional 'Francesinha' sandwiches. It's a must-try for anyone visiting Lisbon.",
    visitDate: "2023-04-15",
    tags: ["Francesinha", "Portuguese", "Traditional", "Great Service"],
    imageUrl: '/taberna-londrina.jpg',
    address: "Campo Grande 35B, 1700-087 Lisboa, Portugal",
    coordinates: { lat: 38.750009338804176, lng: -9.15039787445927 }
  },
    {
      id: 2,
      name: "A Provinciana",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Portuguese",
      rating: 5,
      description: "A traditional Portuguese 'Tasca' in the heart of Lisbon run by a family for over 30 years. It's a friendly place with great food and a great atmosphere.",
      visitDate: "2023-03-04",
      tags: ["Tasca", "Portuguese", "Traditional", "Great Service", "Family Run", "Great Value"],
      imageUrl: '/a-provinciana.jpg',
      address: "Tv. do Forno 23, 1150-193 Lisboa",
      coordinates: { lat: 38.71546082451188, lng: -9.14024139790493 }
    },
    
    {
      id: 3,
      name: "Forninho Saloio",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Portuguese",
      rating: 4,
      description: "A Tasca with good food and a great atmosphere. It's a great place to eat and drink. Family friendly place.",
      visitDate: "2024-04-10",
      tags: ["Tasca", "Portuguese", "Traditional", "Great Service", "Family Run", "Great Value", "Great Location", "Family Friendly"],
      imageUrl: '/forninho-saloio.jpg',
      address: "Tv. Parreiras 39, 1150-250 Lisboa",
      coordinates: { lat: 38.72271579236523, lng: -9.144981502857112 }
    },
    {
      id: 4,
      name: "Adega das Gravatas",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Portuguese",
      rating: 4,
      description: "A traditional portuguese restaurant with ties on the roof. It's a great place to eat and drink. Family friendly place.",
      visitDate: "2024-04-23",
      tags: ["Tasca", "Portuguese", "Traditional", "Great Service", "Family Run", "Great Value", "Great Location", "Family Friendly"],
      imageUrl: '/adega-das-gravatas.jpg',
      address: "Tv. Pregoeiro 15, 1600-588 Lisboa",
      coordinates: { lat: 38.76050242225108, lng: -9.187718041527747 }
    },
    {
      id: 5,
      name: "Á Parte",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Portuguese",
      rating: 5,
      description: "Portuguese restaurant looks extremely small from outside, but it's actually a big place with a good options of risotos and other portuguese dishes.",
      visitDate: "2025-05-15",
      tags: ["Portuguese", "Great Service", "Great Value", "Great Location", "Good Options of Risotos"],
      imageUrl: '/a-parte.jpg',
      address: "Av. Defensores de Chaves 14C, 1000-117 Lisboa",
      coordinates: { lat: 38.73368379585174, lng: -9.142918061758474 }
    },
    
    {
      id: 6,
      name: "Il mercato di chiesa",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Italian",
      rating: 4,
      description: "A italian restaurant with a good service and great italian food.",
      visitDate: "2024-08-20",
      tags: ["Italian", "Great Service", "Great Value", "Great Location", "Good Italian Food"],
      imageUrl: '/il-mercato-di-chiesa.jpg',
      address: "Centro Comercial Alvalade, 1700-036 Lisboa",
      coordinates: { lat: 38.75337784221384, lng: -9.144653545183917 }
    },
    {
      id: 7,
      name: "Come Prima",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Italian",
      rating: 4,
      description: "A traditional italian restaurant with a great atmosphere and good italian options. Reservations are required.",
      visitDate: "2025-05-15",
      tags: ["Italian", "Great Service", "Great Value", "Great Location", "Reservations Required"],
      imageUrl: '/come-prima.jpg',
      address: "R. do Olival 258, 1200-744 Lisboa",
      coordinates: { lat: 38.70500797710321, lng: -9.1663135321044 }
    },
    {
      id: 8,
      name: "Ribalta",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Italian",
      rating: 4,
      description: "A italian restaurant famous for its pizza and pasta. Its located on the last floor of El Corte Ingles.",
      visitDate: "2025-05-15",
      tags: ["Italian", "Great Service", "Great Value", "Great Location", "Pizza and Pasta"],
      imageUrl: '/ribalta.jpg',
      address: "Av. António Augusto de Aguiar 31 Piso 7, 1069-413 Lisboa",
      coordinates: { lat: 38.73353520960509, lng: -9.153588274020635 }
    },
    {
      id: 9,
      name: "Balcão Henrique Sá Pessoa",
      city: "Lisbon",
      country: "Portugal",
      cuisine: "Portuguese",
      rating: 4,
      description: "Portuese restaurant with a Chef in the kitchen, modern portuguese food with a especial taste.",
      visitDate: "2025-06-23",
      tags: ["Portuguese", "Great Service", "Moderate Value", "Great Location", "Esplanada"],
      imageUrl: '/balcao-henrique-sa.jpg',
      address: "Av. António Augusto de Aguiar 31 Piso 7, 1069-413 Lisboa",
      coordinates: { lat: 38.73353520960509, lng: -9.153588274020635 }
    }
    
];

// Computed properties
const filteredRestaurants = computed(() => {
  return restaurants.filter(restaurant => {
    const ratingMatch = !filters.value.rating || restaurant.rating >= parseInt(filters.value.rating);
    const countryMatch = !filters.value.country || restaurant.country === filters.value.country;
    const cuisineMatch = !filters.value.cuisine || restaurant.cuisine === filters.value.cuisine;
    
    return ratingMatch && countryMatch && cuisineMatch;
  });
});

const uniqueCountries = computed(() => {
  return [...new Set(restaurants.map(r => r.country))].sort();
});

const uniqueCuisines = computed(() => {
  return [...new Set(restaurants.map(r => r.cuisine))].sort();
});

const totalRestaurants = computed(() => restaurants.length);

const averageRating = computed(() => {
  const total = restaurants.reduce((sum, r) => sum + r.rating, 0);
  return (total / restaurants.length).toFixed(1);
});

// Methods
const clearFilters = () => {
  filters.value = {
    rating: '',
    country: '',
    cuisine: ''
  };
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const copyAddress = async (address, event) => {
  try {
    await navigator.clipboard.writeText(address);
    
    // Change button text to "Copied!" for 3 seconds
    const button = event.target.closest('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="material-icons text-sm mr-1">check</span>Copied!';
    button.classList.remove('bg-blue-100', 'text-blue-700', 'hover:bg-blue-200');
    button.classList.add('bg-green-100', 'text-green-700', 'hover:bg-green-200');
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('bg-green-100', 'text-green-700', 'hover:bg-green-200');
      button.classList.add('bg-blue-100', 'text-blue-700', 'hover:bg-blue-200');
    }, 3000);
    
  } catch (err) {
    console.error('Failed to copy address: ', err);
  }
};

const toggleRestaurantMap = (restaurantId) => {
  if (expandedMaps.value.has(restaurantId)) {
    expandedMaps.value.delete(restaurantId);
  } else {
    expandedMaps.value.add(restaurantId);
    
    // Wait for map to be ready and then center on the restaurant
    setTimeout(() => {
      const mapRef = mapRefs.value[restaurantId];
      if (mapRef && mapRef.map) {
        const restaurant = restaurants.find(r => r.id === restaurantId);
        if (restaurant) {
          mapRef.map.panTo(restaurant.coordinates);
          mapRef.map.setZoom(16);
        }
      }
    }, 100);
  }
};
</script> 