<template>
  <div>
    <h2>Select a city to investigate</h2>
    <ul>

      <li v-for="city in cities" :key="city.name">
        <button @click="selectCity(city)" :disabled="$store.cops" >{{ city.name }}</button>
      </li>
    </ul>
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
        store.selectCity(city,copIndex);
        return
      }
      store.selectedCopIndex = 0;
      // Navigate to vehicle selection page
      router.push('/vehicle-selection');
    }

    return {
      cities,
      selectCity
    };
  }
}
</script>
