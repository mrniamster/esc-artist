import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'escape-artist-store',
    state: () => ({
        selectedCopIndex: 0,
        selectedCity: null,
        selectedVehicle: null,
        captureStatus: false,
        capturingCop: null,
        cops: [
            { name: "Cop 1", selectedCity: null, selectedVehicle: null },
            { name: "Cop 2", selectedCity: null, selectedVehicle: null },
            { name: "Cop 3", selectedCity: null, selectedVehicle: null }
        ],
    }),
    actions: {
        selectCity(city: any, copID: number) {
            this.selectedCity = city
            this.cops[copID].selectedCity = city

        },
        selectVehicle(vehicle: any, copID: number) {
            this.selectedVehicle = vehicle
            this.cops[copID].selectedVehicle = vehicle
        },
        setCaptureStatus(status: any) {
            this.captureStatus = status
        },
        setCapturingCop(cop: any) {
            this.capturingCop = cop
        },
        async determineCaptureStatus() {
            const response = await fetch('https://esc-artist-back.vercel.app/capture-status', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.cops),
            });
            const data = await response.json();
            this.captureStatus = data.captureStatus;
            this.capturingCop = data.capturingCop;
        }
    },
    getters: {
        // Add getters if needed
    }
})
