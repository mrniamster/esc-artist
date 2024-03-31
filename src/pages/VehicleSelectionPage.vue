<template>
  <div>
    <h2>Select a vehicle</h2>
    <ul>
      <li v-for="vehicle in vehicles" :key="vehicle.kind">
        <button @click="selectVehicle(vehicle)">{{ vehicle.kind }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '../store/index'
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'VehicleSelectionPage',
  setup() {
    const store = useStore();
    const vehicles = ref([]);
     const router = useRouter()

    // Fetch vehicles from backend API
    // Example using axios: 
    axios.get('http://localhost:3000/vehicles').then(response => {
      vehicles.value = response.data;
    });

    const selectVehicle = (vehicle) => {
      store.selectVehicle(vehicle);
      // Navigate to result page
      router.push('/result');
    }

    return {
      vehicles,
      selectVehicle
    };
  }
}
</script>
