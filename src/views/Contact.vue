<template lang="pug">
Nav 
div.responsive 
    .grid
        .s2
        .s8
            article.large
                h5.upper Get in touch
                .space
                .grid
                    .s6
                        div.field.label.border 
                            input(type="text" v-model="name")
                            label Your name
                    .s6
                        div.field.label.border(:class="{'invalid': email === ''}")
                            input(type="email" v-model="email" @blur="validate(email)")
                            label Your e-mail
                            span.error(v-show="email === ''") Please enter valid email
                    .s12 
                        div.field.label.border
                            input(type="text" v-model="company")
                            label Company name
                    .s12
                        div.field.textarea.label.border
                            textarea(v-model="message")
                            label Your message
                div.absolute.right.bottom.margin
                    button.round(@click="submitContactForm()") Submit
        .s2
        


</template>

<script setup>
import { nextTick, ref } from 'vue';
import firebase from '../firebase/firebase';

const name = ref(null);
const email = ref(null);
const company = ref(null);
const message = ref(null);
const error = ref(null);
function validate(value) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return value;
  } else {
    return (this.email = '');
  }
}
function formValidation(name, email, company, message) {
  if (!name || !email || !company || !message) return false;
  else return true;
}
function submitContactForm() {
  if (!formValidation(name.value, email.value, company.value, message.value))
    return;
  firebase.writeMessage(name.value, email.value, company.value, message.value);

  name.value = null;
  email.value = null;
  company.value = null;
  message.value = null;
  nextTick(() => {
    ui();
  });
}
</script>
