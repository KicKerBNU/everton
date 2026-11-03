<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const route = useRoute();
const path = computed(() => route.path);
const isMobileMenuOpen = ref(false);

const links = [
  { to: '/', label: 'Home', code: '00', icon: 'home', match: (p) => p === '/' || p === '/home' },
  { to: '/projects', label: 'Projects', code: '01', icon: 'terminal', match: (p) => p === '/projects' },
  { to: '/books', label: 'Books', code: '02', icon: 'menu_book', match: (p) => p === '/books' },
  { to: '/maps', label: 'Maps', code: '03', icon: 'radar', match: (p) => p === '/maps' },
  { to: '/restaurants', label: 'Restaurants', code: '04', icon: 'restaurant', match: (p) => p === '/restaurants' },
  { to: '/contact', label: 'Contact', code: '05', icon: 'alternate_email', match: (p) => p === '/contact' }
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
    class="lg:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center border border-accent bg-paper-elevated p-2.5 text-accent neon-border"
    :aria-expanded="isMobileMenuOpen"
    aria-label="Toggle navigation"
  >
    <span class="material-icons text-[22px]">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
  </button>

  <div
    v-if="isMobileMenuOpen"
    class="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-[2px]"
    @click="closeMobileMenu"
  />

  <nav
    id="nav"
    class="fixed top-0 left-0 z-50 flex h-full w-[17.5rem] flex-col border-r border-line bg-[#060a12]/95 text-ink backdrop-blur-md transform transition-transform duration-300 ease-out lg:translate-x-0"
    :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="relative overflow-hidden border-b border-line px-5 py-6">
      <div class="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
      <div class="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-magenta/20 blur-2xl" />
      <router-link to="/" class="relative flex items-center gap-3 group" @click="closeMobileMenu">
        <div class="relative">
          <img
            class="h-12 w-12 object-cover neon-border"
            style="clip-path: polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)"
            src="../assets/everton-portrait.jpg"
            alt="Everton Buzzi"
          />
          <span class="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-matrix shadow-[0_0_10px_#39ff14] animate-[pulseGlow_1.6s_ease_infinite]" />
        </div>
        <div>
          <p class="font-display text-sm leading-tight text-accent group-hover:text-white transition">
            Everton Buzzi
          </p>
          <p class="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Frontend // Lisbon</p>
        </div>
      </router-link>
      <p class="mt-4 font-mono text-[10px] tracking-[0.22em] text-matrix/80">STATUS: ONLINE</p>
    </div>

    <div class="flex-1 overflow-y-auto px-3 py-5">
      <p class="mb-3 px-3 font-mono text-[10px] tracking-[0.28em] text-muted">NAV.TREE</p>
      <div class="space-y-1">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="group flex items-center gap-3 border border-transparent px-3 py-3 text-sm font-medium transition"
          :class="
            link.match(path)
              ? 'border-accent/50 bg-accent/10 text-accent shadow-[0_0_18px_rgba(0,240,255,0.2)]'
              : 'text-muted hover:border-line hover:bg-white/5 hover:text-ink'
          "
          @click="closeMobileMenu"
        >
          <span class="font-mono text-[10px] text-accent/60 group-hover:text-accent">{{ link.code }}</span>
          <span class="material-icons text-[18px]">{{ link.icon }}</span>
          <span class="font-mono uppercase tracking-[0.12em] text-xs">{{ link.label }}</span>
        </router-link>
      </div>
    </div>

    <div class="border-t border-line px-5 py-4">
      <div class="flex gap-4 font-mono text-[11px] text-muted">
        <a
          href="https://www.linkedin.com/in/evertonbuzzi"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent transition"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/KicKerBNU"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-matrix transition"
        >
          GITHUB
        </a>
      </div>
      <p class="mt-3 font-mono text-[10px] tracking-[0.16em] text-muted/70">
        © {{ new Date().getFullYear() }} // NODE.LISBON
      </p>
    </div>
  </nav>
</template>
