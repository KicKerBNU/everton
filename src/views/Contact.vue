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
                        div.field.label.border(:class="{'invalid': email}")
                            input(type="email" v-model="email" @blur="validate(email)")
                            label Your e-mail
                            span.error(v-show="email") Please enter valid email
                    .s12 
                        div.field.label.border
                            input(type="text" v-model="company")
                            label Company name
                    .s12
                        div.field.textarea.label.border
                            textarea(v-model="message")
                            label Your message
                div.absolute.right.bottom.margin
                    button.round(@click="submit()") Submit
        .s2
        


</template>

<script setup>
import { nextTick, ref } from 'vue';
import firebase from "../firebase/firebase";

const name = ref(null);
const email = ref(null);
const company = ref(null);
const message = ref(null);
const error = ref(null);
function validate(value){
    email.value = "-"
}
function formValidation(name, email, company, message){
    console.log("return", name, email, company, message)
    if(!name || !email || !company || message) return false;
}
function submit(){
    if(!formValidation(name.value, email.value, company.value, message.value)) return;
    firebase.writeMessage(name.value, email.value, company.value, message.value);
    
    name.value = null;
    email.value = null;
    company.value = null;
    message.value = null;
    nextTick( () => {
        ui();
    })
}
</script>