<template lang="pug">
a.skip-main(href="#main") Skip to main content
div.right-align.padding
  label.switch
    input(type="checkbox" v-model="isDark")
    span.small-padding Light/Dark
router-view
</template>

<script setup>
import {  ref } from 'vue';
import {  watch } from 'vue';
const isDark = ref()
watch(
  () => isDark,
  (newValue) => {
    if(!newValue.value){
      document.body.classList.add('blue1');
      document.body.classList.remove('dark');
    }else{
      document.body.classList.remove('blue1');
      document.body.classList.add('dark');
    }
  },
  { deep: true }
)
</script>

<style>
body {
  --primary:#0061a6;--on-primary:#ffffff;--primary-container:#d0e4ff;--on-primary-container:#001d36;--secondary:#535f70;--on-secondary:#ffffff;--secondary-container:#d6e3f7;--on-secondary-container:#101c2b;--tertiary:#6b5778;--on-tertiary:#ffffff;--tertiary-container:#f3daff;--on-tertiary-container:#251432;--error:#ba1b1b;--error-container:#ffdad4;--on-error:#ffffff;--on-error-container:#410001;--background:#fdfcff;--on-background:#1b1b1b;--surface:#fdfcff;--on-surface:#1b1b1b;--surface-variant:#dfe2eb;--on-surface-variant:#42474e;--outline:#73777f;--inverse-on-surface:#f1f0f4;--inverse-surface:#2f3033;--inverse-primary:#9ccaff;--shadow:#000000;
}
</style>