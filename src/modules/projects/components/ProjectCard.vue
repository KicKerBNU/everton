<template>
  <div class="surface-card overflow-hidden transition duration-300 hover:shadow-[0_0_28px_rgba(0,240,255,0.22)] flex flex-col h-full">
    <div
      v-if="project.image"
      class="h-40 sm:h-48 flex-shrink-0 overflow-hidden"
      :class="project.imageFit === 'cover' ? '' : 'bg-gradient-to-br from-accent-soft to-mist flex items-center justify-center'"
    >
      <img
        :src="project.image"
        :alt="project.name"
        :class="project.imageFit === 'cover' ? 'w-full h-full object-cover' : 'w-24 h-24 sm:w-32 sm:h-32 object-contain'"
      />
    </div>
    <div
      v-else
      class="h-40 sm:h-48 flex items-center justify-center flex-shrink-0 bg-gradient-to-br"
      :class="project.gradient"
    >
      <span class="material-icons text-6xl sm:text-7xl" :class="project.iconColor" aria-hidden="true">
        {{ project.icon }}
      </span>
    </div>

    <div class="p-5 lg:p-6 flex flex-col flex-1 min-h-0">
      <h4 class="font-display text-xl text-ink mb-3">{{ project.name }}</h4>
      <p class="text-muted mb-6 leading-relaxed text-sm lg:text-base flex-1">{{ project.description }}</p>

      <div class="flex items-end justify-between gap-4 flex-shrink-0 mt-auto pt-4 border-t border-line/70">
        <div class="flex items-center gap-3 sm:gap-4" aria-label="Available platforms">
          <div
            v-for="platform in platformOptions"
            :key="platform.id"
            class="flex flex-col items-center gap-1 min-w-[2.5rem]"
            :title="project.platforms[platform.id] ? `${platform.label} available` : `${platform.label} not available`"
          >
            <div
              v-if="platform.id === 'ios'"
              class="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg transition-colors"
              :class="project.platforms[platform.id] ? 'bg-accent text-paper' : 'bg-mist/70 text-line'"
            >
              <svg
                class="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] transition-colors"
                :class="project.platforms[platform.id] ? 'text-paper' : 'text-line'"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <span
              v-else
              class="material-icons text-xl sm:text-2xl transition-colors"
              :class="project.platforms[platform.id] ? platform.activeClass : 'text-line'"
              aria-hidden="true"
            >
              {{ platform.icon }}
            </span>
            <span
              class="text-[10px] sm:text-xs font-medium uppercase tracking-wide transition-colors"
              :class="project.platforms[platform.id] ? 'text-muted' : 'text-line'"
            >
              {{ platform.label }}
            </span>
          </div>
        </div>

        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="cyber-btn shrink-0 !px-3 !py-2"
        >
          Visit
          <span class="material-icons text-sm">open_in_new</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});

const platformOptions = [
  { id: 'web', label: 'Web', icon: 'language', activeClass: 'text-accent' },
  { id: 'ios', label: 'iOS' },
  { id: 'android', label: 'Android', icon: 'android', activeClass: 'text-matrix' }
];
</script>
