<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Books I've Read</h1>
          <p class="text-lg text-gray-600">A collection of books that have shaped my thinking and expanded my knowledge</p>
        </div>
      </div>
    </div>

    <!-- Books Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="book in books" 
          :key="book.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <!-- Book Cover -->
          <div class="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
            <img 
              v-if="book.pictureUrl" 
              :src="book.pictureUrl" 
              :alt="`Cover of ${book.name}`"
              class="w-full h-full object-cover"
            />
            <div v-else class="text-center">
              <span class="material-icons text-6xl text-gray-400 mb-2">book</span>
              <p class="text-sm text-gray-500">Cover Image</p>
            </div>
          </div>
          
          <!-- Book Details -->
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{{ book.name }}</h3>
            <p class="text-sm text-gray-600 mb-3">by {{ book.author }}</p>
            
            <!-- Reading Status -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span 
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClass(book.finished)"
                >
                  <span class="w-2 h-2 rounded-full mr-1.5" :class="getStatusDotClass(book.finished)"></span>
                  {{ getStatusText(book.finished) }}
                </span>
              </div>
              
              <!-- Finish Date -->
              <div v-if="book.finished !== 'Reading'" class="text-xs text-gray-500">
                {{ formatDate(book.finished) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Reading Stats -->
      <div class="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Reading Statistics</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ totalBooks }}</div>
            <div class="text-sm text-gray-600">Total Books</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">{{ finishedBooks }}</div>
            <div class="text-sm text-gray-600">Finished</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">{{ currentlyReading }}</div>
            <div class="text-sm text-gray-600">Currently Reading</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Books data
const books = [
  {
    id: 1,
    name: "Nada mais será como antes",
    author: "Miguel Nicolelis",
    finished: "Reading",
    pictureUrl: "book-nadaseracomoantes.jpg"
  },
  {
    id: 2,
    name: "Starry Messenger",
    author: "Neil DeGrasse Tyson",
    finished: "06/28/2025",
    pictureUrl: "book-starrymessenger.jpg"
  },
  {
    id: 3,
    name: "The Diary of Anne Frank (The Definitive Edition)",
    author: "Anne Frank",
    finished: "05/22/2025",
    pictureUrl: "book-diaryofemelyfrank.jpg"
  },
  {
    id: 4,
    name: "The Richest Man of Babylon",
    author: "George S. Clason",
    finished: "10/11/2024",
    pictureUrl: "book-richestmaninbabylon.png"
  },
  {
    id: 5,
    name: "The $100 Startup",
    author: "Chris Guillebeau",
    finished: "02/11/2024",
    pictureUrl: "book-the$100startup.jpg"
  },
  {
    id: 6,
    name: "1984",
    author: "George Orwell",
    finished: "09/21/2024",
    pictureUrl: "book-1984.jpg"
  },
  {
    id: 7,
    name: "Children of Blood and Bone",
    author: "Tomi Adeyemi",
    finished: "06/12/2024",
    pictureUrl: "book-childrenofbloodandbone.jpg"
  },
  {
    id: 8,
    name: "The Last Restaurant in Paris (Unabridged)",
    author: "Lily Graham",
    finished: "03/23/2024",
    pictureUrl: "book-thelastrestaurantinparis.jpg"
  },
  {
    id: 9,
    name: "The Man Who Solved the Market",
    author: "Gregory Zuckerman",
    finished: "02/16/2024",
    pictureUrl: "book-themanwhosolvedthemarket.jpg"
  },
  {
    id: 10,
    name: "Principles",
    author: "Ray Dalio",
    finished: "01/10/2024",
    pictureUrl: "book-principles.jpg"
  }
];

// Computed properties for statistics
const totalBooks = computed(() => books.length);
const finishedBooks = computed(() => books.filter(book => book.finished !== 'Reading').length);
const currentlyReading = computed(() => books.filter(book => book.finished === 'Reading').length);

// Helper functions
const getStatusClass = (status) => {
  if (status === 'Reading') {
    return 'bg-orange-100 text-orange-800';
  }
  return 'bg-green-100 text-green-800';
};

const getStatusDotClass = (status) => {
  if (status === 'Reading') {
    return 'bg-orange-400';
  }
  return 'bg-green-400';
};

const getStatusText = (status) => {
  if (status === 'Reading') {
    return 'Currently Reading';
  }
  return 'Finished';
};

const formatDate = (dateString) => {
  if (dateString === 'Reading') return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 