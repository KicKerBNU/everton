<template lang="pug">
#documentation.responsive
    h3.center-align Documentation
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const user = ref(null);
const auth = getAuth();

onAuthStateChanged(auth, currentUser => {
  user.value = currentUser;
  if (!user.value) {
    router.push('/login');
  }
});
</script>
<style></style>
