# Fugitive Capture Game

Welcome to the Fugitive Capture Game! This application allows three cops to independently select a city to investigate and choose an electric vehicle for transportation. The goal is to capture a fugitive who may be hiding in one of the neighboring cities.

## Technologies Used

- Frontend: Vue.js
- Backend: Node.js with Express

## Setup Instructions

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn:

6. Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to access the application.

## Game Instructions

1. Three cops will independently select a city to investigate and choose an electric vehicle for transportation.
2. Each cop must ensure that their selected city is unique and that the selected vehicle has enough range for a round trip.
3. After all cops have made their selections, the system will determine if any cop successfully captures the fugitive.
4. If successful, the name of the capturing cop will be displayed.

## Folder Structure

- `src/` - Contains frontend source code.
- `components/` - Vue.js components.
- `store/` - Vuex store modules.
- `views/` - Vue.js views (pages).
- `server/` - Contains backend source code.
- `controllers/` - Express route controllers.
- `routes/` - Express routes.
- `services/` - Business logic services.
- `validators/` - Input validation logic.
- `data/` - In-memory data storage.

## Additional Notes

- This application does not require authentication or authorization.
- Error handling is implemented for city and vehicle selection to ensure a smooth user experience.
- The backend server runs on port 3000 by default, and the frontend development server runs on port 8080.

Feel free to explore and modify the code as needed. Enjoy the game!

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
