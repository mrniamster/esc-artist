<template>
  <div>
    <h1>Welcome to the Escape Artist Game!</h1>
    <p>Help the fearless cops capture the fugitive hiding in one of the neighboring cities.</p>
    <img  src="https://i.ibb.co/jHkLC2M/image.png" class="img-fluid"/>
    <p>
        <button @click="play">Start Game</button>
      
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
export default {
  name: 'LandingPage',
  setup() {
    const router = useRouter()
const play = () => {
   var audio = document.getElementById("myAudio");
  audio.play();
  console.log('playing audio')
  router.push('/city-selection');
}
    return {
      play
    }
  }
}

 
</script>
