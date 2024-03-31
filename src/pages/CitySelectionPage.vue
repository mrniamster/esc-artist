<template>
  <div>
    <h2>Select a city to investigate</h2>
    <p>Assign the cops to each city</p>
    <div class="row">

      <div  class="col-md-4" v-for="city in cities" :key="city.name">
        
        <button @click="selectCity(city)" :disabled="isCitySelectionDisabled(city) != -1" >
          <img class="img-fluid" :src="city.img" />
          <p> {{ city.name }}</p>
          <div :class="[isCitySelectionDisabled(city) == -1 ?'' : 'alert alert-warning']" role="alert">
              {{ isCitySelectionDisabled(city) == -1 ? '' : `👮‍♂️ Cop-${isCitySelectionDisabled(city)}` }}
          </div>
          
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref,inject } from 'vue'
import { useStore } from '../store/index'
import axios from 'axios';
import { useRouter } from 'vue-router';



export default {
  name: 'CitySelectionPage',
  setup() {
    const store = useStore();
    const cities = ref([]);
    const router = useRouter()
    
    // Fetch cities from backend API
    // Example using axios: 
    axios.get('http://localhost:3000/cities').then(response => {
      cities.value = response.data;
    });

    const selectCity = (city) => {
      const cityDir = store.cops.map((e) => e.selectedCity);
      if (cityDir.includes(null)) {
        const copIndex = cityDir.indexOf(null)
        
        store.selectCity(city.name, copIndex);
        if (copIndex===2) {
          router.push('/vehicle-selection');
        }
        return
      }

      // Navigate to vehicle selection page
      
    }
    const isCitySelectionDisabled = (city) => {
      // Check if any cop has not selected a city yet
      return store.cops.findIndex(cop => cop.selectedCity === city.name);
    };

    return {
      cities,
      selectCity,
      isCitySelectionDisabled
    };
  },
  computed: {
    
  }
}
</script>
