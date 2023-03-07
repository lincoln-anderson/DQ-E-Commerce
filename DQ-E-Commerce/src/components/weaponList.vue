<script>
	export default {
		name: "weaponList",
		props: ['weapons'],
}
import ItemCard from './ItemCard.vue'
	
</script>

<template>
	
	<ItemCard />
	
	<ul>
	<li v-for="weapon in weapons.weapons">
		
		
		
	</li>
	</ul>
	
	
</template>

<style>
	li {
		padding: 10px;
		list-style-type: none;
	}
	ul {
		column-count: 2;
		text-align: left;
	}
	
</style>