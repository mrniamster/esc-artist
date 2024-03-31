<template>
  <div>
    <h2>Game Result</h2>
    <p v-if="captureStatus">The fugitive has been captured by {{ capturingCop }}</p>
    <p v-else>The fugitive has not been captured. Better luck next time!</p>
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
    onMounted(() => {
      store.determineCaptureStatus();
    });
    return {
      captureStatus,
      capturingCop
    };
  }
}
</script>
