<template>
  <div>
    <h1>Welcome to the Escape Artist Game!</h1>
    <p>Help the fearless cops capture the fugitive hiding in one of the neighboring cities.</p>
    <img  src="https://i.ibb.co/jHkLC2M/image.png" class="img-fluid"/>
    <p>
      <router-link to="/city-selection">
      <button @click="play">Start Game</button>
    </router-link>
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
  name: 'LandingPage'
}
const play = () => {
   var audio = document.getElementById("myAudio");
  audio.play();
}
</script>
