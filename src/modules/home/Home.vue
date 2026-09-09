<template>
  <div id="home">
    <!-- Hero: brand-first, portrait framed so the head stays visible -->
    <section class="relative grid min-h-[100svh] overflow-hidden bg-ink lg:grid-cols-2 lg:min-h-[92vh]">
      <div class="relative order-1 h-[56vh] min-h-[320px] overflow-hidden lg:order-2 lg:h-auto lg:min-h-[92vh]">
        <img
          class="absolute inset-0 h-full w-full object-cover object-[center_30%] lg:object-[center_28%]"
          src="../../assets/everton-hero.jpg"
          alt="Everton Buzzi"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/40" />
      </div>

      <div class="relative order-2 flex flex-col justify-center page-shell py-10 lg:order-1 lg:py-20">
        <p class="section-kicker text-accent-soft mb-4 animate-[fadeUp_0.7s_ease_both]">Lisbon · EU Citizen</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl text-white max-w-3xl leading-[0.95] animate-[fadeUp_0.8s_ease_0.05s_both]">
          Everton Buzzi
        </h1>
        <p class="mt-5 max-w-xl text-base sm:text-lg text-mist/90 leading-relaxed animate-[fadeUp_0.85s_ease_0.1s_both]">
          Frontend developer building scalable Vue products, design systems, and AI-driven experiences.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 animate-[fadeUp_0.9s_ease_0.15s_both]">
          <router-link
            to="/projects"
            class="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-deep transition"
          >
            View projects
            <span class="material-icons ml-2 text-base">arrow_forward</span>
          </router-link>
          <router-link
            to="/contact"
            class="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Get in touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Intro strip -->
    <section class="page-shell">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-end">
        <div>
          <p class="section-kicker mb-3">About</p>
          <h2 class="font-display text-3xl lg:text-4xl text-ink max-w-2xl">
            7+ years shipping interfaces for HR SaaS, ERP, and consumer products.
          </h2>
        </div>
        <p class="text-muted leading-relaxed">
          Currently at Neobrain, working on AI-powered talent intelligence. Previously Masterlink and Inventti.
          Side projects include BeerCSS, MoneyPlann, winflation.eu, and Saúde Pilates.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="stat in stats" :key="stat.label" class="surface-card rounded-2xl p-5">
          <p class="font-display text-3xl text-ink">{{ stat.value }}</p>
          <p class="mt-1 text-sm text-muted">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="page-shell pt-4">
      <div class="mb-10 text-center">
        <p class="section-kicker mb-3">Career</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Experience</h2>
      </div>

      <div class="mx-auto max-w-4xl space-y-5">
        <article
          v-for="job in experience"
          :key="job.id"
          class="surface-card rounded-2xl p-5 sm:p-6 transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-28px_rgba(16,42,42,0.55)]"
        >
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
            <img :src="job.logo" :alt="job.company" class="h-12 w-12 rounded-full object-cover ring-4 ring-mist/60" />
            <div class="flex-1">
              <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-ink">{{ job.role }}</h3>
                  <p class="text-accent font-medium">{{ job.company }}</p>
                  <p class="text-sm text-muted">{{ job.summary }} · {{ job.location }}</p>
                </div>
                <span class="self-start rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
                  {{ job.period }}
                </span>
              </div>
              <ul class="mt-4 space-y-2">
                <li v-for="(item, i) in job.highlights" :key="i" class="flex gap-3 text-sm text-muted">
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
        <p class="section-kicker mb-3">Learning</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Certifications</h2>
        <p class="mt-3 text-muted max-w-2xl mx-auto">
          Recent credentials in AI product work, Anthropic Claude, accessibility, and frontend fundamentals.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="cert in certifications"
          :key="cert.id"
          :href="cert.url || cert.image"
          target="_blank"
          rel="noopener noreferrer"
          class="group surface-card overflow-hidden rounded-2xl transition hover:-translate-y-1"
        >
          <div class="aspect-[4/3] overflow-hidden bg-mist/40">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div class="p-4">
            <p class="text-xs font-semibold uppercase tracking-wide text-accent">{{ cert.issuer }} · {{ cert.date }}</p>
            <h3 class="mt-1 font-semibold text-ink">{{ cert.title }}</h3>
            <p class="mt-2 text-sm text-muted leading-relaxed">{{ cert.description }}</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Stack -->
    <section class="page-shell pb-16">
      <div class="mb-10 text-center">
        <p class="section-kicker mb-3">Toolkit</p>
        <h2 class="font-display text-3xl lg:text-4xl text-ink">Technology Stack</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(item, i) in stack"
          :key="i"
          class="group relative overflow-hidden rounded-2xl surface-card"
        >
          <img
            class="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            :src="item.path"
            :alt="item.alt"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-5">
            <h3 class="text-lg font-semibold text-white">{{ item.name }}</h3>
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
  { value: '7+', label: 'Years in tech' },
  { value: '4', label: 'Products shipped' },
  { value: '1.4k', label: 'BeerCSS GitHub stars' },
  { value: 'AI', label: 'LLM & prompt work' }
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
