import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, push } from 'firebase/database';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDd4Cw7z2oWywl9XkIh8sBYAtHia_7NsaE',
  authDomain: 'everton-17da5.firebaseapp.com',
  projectId: 'everton-17da5',
  storageBucket: 'everton-17da5.appspot.com',
  messagingSenderId: '932994133020',
  appId: '1:932994133020:web:c87ebaf447d3548ba3c3d9',
  measurementId: 'G-KFKCBCH52Z'
});

function writeMessage(name, email, company, message) {
  const db = getDatabase();
  const reference = ref(db, 'messages/');

  push(reference, {
    name: name,
    email: email,
    company: company,
    message: message
  });
}

export default {
  writeMessage
};
