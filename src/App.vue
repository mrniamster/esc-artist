<script setup lang="ts">


</script>

<template>

  <!-- <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav> -->
  <audio id="myAudio" controls  autoplay style="visibility: hidden;" >
  <source src="https://opengameart.org/sites/default/files/streetsound_150_bpm.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
  <main>
    <RouterView />
    
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
