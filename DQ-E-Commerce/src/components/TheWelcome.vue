<template>
  <div class="catalog">
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
        <ul>
          <li v-for="weapon in weapons"
          :key="weapon.id"
          class="weapon">
          
            <ItemCard :weapon=weapon />
          </li>
        </ul>
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
    const debouncedInput = ref('')
    const passedInput = 300
    
    return {
      debouncedInput,
      passedInput,
    }
  },
  computed: {
    searchQuery: {
      get() {
        return this.debouncedInput
      },
      set(passedValue) {
        if (this.timeout) clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.debouncedInput = passedValue
          }, this.passedTimeout)
        }
    },
    SearchItemResults: function() {
      var localWeapons = self.weapons;
      
      var localSearchQuery = self.searchQuery;
      
      localSearchQuery = localSearchQuery.trim().toLowerCase();
      
      localServices = localServices.filter(function(item){
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
  .catalog {
    max-width: 1250px;
    margin: 2rem auto;
  }
  li {
    padding-bottom: 8px;
    padding-top: 8px;
    list-style-type: none;
  }
  ul {
    column-count: 2;
    align-content: center;
  }
  .container {
    display: grid;
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px 30px 0 0;
  }
</style>
