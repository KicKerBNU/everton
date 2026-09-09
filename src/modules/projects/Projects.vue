<template>
  <div id="projects" class="page-shell">
    <div class="text-center mb-10 lg:mb-14">
      <p class="section-kicker mb-3">Work</p>
      <h2 class="font-display text-3xl lg:text-5xl text-ink mb-4">Projects</h2>
      <p class="text-muted text-base lg:text-lg max-w-2xl mx-auto">
        Products and open source I’ve built or contributed to — from AI finance tools to design systems.
      </p>
    </div>

    <div class="mb-14 lg:mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>

    <div class="mb-14">
      <h3 class="font-display text-2xl lg:text-3xl text-ink text-center mb-8">Technologies & Skills</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="surface-card rounded-2xl p-5 text-center transition hover:-translate-y-0.5"
        >
          <div
            class="mx-auto mb-3 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full"
            :class="skill.bg"
          >
            <span class="material-icons text-2xl lg:text-3xl" :class="skill.color">{{ skill.icon }}</span>
          </div>
          <h4 class="font-semibold text-ink">{{ skill.name }}</h4>
          <p class="text-xs lg:text-sm text-muted mt-1">{{ skill.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-line/70 bg-mist/40 p-6 lg:p-8">
      <h3 class="font-display text-2xl text-ink text-center mb-6">Also in the toolkit</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          v-for="item in extras"
          :key="item"
          class="rounded-xl bg-paper-elevated px-3 py-2.5 text-center text-sm font-medium text-ink shadow-sm"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue';
import { projects } from './data/projects.js';

const skills = [
  { name: 'Vue.js', subtitle: 'Frontend Framework', icon: 'code', bg: 'bg-accent-soft', color: 'text-accent' },
  { name: 'TypeScript', subtitle: 'Typed JavaScript', icon: 'data_object', bg: 'bg-sky-50', color: 'text-sky-700' },
  { name: 'Tailwind CSS', subtitle: 'Utility-First CSS', icon: 'palette', bg: 'bg-cyan-50', color: 'text-cyan-700' },
  { name: 'Vite', subtitle: 'Build Tool', icon: 'bolt', bg: 'bg-amber-50', color: 'text-amber-700' },
  { name: 'i18n', subtitle: 'Internationalization', icon: 'translate', bg: 'bg-indigo-50', color: 'text-indigo-700' },
  { name: 'Storybook', subtitle: 'Design Systems', icon: 'auto_stories', bg: 'bg-pink-50', color: 'text-pink-700' },
  { name: 'Firebase', subtitle: 'Backend & Hosting', icon: 'cloud', bg: 'bg-orange-50', color: 'text-orange-600' },
  { name: 'Stripe', subtitle: 'Payments & Billing', icon: 'payments', bg: 'bg-violet-50', color: 'text-violet-700' }
];

const extras = [
  'HTML5',
  'CSS3',
  'Git',
  'REST APIs',
  'Nuxt',
  'Pinia',
  'Prompt Engineering',
  'WCAG / A11y',
  'CI/CD',
  'Figma',
  'Jest',
  'Micro Frontends'
];
</script>
