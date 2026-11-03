<template>
  <div id="home">
    <!-- Hero -->
    <section class="relative grid min-h-[100svh] overflow-hidden lg:grid-cols-2 lg:min-h-[92vh]">
      <div class="relative order-1 h-[52vh] min-h-[300px] overflow-hidden lg:order-2 lg:h-auto lg:min-h-[92vh]">
        <img
          class="absolute inset-0 h-full w-full object-cover object-[center_30%] lg:object-[center_28%] contrast-125 saturate-150"
          src="../../assets/everton-hero.jpg"
          alt="Everton Buzzi"
        />
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.15),rgba(5,7,13,0.75)),linear-gradient(90deg,rgba(5,7,13,0.85),transparent_55%)] mix-blend-multiply" />
        <div class="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_30%_20%,rgba(0,240,255,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,43,214,0.25),transparent_35%)]" />
        <div class="scanlines absolute inset-0 opacity-50" />
        <div class="absolute left-4 top-4 font-mono text-[10px] tracking-[0.25em] text-accent neon-border bg-paper/70 px-2 py-1">
          CAM_01 // LIVE
        </div>
      </div>

      <div class="relative order-2 flex flex-col justify-center page-shell py-10 lg:order-1 lg:py-20">
        <p class="section-kicker mb-4 animate-[fadeUp_0.7s_ease_both]">
          <span class="text-matrix">root@lisbon</span> :: portfolio.exe
        </p>
        <h1
          class="font-display glitch-text text-4xl sm:text-5xl lg:text-6xl text-accent max-w-3xl leading-[1.05] animate-[fadeUp_0.8s_ease_0.05s_both]"
          data-text="Everton Buzzi"
        >
          Everton Buzzi
        </h1>
        <p class="mt-5 max-w-xl font-mono text-sm sm:text-base text-muted leading-relaxed animate-[fadeUp_0.85s_ease_0.1s_both]">
          &gt; Frontend operator building Vue systems, design languages, and AI-driven product interfaces.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 animate-[fadeUp_0.9s_ease_0.15s_both]">
          <router-link to="/projects" class="cyber-btn">
            Open projects
            <span class="material-icons text-sm">arrow_forward</span>
          </router-link>
          <router-link to="/contact" class="cyber-btn-ghost">
            Establish link
          </router-link>
        </div>
        <p class="mt-8 font-mono text-[11px] tracking-[0.2em] text-muted/80 uppercase">
          Encryption: AES-PORTFOLIO · Node: PT-LIS
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="page-shell">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-end">
        <div>
          <p class="section-kicker mb-3">// ABOUT</p>
          <h2 class="font-display text-2xl lg:text-4xl text-ink max-w-2xl">
            7+ years shipping interfaces for HR SaaS, ERP, and consumer products.
          </h2>
        </div>
        <p class="font-mono text-sm text-muted leading-relaxed">
          Currently at Neobrain on AI-powered talent intelligence. Previously Masterlink and Inventti.
          Side projects: BeerCSS, MoneyPlann, winflation.eu, Saúde Pilates.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="surface-card p-5">
          <p class="font-display text-3xl text-accent">{{ stat.value }}</p>
          <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="page-shell pt-4">
      <div class="mb-10 text-center">
        <p class="section-kicker mb-3">// CAREER LOG</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Experience</h2>
      </div>

      <div class="mx-auto max-w-4xl space-y-5">
        <article
          v-for="job in experience"
          :key="job.id"
          class="surface-card p-5 sm:p-6 transition hover:shadow-[0_0_30px_rgba(0,240,255,0.18)]"
        >
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
            <img
              :src="job.logo"
              :alt="job.company"
              class="h-12 w-12 object-cover neon-border"
              style="clip-path: polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)"
            />
            <div class="flex-1">
              <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 class="font-display text-base text-ink">{{ job.role }}</h3>
                  <p class="font-mono text-accent">{{ job.company }}</p>
                  <p class="text-sm text-muted">{{ job.summary }} · {{ job.location }}</p>
                </div>
                <span class="self-start border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                  {{ job.period }}
                </span>
              </div>
              <ul class="mt-4 space-y-2">
                <li v-for="(item, i) in job.highlights" :key="i" class="flex gap-3 font-mono text-sm text-muted">
                  <span class="text-matrix shrink-0">»</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Certifications -->
    <section class="page-shell">
      <div class="mb-10 text-center">
        <p class="section-kicker mb-3">// CLEARANCE</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Certifications</h2>
        <p class="mt-3 font-mono text-sm text-muted max-w-2xl mx-auto">
          AI product work, Anthropic Claude, accessibility, and frontend fundamentals.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="cert in certifications"
          :key="cert.id"
          :href="cert.url || cert.image"
          target="_blank"
          rel="noopener noreferrer"
          class="group surface-card overflow-hidden transition hover:shadow-[0_0_28px_rgba(255,43,214,0.2)]"
        >
          <div class="aspect-[4/3] overflow-hidden bg-mist/40 relative">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] group-hover:saturate-150"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-80" />
          </div>
          <div class="p-4">
            <p class="font-mono text-[10px] tracking-[0.18em] uppercase text-magenta">
              {{ cert.issuer }} · {{ cert.date }}
            </p>
            <h3 class="mt-1 font-display text-sm text-ink">{{ cert.title }}</h3>
            <p class="mt-2 text-sm text-muted leading-relaxed">{{ cert.description }}</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Stack -->
    <section class="page-shell pb-16">
      <div class="mb-10 text-center">
        <p class="section-kicker mb-3">// TOOLKIT</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Technology Stack</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(item, i) in stack" :key="i" class="group relative overflow-hidden surface-card">
          <img
            class="h-48 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:contrast-125"
            :src="item.path"
            :alt="item.alt"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-paper via-paper/40 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="font-display text-sm text-accent">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import stack from './stack';
import { experience } from './data/experience.js';
import { certifications } from './data/certifications.js';

const stats = [
  { value: '7+', label: 'Years online' },
  { value: '4', label: 'Products shipped' },
  { value: '1.4k', label: 'BeerCSS stars' },
  { value: 'AI', label: 'LLM / prompts' }
];
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
