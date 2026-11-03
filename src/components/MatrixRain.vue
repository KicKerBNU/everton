<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.18]"
    aria-hidden="true"
  />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref(null);
let animationId = 0;
let resizeHandler = null;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオカキクケコサシスセソ<>[]{}#$%&*+-=';
  let columns = [];
  let fontSize = 14;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = window.innerWidth < 768 ? 12 : 14;
    const columnCount = Math.floor(canvas.width / fontSize);
    columns = Array.from({ length: columnCount }, () => Math.random() * -40);
  };

  const draw = () => {
    ctx.fillStyle = 'rgba(5, 7, 13, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#39ff14';
    ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

    columns.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      ctx.fillText(text, x, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        columns[i] = 0;
      } else {
        columns[i] = y + 1;
      }
    });

    animationId = requestAnimationFrame(draw);
  };

  resize();
  draw();
  resizeHandler = resize;
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  if (resizeHandler) window.removeEventListener('resize', resizeHandler);
});
</script>
