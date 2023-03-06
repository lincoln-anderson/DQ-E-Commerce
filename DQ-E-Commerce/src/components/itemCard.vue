<script>
	export default {
		name: "itemCard",
		props: ['weapons'],
}
	
</script>

<template>
	
	<ul>
	<li class="itemCard" v-for="weapon in weapons.weapons">
		
		<h3 class="weapons"> {{ weapon.name }}: +{{ weapon.stats }} Price: {{ weapon.price }}</h3>
		
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