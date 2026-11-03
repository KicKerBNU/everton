<template>
  <div id="contact" class="page-shell max-w-4xl">
    <div class="text-center mb-8">
      <p class="section-kicker mb-3">// INCOMING.SIGNAL</p>
      <h2 class="font-display text-3xl lg:text-5xl text-ink mb-3">Get in Touch</h2>
      <p class="font-mono text-sm text-muted">Collaborations, roles, or a quick hello — transmit a message.</p>
      <div class="mt-4 flex flex-wrap justify-center gap-4 text-sm">
        <a href="mailto:evertonbuzzi@gmail.com" class="text-accent font-medium hover:underline">evertonbuzzi@gmail.com</a>
        <a href="https://www.linkedin.com/in/evertonbuzzi" target="_blank" rel="noopener noreferrer" class="text-accent font-medium hover:underline">LinkedIn</a>
        <a href="https://github.com/KicKerBNU" target="_blank" rel="noopener noreferrer" class="text-accent font-medium hover:underline">GitHub</a>
      </div>
    </div>

    <div class="surface-card p-5 lg:p-8">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="submitContactForm"
        class="space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="hidden">
          <input name="bot-field" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label for="name" class="mb-1.5 block font-mono text-xs uppercase tracking-[0.16em] text-muted">Your name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              required
              class="w-full border border-line bg-paper px-4 py-3 font-mono text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div>
            <label for="email" class="mb-1.5 block font-mono text-xs uppercase tracking-[0.16em] text-muted">Your e-mail</label>
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              required
              @blur="validate(email)"
              class="w-full border border-line bg-paper px-4 py-3 font-mono text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              :class="{ 'border-magenta focus:ring-magenta': emailError }"
            />
            <span v-show="emailError" class="mt-1 block text-sm text-magenta">{{ emailError }}</span>
          </div>
        </div>

        <div>
          <label for="company" class="mb-1.5 block font-mono text-xs uppercase tracking-[0.16em] text-muted">Company name</label>
          <input
            id="company"
            v-model="company"
            type="text"
            name="company"
            required
            class="w-full border border-line bg-paper px-4 py-3 font-mono text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div>
          <label for="message" class="mb-1.5 block font-mono text-xs uppercase tracking-[0.16em] text-muted">Your message</label>
          <textarea
            id="message"
            v-model="message"
            name="message"
            rows="5"
            required
            class="w-full resize-none border border-line bg-paper px-4 py-3 font-mono text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="cyber-btn disabled:cursor-not-allowed disabled:opacity-50"
          >
            {{ isSubmitting ? 'Transmitting...' : 'Send Message' }}
          </button>
        </div>

        <div
          v-if="submitStatus"
          class="rounded-xl p-4 text-sm"
          :class="submitStatus.type === 'success' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-800'"
        >
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const company = ref('');
const message = ref('');
const emailError = ref('');
const isSubmitting = ref(false);
const submitStatus = ref(null);

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

function formValidation(nameVal, emailVal, companyVal, messageVal) {
  if (!nameVal || !emailVal || !companyVal || !messageVal) return false;
  return validate(emailVal);
}

async function submitContactForm() {
  if (!formValidation(name.value, email.value, company.value, message.value)) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('company', company.value);
    formData.append('message', message.value);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    if (response.ok) {
      submitStatus.value = {
        type: 'success',
        message: "Thank you for your message! I'll get back to you soon."
      };
      name.value = '';
      email.value = '';
      company.value = '';
      message.value = '';
      emailError.value = '';
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
    };
  } finally {
    isSubmitting.value = false;
  }
}
</script>
