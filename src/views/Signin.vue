<template>
  <div class="signin">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';

firebase.initializeApp({
  apiKey: "AIzaSyBlj7_xShtPULmPzs-lEl34QN1BkKP5CFI",
  authDomain: "vueschool-firebase-auth-d1efe.firebaseapp.com",
  databaseURL: "https://vueschool-firebase-auth-d1efe.firebaseio.com",
  projectId: "vueschool-firebase-auth-d1efe",
  storageBucket: "vueschool-firebase-auth-d1efe.appspot.com",
  messagingSenderId: "267677873318"
});

export default defineComponent({
  name: "Signin",
  setup() {
    onMounted(() => {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      });
    });
  }
});
</script>
