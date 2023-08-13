<template lang="pug">
#login.responsive
  .grid
    .s12.l6
      article
          h5.center Create Account
          .grid
            .s6.l6
              div.field.label.border.prefix.suffix
                i mail
                input(type="email", v-model="emailCreate")
                label Email
            .s6.l6
              div.field.label.border.prefix.suffix
                i lock
                input(type="password", v-model="passwordCreate")
                label Password
          .row.right-align
            button(@click="createAccount") Create Account
    .s12.l6
      article
        h5.center Login
        .grid
          .s6.l6
            div.field.label.border.prefix.suffix
              i mail
              input(type="email", v-model="emailLogin")
              label Email
          .s6.l6
            div.field.label.border.prefix.suffix
              i lock
              input(type="password", v-model="passwordLogin")
              label Password
        .row.right-align
          button(@click="login") Login
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

    const userExists = await checkUserExists(email.value);
    if (!userExists) {
      await createUserInDatabase(email.value);
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
    ui();
  });
};
</script>
