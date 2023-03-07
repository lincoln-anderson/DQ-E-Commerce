<script>
	import ItemCard from './ItemCard.vue'
	export default {
		name: "weaponList",
		props: ['weapons'],
		components: 'ItemCard'
}
	
</script>

<template>
	<div class="container">
	<ul>
	<li v-for="weapon in weapons.weapons">
		
		<ItemCard :weapon=weapon />
		
	</li>
	</ul>
	</div>
	
</template>

<style>
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
		display: flex;
		  flex-wrap: wrap;
		  justify-content: center;
		  margin: 30px 30px 0 0;
	}
	
</style>