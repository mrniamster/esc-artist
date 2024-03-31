<template>
  <div>
    <h1>Welcome to the Escape Artist Game!</h1>
    <p>Help the fearless cops capture the fugitive hiding in one of the neighboring cities.</p>
    <router-link to="/city-selection">
      <button>Start Game</button>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
  name: 'LandingPage'
}
</script>
