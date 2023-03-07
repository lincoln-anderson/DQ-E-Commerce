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
		<div v-if="weapon.name.length < 25">
			<p> {{ weapon.name }} </p>
			<p> attack: +{{ weapon.stats }}</p>
			<p> Costs: {{ weapon.price }}</p>
		</div>
		<div class="longerName" v-else>
			<p> {{ weapon.name }} </p>
			<p> attack: +{{ weapon.stats }}</p>
			<p> Costs: {{ weapon.price }}</p>
		</div>
		
	</div>
	
</template>

<style>
	.ItemCard {
		border: 3px solid white;
		width: 180px;
		height: 140px;
		margin: 6px;
		border-radius: 5px;
		padding: 8px 16px;
	}
	.ItemCard:hover {
	  border: 3px solid rgba(166, 198, 255, 1);
	}
	.longerName {
		color: red;
	}
	
</style>