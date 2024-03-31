<template>
  <div>
    <h2>Select a vehicle</h2>
    <div class="row">
      <div class="col-md-4" v-for="vehicle in vehicles" :key="vehicle.kind">
        
        <button @click="selectVehicle(vehicle)" :disabled="isVehicleSelectionDisabled(vehicle.kind) != -1">
          <img class="img-fluid" :src="vehicle.img" />
          <p>{{ vehicle.kind }}</p>
         <p>
          <div :class="[isVehicleSelectionDisabled(vehicle.kind) == -1 ?'' : 'alert alert-warning']" role="alert">
                {{ isVehicleSelectionDisabled(vehicle.kind) == -1 ? '' : `👮‍♂️ Cop-${isVehicleSelectionDisabled(vehicle.kind)}` }}
          </div>

</p>
        
        
        </button>
      </div>
    </div>
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
      console.log('veh',vehicle)
      const cityDir = store.cops.map((e) => e.selectedVehicle);
       if (cityDir.includes(null)) {
        const copIndex = cityDir.indexOf(null)
        store.selectVehicle(vehicle.kind, copIndex);
         if (copIndex === 2) {
          console.log('cop',store.cops)
          router.push('/result');
        }
        return
      }
      // Navigate to result page
      
    }
     const isVehicleSelectionDisabled = (vehKind) => {
      // Check if any cop has not selected a city yet
      return store.cops.findIndex(cop => cop.selectedVehicle === vehKind);
    };

    return {
      vehicles,
      selectVehicle,
      isVehicleSelectionDisabled
    };
  }
}
</script>
