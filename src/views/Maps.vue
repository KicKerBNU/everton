<template lang="pug">
#maps.responsive
  .large-space
  .center
    h3 Visited Countries Map
    p.medium-space Below are some countries I've visited marked on the map.
  
  .card.elevate.round(v-if="!mapError")
    GoogleMap#map(
      :api-key="googleApiKey"
      style="width: 100%; height: 600px; border-radius: var(--round)"
      :center="center"
      :zoom="2.5"
      @ready="onMapReady"
      @error="onMapError"
    )
      MarkerCluster
        Marker(
          v-for="(location, i) in locations"
          :key="i"
          :options="{ position: location }"
        )
  
  .card.elevate.round.error(v-else)
    .medium-padding
      h5 Error Loading Map
      p {{ mapError }}
      p.medium-space API Key: {{ googleApiKey }}
      button.primary(@click="reloadPage") Reload Page
  
  .large-space
  .grid
    .s12.m6.l4(v-for="(location, i) in locationDetails" :key="i")
      article.secondary-container.round.small-elevate
        .medium-padding
          h5 {{ location.name }}
          p {{ location.description }}
          .small-space
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

<style lang="scss" scoped>
#map {
  border-radius: var(--round);
}

.error {
  background-color: #ffebee;
}
</style>
