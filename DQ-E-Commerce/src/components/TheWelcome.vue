<template>
  <div class="weaponCatalog">
    <div class="catalogTop">
      <div class="catalogTopLeft">
        <h1 class="catalogTitle">Weapon Shop</h1>
        <input 
          v-model="searchQuery"
          class="searchInput"
          placeHolder="Search"
        >
      </div>
      <div class="container">
        <div v-if="weapons.length != 0">
          <div v-if="SearchItemResults.length != 0">
            <ul>
              <li v-for="weapon in SearchItemResults"
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
    const passedTimeout = 300
    
    return {
      input,
      passedTimeout,
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.input
      },
      set(passedValue) {
        this.input = passedValue
      }
    },
    SearchItemResults: function() {
      var localWeapons = this.weapons;
      
      if (typeof localWeapons !== 'undefined') {
        console.log(localWeapons[0].name);
      } else {
        console.log('user is not defined');
      }
      
      var localSearchQuery = this.input;
      
      if (typeof localSearchQuery !== 'undefined') {
        console.log(localSearchQuery);
      } else {
        console.log('user is not defined');
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
</style>
