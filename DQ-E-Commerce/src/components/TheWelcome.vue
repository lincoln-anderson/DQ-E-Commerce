<template>
  <div class="weaponCatalog">
    <div class="catalogTop">
      <div class="catalogTopLeft">
        <h1 class="catalogTitle">CLOTHING STORE</h1>
        <input 
          v-model="searchQuery"
          class="searchInput"
          placeHolder="Search"
        >
        <h3> {{this.cartAmount}} </h3>
      </div>
      <div class="container">
        <div v-if="weapons.length != 0">
          <div v-if="SearchItemResults.length != 0">
            <ul>
              <li v-on:click="addToCart(weapon)" v-for=" weapon in SearchItemResults"
              :key="weapon.id"
              class="weapon">
                <ItemCard :weapon=weapon />
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <h2 style="color: #0A2B66; text-align: center">NO RESULTS TO YOUR API CALL</h2>
        </div>
        <div>
          <Cart :items=cartItems :itemQuantities=cartQuantities />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import ItemCard from './ItemCard.vue'
import Square from './square.vue'
import Cart from './Cart.vue'

export default defineComponent({
  name: 'TheWelcome',
  data() {
    return {
      weapons: []
    }
  },
  mounted() {
    axios
    .get('src/static/weapons.json')
    .then(response => {
      this.weapons = response.data.weapons
    })
    .catch(err=>console.log(err))
    
  },
  setup() {
    const input = ref('')
    const passedTimeout = 500
    const cartItems = ref([])
    const cartAmount = ref('')
    const cartQuantities = ref([])
    
    return {
      input,
      passedTimeout,
      cartItems,
      cartAmount,
      cartQuantities,
    }
  },
  methods: {
    addToCart(passedWeapon) {
      if (this.cartItems.includes(passedWeapon)) {
        console.log("increased quantity")
        this.cartQuantities[passedWeapon.id] = this.cartQuantities[passedWeapon.id] + 1
      } else {
        this.cartItems.push(passedWeapon)
        this.cartQuantities[passedWeapon.id] = 1;
      }
      
      
      console.log(this.cartQuantities)
      
      this.cartAmount = this.cartItems.length
      console.log(this.cartItems)
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.input
      },
      set(passedValue) {
        if (this.timeout) clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.input = passedValue
          }, this.passedTimeout)
      }
    },
    SearchItemResults: function() {
      var localWeapons = this.weapons;
      
      var localSearchQuery = this.input;
      
      if(!localSearchQuery || localSearchQuery.length < 2){
        return localWeapons
      }
      
      var localSearchQuery = localSearchQuery.trim().toLowerCase();
      
      localWeapons = localWeapons.filter(function(item){
        if(item.name.toLowerCase().indexOf(localSearchQuery) !== -1){
          return item
        }
      })
      
      
      return localWeapons;
      
      
    }
  },
})

</script>


<style>
  .weaponCatalog {
    max-width: 1250px;
    margin: 2rem auto;
    padding: 0 20px;
  }
  li {
    padding-bottom: 8px;
    padding-top: 8px;
    list-style-type: none;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 20px 0 0;
    list-style: none;
  }
  .container {
    display: grid;
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px 30px 0 0;
  }
  @media (max-width: 600px) {
    .weaponCatalog {
      max-width: 1250px;
      margin: 1rem auto;
    }
    .container {
      display: grid;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 30px 0 0;
    }
  }
</style>
