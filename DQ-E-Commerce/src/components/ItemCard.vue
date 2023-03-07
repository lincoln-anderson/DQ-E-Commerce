<script>
	export default {
			name: "ItemCard",
			props: {
				weapon: {
					type: Object
				}
				}
	}
</script>
<template>
	<div class="ItemCard">
		<h4> {{ weapon.name }} </h4>
		<h5> attack: +{{ weapon.stats }}</h5>
		<h5> Costs only {{ weapon.price }} gold</h5>
		
	</div>
	
</template>

<style>
	.ItemCard {
		border: 3px solid white;
		padding: 5px;
		text-align: center;
	}
	
</style>