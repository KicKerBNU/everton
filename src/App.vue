<template lang="pug">
Nav
main.responsive#main
  nav.right-align
    a.skip-main(href="#main") Skip to main content
    div.right-align.padding
      label.switch
        input(type="checkbox" v-model="isDark")
        span.small-padding Light/Dark
  router-view
</template>

<script setup>
import Nav from './components/Nav.vue';
import { ref } from 'vue';
import { watch } from 'vue';
const isDark = ref(false);
watch(
  () => isDark,
  newValue => {
    if (!newValue.value) {
      document.body.classList.add('blue1');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('blue1');
      document.body.classList.add('dark');
    }
  },
  { deep: true }
);
</script>
