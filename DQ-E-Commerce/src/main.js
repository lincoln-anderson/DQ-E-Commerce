import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import weapons from './weapons.json'

import './assets/main.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
