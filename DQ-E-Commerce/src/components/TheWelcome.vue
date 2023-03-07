<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import weaponList from './weaponList.vue'
import weapons from '../weapons.json'
var passedWeapons = weapons.weapons
</script>

<template>
  <div class="catalog">
    
    
    
    <weaponList :weapons=weapons />
  </div>
</template>


<style>
  .catalog {
    max-width: 1250px;
    margin: 2rem auto;
  }
</style>
