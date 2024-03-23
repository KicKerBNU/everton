<template>
  <h3>Visited Countries Map</h3>
  <GoogleMap
    id="map"
    :api-key="googleApiKey"
    style="width: 100%; height: 700px"
    :center="center"
    :zoom="2.5"
  >
    <MarkerCluster>
      <Marker
        v-for="(location, i) in locations"
        :key="i"
        :options="{ position: location }"
      />
    </MarkerCluster>
  </GoogleMap>
</template>
<script setup>
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map';
import { ref } from 'vue';

const googleApiKey = ref(import.meta.env.VITE_GOOGLE_API_KEY);

const center = { lat: 38.73306655883789, lng: -9.144887924194336 };
const locations = [
  { lat: 38.73306655883789, lng: -9.144887924194336 },
  { lat: -26.853251450828452, lng: -49.10872996947153 },
  { lat: -34.95600201514804, lng: -54.93948923668498 },
  { lat: 51.50758960843541, lng: -0.1180870493591784 },
  { lat: 52.37937372626596, lng: 4.900524962511013 },
  { lat: 37.80653472210163, lng: -122.42043458546206 }
];
</script>

<style lang="scss" scoped>
html,
body {
  border-radius: 16px;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
