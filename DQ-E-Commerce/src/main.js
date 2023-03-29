import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ItemCard from './components/ItemCard.vue'
import Square from './components/square.vue'
import Cart from './components/Cart.vue'
import CartItem from './components/CartItem.vue'

import './assets/main.css'


const app = createApp(App)
app.component('ItemCard', ItemCard)
app.component('Square', Square)
app.component('Cart', Cart)
app.component('CartItem', CartItem)
app.config.globalProperties.$cart = ["5"]
app.use(router)

app.mount('#app')
