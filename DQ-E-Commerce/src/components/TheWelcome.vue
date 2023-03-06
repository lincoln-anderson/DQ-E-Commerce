<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import itemCard from './itemCard.vue'
import weapons from '../weapons.json'
var passedWeapons = weapons.weapons
</script>

<template>
  <div class="items">
    
    
    
    <itemCard :weapons=weapons />
  </div>
</template>


<style>
  .items {
    text-align: center;
  }
  
  
</style>
