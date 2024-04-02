<template>
 
   <div class="results-page">
    <div class="confetti-background"></div>
    <div class="content">
      <div>
    <h2>Game Result</h2>
    <p v-if="captureStatus">The fugitive has been captured by  👮‍♂️ {{ capturingCop }}</p>
    <p v-else>The fugitive has not been captured. Better luck next time!</p>

    <img   class="img-fluid" src="https://i.ibb.co/1QPc4Rm/image.png" />
    <p>
      <RouterLink to="/">
<button @click="resetStore">
        🔄 RESTART
     </button>
      </RouterLink>
      
    </p>
  </div>
    </div>
  </div>
</template>

<script>
import { computed,onMounted } from 'vue';
import { useStore } from '../store/index'

export default {
  name: 'ResultPage',
  setup() {
    const store = useStore();

    const captureStatus = computed(() => store.captureStatus);
    const capturingCop = computed(() => store.capturingCop);
    const resetStore = () => {
      store.$reset();
    }
    onMounted(() => {
      store.determineCaptureStatus();
      
    });
    return {
      captureStatus,
      capturingCop,
      resetStore
    };
  }
}
</script>


<style scoped>

</style>
