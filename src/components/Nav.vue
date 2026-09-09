<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const route = useRoute();
const path = computed(() => route.path);
const isMobileMenuOpen = ref(false);

const links = [
  { to: '/', label: 'Home', icon: 'home', match: (p) => p === '/' || p === '/home' },
  { to: '/projects', label: 'Projects', icon: 'work', match: (p) => p === '/projects' },
  { to: '/books', label: 'Books', icon: 'menu_book', match: (p) => p === '/books' },
  { to: '/maps', label: 'Maps', icon: 'public', match: (p) => p === '/maps' },
  { to: '/restaurants', label: 'Restaurants', icon: 'restaurant', match: (p) => p === '/restaurants' },
  { to: '/contact', label: 'Contact', icon: 'mail', match: (p) => p === '/contact' }
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <button
    type="button"
    @click="toggleMobileMenu"
    class="lg:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center rounded-xl bg-ink text-paper p-2.5 shadow-lg"
    :aria-expanded="isMobileMenuOpen"
    aria-label="Toggle navigation"
  >
    <span class="material-icons text-[22px]">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
  </button>

  <div
    v-if="isMobileMenuOpen"
    class="lg:hidden fixed inset-0 z-40 bg-ink/50 backdrop-blur-[2px]"
    @click="closeMobileMenu"
  />

  <nav
    id="nav"
    class="fixed top-0 left-0 z-50 flex h-full w-[17.5rem] flex-col border-r border-white/10 bg-ink text-paper transform transition-transform duration-300 ease-out lg:translate-x-0"
    :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="relative overflow-hidden border-b border-white/10 px-5 py-6">
      <div class="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
      <router-link to="/" class="relative flex items-center gap-3 group" @click="closeMobileMenu">
        <img
          class="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40 group-hover:ring-accent transition"
          src="../assets/everton-portrait.jpg"
          alt="Everton Buzzi"
        />
        <div>
          <p class="font-display text-lg leading-tight text-white group-hover:text-accent-soft transition">Everton Buzzi</p>
          <p class="text-xs text-mist/80">Frontend · Lisbon</p>
        </div>
      </router-link>
    </div>

    <div class="flex-1 overflow-y-auto px-3 py-5">
      <p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist/50">Navigate</p>
      <div class="space-y-1">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition"
          :class="
            link.match(path)
              ? 'bg-accent text-white shadow-[0_10px_24px_-12px_rgba(15,118,110,0.9)]'
              : 'text-mist/85 hover:bg-white/5 hover:text-white'
          "
          @click="closeMobileMenu"
        >
          <span class="material-icons text-[20px]">{{ link.icon }}</span>
          <span>{{ link.label }}</span>
        </router-link>
      </div>
    </div>

    <div class="border-t border-white/10 px-5 py-4">
      <div class="flex gap-3 text-mist/70">
        <a
          href="https://www.linkedin.com/in/evertonbuzzi"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent-soft transition"
          aria-label="LinkedIn"
        >
          <span class="material-icons text-[20px]">work</span>
        </a>
        <a
          href="https://github.com/KicKerBNU"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent-soft transition"
          aria-label="GitHub"
        >
          <span class="material-icons text-[20px]">code</span>
        </a>
      </div>
      <p class="mt-3 text-[11px] text-mist/45">© {{ new Date().getFullYear() }} Everton Buzzi</p>
    </div>
  </nav>
</template>
