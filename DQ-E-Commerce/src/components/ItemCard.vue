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
		width: 220px;
		height: 190px;
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
	
	@media (max-width: 1000px) {
	  .ItemCard {
		  border: 3px solid white;
		  width: 130px;
		  height: 90px;
		  margin: 6px;
		  border-radius: 5px;
		  padding: 8px 16px;
		  font-size: 10px;
	  }
	  .ItemCard:hover {
		border: 3px solid rgba(166, 198, 255, 1);
	  }
	  .longerName {
		  color: red;
	  }
	}
	
	@media (max-width: 600px) {
	  .ItemCard {
		  border: 3px solid white;
		  width: 90px;
		  height: 80px;
		  margin: 3px;
		  border-radius: 5px;
		  padding: 4px 4px;
		  font-size: 10px;
	  }
	  .ItemCard:hover {
		border: 3px solid rgba(166, 198, 255, 1);
	  }
	  .longerName {
		  color: red;
	  }
	}
	
</style>