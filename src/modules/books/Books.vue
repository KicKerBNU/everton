<template>
  <div class="page-shell">
    <div class="text-center mb-10">
      <p class="section-kicker mb-3">// MEMORY.BANK</p>
      <h1 class="font-display text-3xl lg:text-5xl text-ink mb-3">Books I've Read</h1>
      <p class="font-mono text-sm text-muted max-w-2xl mx-auto">
        Titles that shaped how I think about investing, product, systems, and life.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      <div
        v-for="book in sortedBooks"
        :key="book.id"
          class="surface-card overflow-hidden flex flex-col h-full transition hover:shadow-[0_0_24px_rgba(0,240,255,0.18)]"
      >
        <div class="flex w-full items-center justify-center bg-gradient-to-br from-mist/50 to-accent-soft/40 flex-shrink-0 border-b border-line/60 py-6">
          <img
            v-if="book.pictureUrl"
            :src="bookCoverUrl(book.pictureUrl)"
            :alt="`Cover of ${book.name}`"
            class="h-80 w-[286px] shrink-0 drop-shadow-md"
            width="286"
            height="320"
            loading="lazy"
          />
          <div v-else class="flex h-80 w-[286px] shrink-0 flex-col items-center justify-center text-center">
            <span class="material-icons text-6xl text-muted mb-2">book</span>
            <p class="text-sm text-muted">Cover Image</p>
          </div>
        </div>

        <div class="p-5 sm:p-6 flex flex-col flex-1 min-h-0">
          <div class="flex-grow">
            <h3 class="font-display text-lg text-ink mb-2 line-clamp-2 min-h-[3.5rem]">{{ book.name }}</h3>
            <p class="text-sm text-muted mb-4">by {{ book.author }}</p>
          </div>

          <div class="mt-auto">
            <div class="flex items-center justify-between">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="getStatusClass(book.finished)"
              >
                <span class="w-2 h-2 rounded-full mr-1.5" :class="getStatusDotClass(book.finished)"></span>
                {{ getStatusText(book.finished) }}
              </span>
              <div v-if="book.finished !== 'Reading'" class="text-xs text-muted">
                {{ formatDate(book.finished) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 surface-card p-6 lg:p-8">
      <h2 class="font-display text-xl text-ink mb-6">Reading Statistics</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="font-display text-3xl text-accent">{{ totalBooks }}</div>
          <div class="text-sm text-muted">Total Books</div>
        </div>
        <div class="text-center">
          <div class="font-display text-3xl text-emerald-700">{{ finishedBooks }}</div>
          <div class="text-sm text-muted">Finished</div>
        </div>
        <div class="text-center">
          <div class="font-display text-3xl text-amber-700">{{ currentlyReading }}</div>
          <div class="text-sm text-muted">Currently Reading</div>
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
    finished: "08/20/2025",
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
  },
  {
    id: 11,
    name: "Javier Milei Viva a liberdade, carajo",
    author: "Javier Milei",
    finished: "01/10/2025",
    pictureUrl: "book-javiermilei.jpg"
  },
  {
    id: 12,
    name: "The Life-Changing Magic of Tidying Up",
    author: "Marie Kondo",
    finished: "12/20/2025",
    pictureUrl: "book-mariekondo.jpg"
  },
  {
    id: 13,
    name: "Six Lessons",
    author: "Ludwig von Mises",
    finished: "03/10/2026",
    pictureUrl: "book-six.jpg"
  },
  {
    id: 14,
    name: "Meditations",
    author: "Marcus Aurelius",
    finished: "01/01/2026",
    pictureUrl: "book-meditations.jpeg"
  },
  {
    id: 15,
    name: "The Intelligent Investor, 3rd Ed",
    author: "Benjamin Graham, Jason Zweig",
    finished: "08/03/2026",
    pictureUrl: "book-intelligentinvestor.jpg"
  },
  {
    id: 16,
    name: "Thou Shall Prosper",
    author: "Daniel Lapin",
    finished: "Reading",
    pictureUrl: "book-thoushallprosper.jpg"
  }
];

const bookCoverUrl = (filename) => `/${filename}`;

// Computed properties for statistics
const totalBooks = computed(() => books.length);
const finishedBooks = computed(() => books.filter(book => book.finished !== 'Reading').length);
const currentlyReading = computed(() => books.filter(book => book.finished === 'Reading').length);

// Sort books to show currently reading first
const sortedBooks = computed(() => {
  return [...books].sort((a, b) => {
    // If a is currently reading and b is not, a comes first
    if (a.finished === 'Reading' && b.finished !== 'Reading') return -1;
    // If b is currently reading and a is not, b comes first
    if (b.finished === 'Reading' && a.finished !== 'Reading') return 1;
    // If both are reading or both are finished, maintain original order
    return 0;
  });
});

// Helper functions
const getStatusClass = (status) => {
  if (status === 'Reading') {
    return 'border border-magenta/50 bg-magenta/10 text-magenta';
  }
  return 'border border-accent/40 bg-accent/10 text-accent';
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