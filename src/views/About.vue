<template>
  <div class="about">
    <h1>This is an about page</h1>
    <pre id="profile"><code>{{ profile }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import firebase from "firebase/app";

export default defineComponent({
  name: "About",
  setup() {
    const profile = JSON.stringify(firebase.auth().currentUser, null, 4);
    return { profile };
  }
});
</script>

<style scoped>
#profile {
  text-align: left;
}
</style>
