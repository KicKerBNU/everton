<template lang="pug">
Nav
main.responsive
    #introduction
        .grid
            .s12
                h5.center-align Everton Buzzi
                p.center-align Hello, im a frontend developer, this webpage show you more about my job and the technologies im working with.
            .s6
                img.responsive.round(src="../assets/everton.jpg" alt="Guy in a island")
            .s6 
                img.responsive.round(src="../assets/frontend.png" alt="Guy working on a computer")
        .large-space
        h5.center-align Career Timeline
        article.timeline.center
            div.entry
                img.small.logo.round(src="../assets/masterlink.png" alt="Masterlink Logo")
                div.title
                    h3 2022 - Present
                    p Frontend Developer, Masterlink Business Innovation
                    
                div.body
                    p Template Platform
                    ul
                        li Development dynamic card generation 
                        li Fix bugs 
            div.entry
                img.small.logo.round(src="../assets/inventti.png" alt="Inventti Logo")
                div.title
                    h3 2021 - 2022
                    p Frontend Developer, Inventti Soluções
                div.body
                    p ERP
                    ul
                        li POS Grid System
                        li POS Return System
                        li Omni Channel
            div.entry
                img.small.logo.round(src="../assets/inventti.png" alt="Inventti Logo")
                div.title
                    h3 2020 - 2021
                    p Junior Frontend Developer, Inventti Soluções
                div.body
                    p ERP
                    ul
                        li Transport Invoices
                        li ERP Accountant Area
                        li POS 
            div.entry
                img.small.logo.round(src="../assets/inventti.png" alt="Inventti Logo")
                div.title
                    h3 2019 - 2020
                    p Internship, Inventti Soluções
                div.body
                    p ERP
                    ul
                        li Onboarding
                        li POS
                        li Referral Marketing
            div.entry
                img.small.logo.round(src="../assets/besistemas.jpg" alt="Be Sistemas Logo")
                div.title
                    h3 2019
                    p Intership, Be Sistemas
                div.body
                    p Mall Management Software
                    ul
                        li Customer Success
                        li Unit Testing
                        li Software Documentation
                        li Bug Fixes
        .large-space
        h5.center-align Stack
        div.grid
            div(v-for="(stack, i) in stack" :key="i").s4
                article.no-padding
                    img.responsive.medium(:src="stack.path")
                    div.absolute.bottom.left.right.padding.bottom-shadow.white-text
                        nav
                            h5 {{stack.name}}    
</template>
<script setup>
import { ref } from "vue";
import stack from "./stack";
ref(stack);
</script>
<style lang="scss">
$container-shadow: 0.5rem 0.5rem 2rem 0 rgba(black, 0.2);

$gutter: 30px;
$border-width: 4px;
$dot-diameter: 8px;
.logo {
    right: 20px;
    top: -3px;
}
.timeline {
  width:100%;
  max-width:800px;
  padding: 100px 50px;
  position: relative;
  box-shadow: $container-shadow;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left:calc(33% + 15px); //$gutter/2
    bottom: 0px;
    width: $border-width;
    background: #ddd;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  } 
}

.entry {
  clear: both;
  text-align: left;
  position: relative;
  .title {
    margin-bottom: .5em;
    float: left;
    width: 33%;
    padding-right: $gutter;
    text-align: right;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background-color:#fff;
      border-radius:100%;
      top: 15%;
      right: -$dot-diameter;
      z-index: 99;
    }
    h3 {
      margin: 0;
      font-size: 120%;
    }
    p {
      margin: 0;
      font-size: 100%;
    }
  }
  .body {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: $gutter;
    p {
      line-height: 1.4em;
      &:first-child {
        margin-top: 0;
        font-weight: 400;
      }
    }
    ul {
      color:#aaa;
      padding-left: 0;
      list-style-type: none;
      li:before {
        content: "–";
        margin-right: .5em;
      }
    }
  }
}

</style>