<template lang="pug">
#projects.responsive
  .large-space
  .center
    h3 My Projects
    p.medium-space Here are some projects I've been involved with or contributed to.
  
  .grid.large-space
    .s12.m6.l6
      article.primary-container.round.elevate
        img.responsive.top-round(src="../assets/beercss.png" alt="BeerCSS Logo" style="max-height: 200px; object-fit: contain; padding: 24px; background-color: var(--surface-1)")
        .medium-padding
          h5 BeerCSS
          p.medium-space A lightweight and flexible CSS framework for building modern web interfaces based on Material Design 3
          nav.right-align
            a.button.border.round(href="https://www.beercss.com" target="_blank") Visit Website
            
    .s12.m6.l6
      article.primary-container.round.elevate
        img.responsive.top-round(src="../assets/pilates-hero.jpg" alt="Saúde Pilates" style="height: 200px; object-fit: cover; width: 100%;")
        .medium-padding
          h5 Saúde Pilates
          p.medium-space A comprehensive platform for pilates practitioners and health professionals
          nav.right-align
            a.button.border.round(href="https://www.saudepilates.com.br" target="_blank") Visit Website
  
  .large-space
  h4.center Technologies Used
  .grid.large-space.center-align
    .s6.m3.l3
      article.secondary-container.round.small-elevate
        .medium-padding
          i.large code
          h5 Vue.js
          p Frontend Framework
    
    .s6.m3.l3
      article.secondary-container.round.small-elevate
        .medium-padding
          i.large css
          h5 BeerCSS
          p UI Framework
          
    .s6.m3.l3
      article.secondary-container.round.small-elevate
        .medium-padding
          i.large javascript
          h5 JavaScript
          p Programming Language
          
    .s6.m3.l3
      article.secondary-container.round.small-elevate
        .medium-padding
          i.large cloud
          h5 Firebase
          p Backend & Hosting
</template>

<script setup>
// Projects component
</script> 