<script>
	import ItemCard from './ItemCard.vue'
	export default {
		name: "weaponList",
		props: ['weapons'],
		components: 'ItemCard'
}
	
</script>

<template>
	<ul>
	<li v-for="weapon in weapons.weapons">
		
		<ItemCard :weapon=weapon />
		
	</li>
	</ul>
	
	
</template>

<style>
	li {
		padding-bottom: 8px;
		padding-top: 8px;
		list-style-type: none;
		column-span: none;
	}
	ul {
		column-count: 2;
	}
	
</style>