import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBlj7_xShtPULmPzs-lEl34QN1BkKP5CFI",
  authDomain: "vueschool-firebase-auth-d1efe.firebaseapp.com"
});

createApp(App)
  .use(router)
  .mount("#app");
