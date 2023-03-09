import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ItemCard from './components/ItemCard.vue'

import './assets/main.css'


const app = createApp(App)
app.component('ItemCard', ItemCard)
app.use(router)

app.mount('#app')
