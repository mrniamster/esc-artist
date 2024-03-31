import { createMemoryHistory, createRouter } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import CitySelectionPage from './pages/CitySelectionPage.vue'
import VehicleSelectionPage from './pages/VehicleSelectionPage.vue'
import ResultPage from './pages/ResultPage.vue'
import pinia from './store/store'
import { useStore } from './store/index'
const routes = [
    { path: '/', component: LandingPage },
    {
        path: '/city-selection', component: CitySelectionPage, beforeEnter: () => {
            const processStore = useStore(pinia); // <-- passing Pinia instance directly
            console.log(processStore);
        },
    },
    { path: '/vehicle-selection', component: VehicleSelectionPage },
    { path: '/result', component: ResultPage },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


export default router