<template>
  <div id="contact" class="max-w-4xl mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
      <p class="text-gray-600">Feel free to reach out for collaborations or questions</p>
    </div>
    
    <div class="bg-white rounded-lg shadow-lg p-8">
      <form @submit.prevent="submitContactForm" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative">
            <input 
              type="text" 
              v-model="name" 
              id="name"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              placeholder=" "
              required
            />
            <label 
              for="name"
              class="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Your name
            </label>
          </div>
          
          <div class="relative">
            <input 
              type="email" 
              v-model="email" 
              id="email"
              @blur="validate(email)" 
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              :class="{'border-red-500 focus:ring-red-500 focus:border-red-500': emailError}"
              placeholder=" "
              required
            />
            <label 
              for="email"
              class="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
              :class="{'text-red-500 peer-focus:text-red-500': emailError}"
            >
              Your e-mail
            </label>
            <span class="text-red-500 text-sm mt-1 block" v-show="emailError">{{ emailError }}</span>
          </div>
        </div>
        
        <div class="relative">
          <input 
            type="text" 
            v-model="company" 
            id="company"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
            placeholder=" "
            required
          />
          <label 
            for="company"
            class="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
          >
            Company name
          </label>
        </div>
        
        <div class="relative">
          <textarea 
            v-model="message" 
            id="message"
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer resize-none"
            placeholder=" "
            required
          ></textarea>
          <label 
            for="message"
            class="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
          >
            Your message
          </label>
        </div>
        
        <div class="flex justify-end">
          <button 
            type="submit"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import firebase from '../firebase/firebase';

const name = ref('');
const email = ref('');
const company = ref('');
const message = ref('');
const emailError = ref('');

function validate(value) {
  if (!value) {
    emailError.value = 'Please enter your email';
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    emailError.value = 'Please enter a valid email address';
    return false;
  }
  emailError.value = '';
  return true;
}

function formValidation(name, email, company, message) {
  if (!name || !email || !company || !message) return false;
  return validate(email);
}

function submitContactForm() {
  if (!formValidation(name.value, email.value, company.value, message.value)) {
    return;
  }
  
  firebase.writeMessage(name.value, email.value, company.value, message.value);

  // Reset form
  name.value = '';
  email.value = '';
  company.value = '';
  message.value = '';
  emailError.value = '';
  
  nextTick(() => {
    // You can add success notification here
  });
}
</script>
