<template>
  <Transition name="boot-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-[#020308] px-6"
      role="status"
      aria-live="polite"
      aria-label="System boot sequence"
    >
      <div class="scanlines absolute inset-0 opacity-40" />
      <div class="relative w-full max-w-xl font-mono text-sm text-matrix sm:text-base">
        <p class="mb-4 text-accent tracking-[0.3em] uppercase text-xs">// SYS.BOOT // EVERTON.BUZZI</p>
        <div class="space-y-1.5 min-h-[9rem]">
          <p v-for="(line, i) in visibleLines" :key="i" class="leading-relaxed">
            <span class="text-accent/70">{{ '>' }}</span> {{ line }}
          </p>
          <p class="text-accent">
            {{ '>' }} <span class="inline-block w-2 h-4 bg-accent align-middle animate-[bootBlink_0.8s_step-end_infinite]" />
          </p>
        </div>
        <div class="mt-8 h-1.5 w-full overflow-hidden border border-accent/40 bg-black/60">
          <div
            class="h-full bg-gradient-to-r from-matrix via-accent to-magenta transition-[width] duration-150"
            :style="{ width: `${progress}%` }"
          />
        </div>
        <p class="mt-2 text-[11px] tracking-[0.2em] text-muted uppercase">
          Loading modules… {{ Math.min(100, Math.round(progress)) }}%
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits(['done']);

const visible = ref(true);
const progress = ref(0);
const visibleLines = ref([]);

const lines = [
  'Initializing neural interface…',
  'Mounting Vue runtime kernel…',
  'Decrypting portfolio vault…',
  'Syncing Lisbon node [PT]…',
  'Loading projects / books / maps…',
  'Access granted. Welcome, operator.'
];

let lineTimer = null;
let progressTimer = null;

onMounted(() => {
  let lineIndex = 0;
  lineTimer = setInterval(() => {
    if (lineIndex < lines.length) {
      visibleLines.value.push(lines[lineIndex]);
      lineIndex += 1;
    }
  }, 320);

  progressTimer = setInterval(() => {
    progress.value = Math.min(100, progress.value + 4 + Math.random() * 6);
    if (progress.value >= 100) {
      clearInterval(progressTimer);
      clearInterval(lineTimer);
      setTimeout(() => {
        visible.value = false;
        emit('done');
      }, 420);
    }
  }, 90);
});

onUnmounted(() => {
  clearInterval(lineTimer);
  clearInterval(progressTimer);
});
</script>

<style scoped>
.boot-fade-leave-active {
  transition: opacity 0.55s ease, filter 0.55s ease;
}
.boot-fade-leave-to {
  opacity: 0;
  filter: blur(6px);
}
</style>
