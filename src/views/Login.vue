<template>
  <div id="login" class="max-w-6xl mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
      <p class="text-gray-600">Create an account or sign in to access documentation</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Create Account Section -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Create Account</h3>
        <form @submit.prevent="createAccount" class="space-y-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="material-icons text-gray-400">mail</span>
            </div>
            <input 
              type="email" 
              v-model="emailCreate" 
              id="emailCreate"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              placeholder=" "
              required
            />
            <label 
              for="emailCreate"
              class="absolute left-10 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Email
            </label>
          </div>
          
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="material-icons text-gray-400">lock</span>
            </div>
            <input 
              type="password" 
              v-model="passwordCreate" 
              id="passwordCreate"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              placeholder=" "
              required
            />
            <label 
              for="passwordCreate"
              class="absolute left-10 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Password
            </label>
          </div>
          
          <button 
            type="submit"
            class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
      
      <!-- Login Section -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">Sign In</h3>
        <form @submit.prevent="login" class="space-y-6">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="material-icons text-gray-400">mail</span>
            </div>
            <input 
              type="email" 
              v-model="emailLogin" 
              id="emailLogin"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              placeholder=" "
              required
            />
            <label 
              for="emailLogin"
              class="absolute left-10 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Email
            </label>
          </div>
          
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="material-icons text-gray-400">lock</span>
            </div>
            <input 
              type="password" 
              v-model="passwordLogin" 
              id="passwordLogin"
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors peer"
              placeholder=" "
              required
            />
            <label 
              for="passwordLogin"
              class="absolute left-10 top-3 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:text-blue-500 peer-focus:-translate-y-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-sm"
            >
              Password
            </label>
          </div>
          
          <button 
            type="submit"
            class="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getDatabase,
  ref as dbRef,
  child as dbChild,
  set as dbSet
} from 'firebase/database';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();
const db = getDatabase();

const emailLogin = ref('');
const passwordLogin = ref('');
const emailCreate = ref('');
const passwordCreate = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(
      auth,
      emailLogin.value,
      passwordLogin.value
    );
    console.log('Logged in!');
    router.push('/doc');
  } catch (error) {
    console.error('Login error:', error.message);
  } finally {
    clearForm();
  }
};

const checkUserExists = async email => {
  const userSnapshot = await dbChild(dbRef(db, 'users'), email).get();
  return userSnapshot.exists();
};

const createUserInDatabase = async email => {
  await dbSet(dbRef(db, 'users/' + email.replace(/\./g, ',')), {
    email: email
  });
};

const createAccount = async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      emailCreate.value,
      passwordCreate.value
    );

    const userExists = await checkUserExists(emailCreate.value);
    if (!userExists) {
      await createUserInDatabase(emailCreate.value);
    }

    console.log('Account created!');
    router.push('/doc');
  } catch (error) {
    console.error('Account creation error:', error.message);
  } finally {
    clearForm();
  }
};

const clearForm = () => {
  emailLogin.value = '';
  passwordLogin.value = '';
  emailCreate.value = '';
  passwordCreate.value = '';
  nextTick(() => {
    // Form cleared
  });
};
</script>
