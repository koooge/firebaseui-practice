<template>
  <div class="signin">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default defineComponent({
  name: "Signin",
  setup() {
    onMounted(() => {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: process.env.BASE_URL,
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      });
    });
  }
});
</script>
